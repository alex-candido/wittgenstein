'use client';

import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface Presentation {
  id: string;
  generateId: string;
  title: string;
  description: string;
}

export default function DocumentsPage() {
  const [presentations, setPresentations] = useState<Presentation[]>([]);

  useEffect(() => {
    const mockPresentations = Array.from({ length: 3 }).map((_, i) => ({
      id: uuidv4(),
      generateId: uuidv4(),
      title: `Apresentação Sobre IA ${i + 1}`,
      description: 'Criada em 05 de outubro de 2025',
    }));
    setPresentations(mockPresentations);
  }, []);

  return (
    <>
      <header className="flex items-center gap-4 mb-8">
        <Link href="/app">
            <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
            </Button>
        </Link>
        <h1 className="text-2xl font-bold">Apresentações</h1>
        <div className="ml-auto">
            <Link href="/app" passHref>
                <Button>+ Nova Apresentação</Button>
            </Link>
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.length > 0
            ? presentations.map((pres) => (
                <Card key={pres.id}>
                  <CardHeader>
                    <CardTitle>{pres.title}</CardTitle>
                    <CardDescription>{pres.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted h-32 rounded-md flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Thumbnail</span>
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Link href={`/app/generate/${pres.generateId}`} className="w-full">
                      <Button variant="secondary" className="w-full">
                        Editar Outline
                      </Button>
                    </Link>
                    <Link href={`/app/presentation/${pres.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Abrir
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="bg-muted animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-background rounded w-3/4"></div>
                    <div className="h-4 bg-background rounded w-1/2 mt-2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-background h-32 rounded-md"></div>
                  </CardContent>
                  <CardFooter>
                    <div className="h-10 bg-background rounded w-full"></div>
                  </CardFooter>
                </Card>
              ))}
        </div>
      </main>
    </>
  );
}