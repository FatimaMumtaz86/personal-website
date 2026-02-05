#!/bin/bash

echo "🚀 Starting Personal Brand Website Development Environment"
echo ""

# Frontend
echo "📦 Starting Frontend (Next.js)..."
cd frontend
npm install
npm run dev &
FRONTEND_PID=$!

# Backend
echo "🐍 Starting Backend (FastAPI)..."
cd ../backend
python3 -m venv venv 2>/dev/null || true
source venv/bin/activate
pip install -r requirements.txt
python main.py &
BACKEND_PID=$!

echo ""
echo "✅ Development servers started!"
echo ""
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:8000"
echo "API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for Ctrl+C
trap "kill $FRONTEND_PID $BACKEND_PID; exit" INT
wait
