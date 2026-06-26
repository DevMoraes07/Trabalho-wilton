
"use client"

import React from 'react'
import { MessageCircle } from 'lucide-react'

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl reveal-on-scroll">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block underline underline-offset-8">Consultoria</span>
          <h2 className="text-5xl font-headline font-bold uppercase mb-8">Orçamento <br /> Técnico</h2>
          <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
            Precisa de clareza em seus projetos ou regularização para seu empreendimento? Inicie uma revisão técnica formal agora mesmo através do nosso canal direto de atendimento.
          </p>
          
          <div className="max-w-md">
            <div className="flex gap-4 items-start p-6 bg-muted/20 border border-white/5 group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <span className="text-primary font-code text-sm">01</span>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">WhatsApp Técnico</h4>
                <a 
                  href="https://wa.me/5511994460429" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Iniciar conversa agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
