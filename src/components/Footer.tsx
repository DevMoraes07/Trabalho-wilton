"use client"

import { Ruler } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-primary/40 flex items-center justify-center rotate-45">
              <Ruler className="-rotate-45 text-primary w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-lg tracking-tighter uppercase leading-none">Wivi</span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-primary/80 font-medium">Engenharia</span>
            </div>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Behance</a>
            <a href="#" className="hover:text-primary transition-colors">CV / Resume</a>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Wivi Engenharia • Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  )
}
