
"use client"

import React from 'react'
import { generateProjectDescription } from '@/ai/flows/generate-project-description-flow'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, Sparkles, Wand2, FileText, Download } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { useFirestore } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { errorEmitter } from '@/firebase/error-emitter'
import { FirestorePermissionError } from '@/firebase/errors'

export function AICaseStudyArchitect() {
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<string | null>(null)
  const { toast } = useToast()
  const db = useFirestore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    
    try {
      const input = {
        projectName: formData.get('projectName') as string,
        projectType: formData.get('projectType') as string,
        location: formData.get('location') as string,
        client: formData.get('client') as string,
        startDate: new Date().getFullYear().toString(),
        endDate: (new Date().getFullYear() + 1).toString(),
        loads: formData.get('loads') as string,
        materials: formData.get('materials') as string,
        designStandards: formData.get('designStandards') as string,
        softwareUsed: formData.get('softwareUsed') as string,
        challenges: formData.get('challenges') as string,
        timelineDescription: 'Standard construction cycle',
        scopeOfWork: formData.get('scope') as string,
      }
      
      const { description } = await generateProjectDescription(input)
      setResult(description)

      // Save to Firestore
      if (db) {
        const studiesRef = collection(db, 'caseStudies')
        addDoc(studiesRef, {
          ...input,
          description,
          createdAt: serverTimestamp()
        }).catch(async () => {
          const permissionError = new FirestorePermissionError({
            path: studiesRef.path,
            operation: 'create',
            requestResourceData: { ...input, description },
          });
          errorEmitter.emit('permission-error', permissionError);
        });
      }

      toast({ title: "Draft Generated", description: "Your professional project description is ready." })
    } catch (error) {
      toast({ variant: "destructive", title: "Generation failed", description: "Please check your technical parameters." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="ai-architect" className="py-24 bg-muted/30 relative border-y border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Sparkles className="w-64 h-64 text-primary" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal-on-scroll">
            <div className="inline-flex items-center gap-2 text-secondary mb-4">
              <Wand2 className="w-5 h-5" />
              <span className="uppercase tracking-widest text-xs font-bold">GenAI Case Study Architect</span>
            </div>
            <h2 className="text-4xl font-headline font-bold uppercase mb-6">Convert Technical <br /> Data into Narratives</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Enter your raw engineering parameters—loads, materials, and standards—and let our specialized AI architect a professional case study with technical precision.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Project Name</Label>
                  <Input name="projectName" required className="bg-background border-white/10 rounded-none focus:ring-primary h-12" placeholder="e.g. Helix Tower" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Location</Label>
                  <Input name="location" required className="bg-background border-white/10 rounded-none focus:ring-primary h-12" placeholder="Dubai, UAE" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Material Specs</Label>
                  <Input name="materials" required className="bg-background border-white/10 rounded-none focus:ring-primary h-12" placeholder="C50/60 Concrete, S355 Steel" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Load Specs</Label>
                  <Input name="loads" required className="bg-background border-white/10 rounded-none focus:ring-primary h-12" placeholder="Dead 10kN/m2, Wind 1.2kPa" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Key Technical Challenges</Label>
                <Textarea name="challenges" required className="bg-background border-white/10 rounded-none focus:ring-primary min-h-[100px]" placeholder="Seismic dampening in sandy soil foundations..." />
              </div>

              <input type="hidden" name="projectType" value="Structural Analysis" />
              <input type="hidden" name="client" value="Private Developer" />
              <input type="hidden" name="designStandards" value="Eurocode 2 & 3" />
              <input type="hidden" name="softwareUsed" value="ETABS, SAP2000" />
              <input type="hidden" name="scope" value="Full structural design and coordination" />

              <Button type="submit" disabled={loading} className="w-full h-14 bg-primary text-white rounded-none uppercase tracking-widest font-bold">
                {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
                Generate Technical Narrative
              </Button>
            </form>
          </div>

          <div className="reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="h-full border border-white/10 bg-background/50 p-8 flex flex-col min-h-[500px]">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <FileText className="text-primary w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Output Preview</span>
                </div>
                {result && (
                  <Button variant="ghost" size="sm" className="text-[10px] uppercase tracking-tighter text-secondary">
                    <Download className="w-3 h-3 mr-1" /> Export PDF
                  </Button>
                )}
              </div>
              
              <div className="flex-grow">
                {!result && !loading && (
                  <div className="h-full flex flex-col items-center justify-center text-center p-12">
                    <div className="w-16 h-16 bg-white/5 border border-dashed border-white/20 rounded-full flex items-center justify-center mb-4">
                      <FileText className="text-muted-foreground/30 w-8 h-8" />
                    </div>
                    <p className="text-sm text-muted-foreground">Awaiting technical parameters for generation.</p>
                  </div>
                )}
                
                {loading && (
                  <div className="space-y-4">
                    <div className="h-4 bg-white/5 animate-pulse w-3/4" />
                    <div className="h-4 bg-white/5 animate-pulse w-full" />
                    <div className="h-4 bg-white/5 animate-pulse w-5/6" />
                    <div className="h-4 bg-white/5 animate-pulse w-full" />
                    <div className="h-4 bg-white/5 animate-pulse w-2/3" />
                  </div>
                )}

                {result && (
                  <div className="prose prose-invert prose-sm max-w-none animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap font-body">
                      {result}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[8px] text-muted-foreground uppercase tracking-widest flex justify-between">
                <span>Model: Structural Case Study Agent v2</span>
                <span>ID: {loading ? '...' : (result ? 'GEN-8422' : 'READY')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
