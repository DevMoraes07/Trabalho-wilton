
'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { useToast } from '@/hooks/use-toast';

export function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    errorEmitter.on('permission-error', (error: any) => {
      // For developer experience, we show a destructive toast for security rules errors
      toast({
        variant: 'destructive',
        title: 'Erro de Permissão (Firebase)',
        description: `Operação de ${error.context.operation} negada em: ${error.context.path}. Verifique as Security Rules.`,
      });
      
      // Also throw in dev to show the Next.js overlay
      if (process.env.NODE_ENV === 'development') {
        throw error;
      }
    });
  }, [toast]);

  return null;
}
