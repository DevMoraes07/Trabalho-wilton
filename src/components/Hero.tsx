
"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { getPlaceholderById } from '@/lib/placeholder-images'
import Link from 'next/link'

export function Hero() {
  const heroImg = getPlaceholderById('hero-blueprint');

  return (
    <section className="relative pt-32 pb-20 overflow-hidden engineering-grid min-h-screen flex items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Portfólio de Engenharia de Precisão</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter mb-8 uppercase">
            Construindo o <br /> <span className="text-primary">Futuro</span> com <br /> Rigor Estrutural
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Wilton é um engenheiro estrutural dedicado a transformar visões arquitetônicas complexas em realidades seguras, eficientes e duradouras.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none h-14 px-8 uppercase tracking-widest font-bold group" asChild>
              <Link href="#projects">
                Explorar Projetos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
          <div className="relative border border-white/10 p-4">
            <div className="aspect-[4/5] bg-muted/30 relative overflow-hidden group">
              <img 
                src={heroImg?.imageUrl || "https://picsum.photos/seed/wilton/800/1000"} 
                alt={heroImg?.description || "Architectural Blueprint"} 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-700"
                data-ai-hint={heroImg?.imageHint || "architectural drawing"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              
              {/* Decorative engineering lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/20" />
              <div className="absolute top-0 left-0 w-[1px] h-full bg-primary/20" />
              <div className="absolute top-0 right-0 w-[1px] h-full bg-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
