
"use client"

import React from 'react'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Ruler, CheckCircle2, FileText, Info } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const categories = ['Todos', 'Projetos', 'Laudos']

interface ProjectDetail {
  title: string;
  category: string;
  img: string | undefined;
  span: string;
  description: string;
  features: string[];
  standards: string[];
}

export function ProjectHub() {
  const [filter, setFilter] = React.useState('Todos')

  const projects: ProjectDetail[] = [
    { 
      title: 'Projeto Estrutural', 
      category: 'Projetos', 
      img: PlaceHolderImages.find(i => i.id === 'proj-estrutural')?.imageUrl, 
      span: 'row-span-2',
      description: 'Desenvolvimento completo de sistemas estruturais em concreto armado, aço ou alvenaria estrutural, focando na segurança e otimização de materiais.',
      features: ['Dimensionamento de fundações', 'Análise de cargas (Vento, Sobrecarga)', 'Detalhamento de armaduras', 'Modelagem 3D Estrutural'],
      standards: ['NBR 6118 (Concreto)', 'NBR 6120 (Cargas)', 'NBR 6123 (Vento)']
    },
    { 
      title: 'Projeto Elétrico', 
      category: 'Projetos', 
      img: PlaceHolderImages.find(i => i.id === 'proj-eletrico')?.imageUrl, 
      span: 'row-span-1',
      description: 'Planejamento de toda a rede elétrica predial ou residencial, garantindo eficiência energética e segurança contra sobrecargas.',
      features: ['Dimensionamento de circuitos', 'Quadro de cargas', 'Projeto de luminotécnica', 'Sistemas de aterramento'],
      standards: ['NBR 5410 (Baixa Tensão)', 'NBR 5419 (SPDA)']
    },
    { 
      title: 'Projeto Hidráulico', 
      category: 'Projetos', 
      img: PlaceHolderImages.find(i => i.id === 'proj-hidraulico')?.imageUrl, 
      span: 'row-span-1',
      description: 'Sistemas de abastecimento de água fria/quente, esgoto sanitário e drenagem de águas pluviais.',
      features: ['Traçado de tubulações', 'Cálculo de pressão e vazão', 'Reservatórios', 'Reuso de águas pluviais'],
      standards: ['NBR 5626 (Água Fria)', 'NBR 8160 (Esgoto)']
    },
    { 
      title: 'Projeto Acústico', 
      category: 'Projetos', 
      img: PlaceHolderImages.find(i => i.id === 'proj-acustico')?.imageUrl, 
      span: 'row-span-1',
      description: 'Soluções integradas para isolamento e condicionamento acústico de ambientes residenciais e comerciais.',
      features: ['Mapa de ruído', 'Tratamento de reverberação', 'Especificação de materiais isolantes', 'Simulação acústica'],
      standards: ['NBR 10151', 'NBR 15575 (Desempenho)']
    },
    { 
      title: 'Projeto Bombeiros (AVCB/CLCB)', 
      category: 'Projetos', 
      img: PlaceHolderImages.find(i => i.id === 'proj-bombeiros')?.imageUrl, 
      span: 'row-span-1',
      description: 'Regularização e segurança contra incêndio para obtenção de licenciamento junto ao Corpo de Bombeiros.',
      features: ['Rota de fuga', 'Sinalização de emergência', 'Dimensionamento de hidrantes e extintores', 'Sistemas de alarme'],
      standards: ['Decretos Estaduais', 'Instruções Técnicas (ITs)']
    },
    { 
      title: 'Projeto Arquitetônico', 
      category: 'Projetos', 
      img: PlaceHolderImages.find(i => i.id === 'proj-arquitetonico')?.imageUrl, 
      span: 'row-span-2',
      description: 'Concepção espacial e estética focada na funcionalidade, conforto e viabilidade técnica da obra.',
      features: ['Estudo preliminar', 'Anteprojeto e Projeto Executivo', 'Aprovação na prefeitura', 'Design de interiores'],
      standards: ['NBR 9050 (Acessibilidade)', 'Códigos de Obras Municipais']
    },
    { 
      title: 'Projeto de automação', 
      category: 'Projetos', 
      img: PlaceHolderImages.find(i => i.id === 'proj-automacao')?.imageUrl, 
      span: 'row-span-1',
      description: 'Integração tecnológica para controle de iluminação, climatização, segurança e entretenimento.',
      features: ['Controle via voz/app', 'Sensores de presença inteligentes', 'Gestão de energia', 'Cenários de iluminação'],
      standards: ['Tecnologia KNX/ZigBee', 'Integração Predial']
    },
    { 
      title: 'Laudo Acústico', 
      category: 'Laudos', 
      img: PlaceHolderImages.find(i => i.id === 'laudo-acustico')?.imageUrl, 
      span: 'row-span-1',
      description: 'Medição técnica de níveis de ruído para verificação de conformidade com legislações ambientais.',
      features: ['Medições in-loco', 'Relatório de conformidade', 'Análise de frequências', 'Recomendações corretivas'],
      standards: ['NBR 10151', 'NBR 10152']
    },
    { 
      title: 'Laudo de Vistoria', 
      category: 'Laudos', 
      img: PlaceHolderImages.find(i => i.id === 'laudo-vistoria')?.imageUrl, 
      span: 'row-span-1',
      description: 'Inspeção técnica detalhada para identificar patologias, falhas construtivas ou estado de conservação.',
      features: ['Vistoria cautelar', 'Registro fotográfico', 'Identificação de fissuras/infiltrações', 'Parecer técnico final'],
      standards: ['NBR 13752', 'IBAPE-SP']
    },
    { 
      title: 'Laudo Estrutural', 
      category: 'Laudos', 
      img: PlaceHolderImages.find(i => i.id === 'laudo-estrutural')?.imageUrl, 
      span: 'row-span-2',
      description: 'Avaliação técnica da estabilidade e integridade de estruturas existentes para reformas ou verificação de segurança.',
      features: ['Esclerometria', 'Mapeamento de armaduras', 'Cálculo de recapacitação', 'Laudo de estabilidade'],
      standards: ['NBR 6118', 'NBR 16280 (Reformas)']
    },
  ]

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal-on-scroll">
          <div>
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Portfólio de Serviços</span>
            <h2 className="text-5xl font-headline font-bold uppercase">Soluções de <br /> Engenharia</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs uppercase tracking-widest font-bold border transition-all ${
                  filter === cat 
                    ? 'bg-primary border-primary text-white' 
                    : 'bg-transparent border-white/10 text-muted-foreground hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {filteredProjects.map((project, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <Card 
                  className={`bg-card border-white/5 overflow-hidden group rounded-none cursor-pointer reveal-on-scroll ${project.span}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-0 h-full relative">
                    <img 
                      src={project.img || 'https://picsum.photos/seed/fallback/800/600'} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">{project.category}</span>
                        <h3 className="text-2xl font-headline font-bold uppercase text-white group-hover:text-primary transition-colors">{project.title}</h3>
                        <div className="h-[1px] w-0 group-hover:w-full bg-primary/40 transition-all duration-700" />
                        <div className="flex items-center gap-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          Ver detalhes técnicos <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-card border-white/10 text-white rounded-none">
                <DialogHeader>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Ruler className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{project.category}</span>
                  </div>
                  <DialogTitle className="text-3xl font-headline font-bold uppercase tracking-tight">{project.title}</DialogTitle>
                  <DialogDescription className="text-muted-foreground text-base mt-4 leading-relaxed">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-white/5 pt-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                      <CheckCircle2 className="w-4 h-4" /> Escopo Técnico
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                      <FileText className="w-4 h-4" /> Normas Aplicadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.standards.map((std, sIdx) => (
                        <span key={sIdx} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 uppercase tracking-tighter">
                          {std}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 p-4 bg-primary/5 border border-primary/10 flex gap-3">
                      <Info className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-[10px] text-muted-foreground leading-tight uppercase tracking-widest">
                        Projetos elaborados com rigor técnico e conformidade legal garantida.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
