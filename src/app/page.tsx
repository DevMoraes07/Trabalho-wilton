
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
              <h2 className="text-5xl font-headline font-bold uppercase mb-8">Integridade dos seus projetos <br /> Além dos Cálculos</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Muito mais do que cálculos, nós entregamos inteligência construtiva. Desenvolvemos projetos altamente otimizados que garantem a segurança da sua obra e reduzem custos desnecessários. Combinamos engenharia avançada e tecnologia computacional para viabilizar o seu projeto arquitetônico, garantindo o melhor custo-benefício para a sua execução.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossa metodologia aplica a tecnologia BIM (Building Information Modeling) para prever e solucionar problemas antes mesmo do início da obra. Essa integração minuciosa garante uma transição perfeita para o canteiro, resultando em zero surpresas, drástica redução no desperdício de materiais e total compatibilização. Invista em um projeto que otimiza o seu tempo e maximiza os seus lucros.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                </div>
                <div>
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
