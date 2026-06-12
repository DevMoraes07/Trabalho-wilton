"use client"

import React from 'react'
import Link from 'next/link'
import { Ruler, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ]

  const whatsappUrl = "https://wa.me/5511994460429"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border border-primary/40 flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
            <Ruler className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500 text-primary w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-xl tracking-tighter uppercase leading-none">Wivi</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-medium">Engenharia</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-none uppercase text-xs tracking-widest px-6" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/5 p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-headline font-medium tracking-wide uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="w-full bg-primary text-white rounded-none uppercase" asChild onClick={() => setIsOpen(false)}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
