from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import os
from dotenv import load_dotenv

from database import get_db, init_db
from models import Contact
from schemas import ContactCreate, ContactResponse

load_dotenv()

app = FastAPI(
    title="Portfolio Backend API",
    description="Backend API for portfolio website contact form",
    version="1.0.0"
)

# CORS Configuration
def get_allowed_origins() -> list[str]:
    env_origins = os.getenv("FRONTEND_URL", "")
    origins = [origin.strip() for origin in env_origins.split(",") if origin.strip()]
    origins.extend(["http://localhost:3000", "http://localhost:3001"])
    # Preserve order while removing duplicates
    return list(dict.fromkeys(origins))

app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database on startup
@app.on_event("startup")
def startup_event():
    init_db()

@app.get("/")
def read_root():
    return {
        "message": "Portfolio Backend API",
        "status": "running",
        "docs": "/docs"
    }

@app.post("/api/contact", response_model=ContactResponse, status_code=201)
def create_contact(
    contact: ContactCreate,
    db: Session = Depends(get_db)
):
    """
    Create a new contact form submission
    """
    try:
        # Create new contact record
        db_contact = Contact(
            name=contact.name,
            email=contact.email,
            message=contact.message
        )
        
        db.add(db_contact)
        db.commit()
        db.refresh(db_contact)
        
        return db_contact
    
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Failed to create contact: {str(e)}"
        )

@app.get("/api/contacts", response_model=list[ContactResponse])
def get_all_contacts(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """
    Get all contact form submissions (for admin use)
    """
    contacts = db.query(Contact).offset(skip).limit(limit).all()
    return contacts

@app.get("/api/contact/{contact_id}", response_model=ContactResponse)
def get_contact(contact_id: int, db: Session = Depends(get_db)):
    """
    Get a specific contact by ID
    """
    contact = db.query(Contact).filter(Contact.id == contact_id).first()
    if contact is None:
        raise HTTPException(status_code=404, detail="Contact not found")
    return contact

@app.get("/health")
def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
