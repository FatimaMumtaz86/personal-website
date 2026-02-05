'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/FatimaMumtaz86' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/fatima-mumtaz-3fm33' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/3_fm33' },
    {
      name: 'Email',
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=fatimamumtaz486@gmail.com',
    },
  ]

  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Fatima Mumtaz. Built with Next.js & FastAPI.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              const isExternal = link.href.startsWith('http')
              return (
                <a
                  key={link.name}
                  href={link.href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-zinc-400 hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
