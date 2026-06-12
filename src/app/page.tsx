
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { ProjectHub } from '@/components/ProjectHub'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { getPlaceholderById } from '@/lib/placeholder-images'

export default function Home() {
  const aboutImg = getPlaceholderById('about-rigor');

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="projects">
        <ProjectHub />
      </div>
      <div id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square reveal-on-scroll">
              <img 
                src={aboutImg?.imageUrl || "https://picsum.photos/seed/eng4/800/800"} 
                alt={aboutImg?.description || "Engineering Rigor"} 
                className="w-full h-full object-cover grayscale opacity-40 border border-white/10 p-2"
                data-ai-hint={aboutImg?.imageHint || "engineering plan"}
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 backdrop-blur-3xl border border-white/10 p-6 flex flex-col justify-end">
                <span className="text-4xl font-headline font-bold text-primary">15+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Anos de Experiência</span>
              </div>
            </div>
            <div className="reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
              <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Sobre o Profissional</span>
              <h2 className="text-5xl font-headline font-bold uppercase mb-8">Integridade Estrutural <br /> Além dos Cálculos</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Wilton não é apenas um engenheiro; ele é um coreógrafo estrutural. Com uma base profunda em mecânica clássica e um domínio avançado de otimização computacional, ele garante que cada projeto supere os marcos de desempenho.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Sua metodologia integra o BIM (Building Information Modeling) no núcleo, permitindo transições fluidas da análise de carga inicial à gestão no canteiro de obras. Esta abordagem holística reduz o desperdício de material enquanto maximiza a liberdade arquitetônica.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">Softwares</h4>
                  <p className="text-xs text-muted-foreground">Revit, Rhino, SAP2000, Tekla</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">Normas</h4>
                  <p className="text-xs text-muted-foreground">Eurocodes, ASCE 7, ACI 318, AISC 360</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </main>
  )
}
