'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GripVertical, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

// Mock data for a slide in the outline
interface SlideOutline {
  id: string;
  title: string;
  layout: string;
  depth: string;
}

const mockOutline: SlideOutline[] = [
  { id: '1', title: 'Introdução à Inteligência Artificial', layout: 'title', depth: 'concise' },
  { id: '2', title: 'História da IA: Dos Testes de Turing à Deep Learning', layout: 'timeline', depth: 'detailed' },
  { id: '3', title: 'Tipos de IA: Fraca vs. Forte', layout: 'comparison', depth: 'concise' },
  { id: '4', title: 'Aplicações Práticas no Dia a Dia', layout: 'list', depth: 'detailed' },
  { id: '5', title: 'O Futuro da IA e Considerações Éticas', layout: 'text', depth: 'concise' },
];

export default function GeneratePage() {
  // This would be generated on the backend upon form submission
  const newPresentationId = uuidv4();

  return (
    <div className="space-y-4">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold">Editor de Outline</h1>
                <p className="text-muted-foreground">Arraste, edite e configure cada slide antes de criar a apresentação.</p>
            </div>
            <Link href={`/app/presentation/${newPresentationId}`}>
                <Button size="lg">Criar Apresentação</Button>
            </Link>
        </div>

        <div className="space-y-4">
          {mockOutline.map((slide) => (
            <Card key={slide.id} className="flex items-center p-4 space-x-4 bg-card shadow-sm">
              <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
              <div className="flex-grow">
                <Input type="text" defaultValue={slide.title} className="text-base font-medium" />
              </div>
              <div className="w-48">
                <Select defaultValue={slide.layout}>
                  <SelectTrigger>
                    <SelectValue placeholder="Layout Visual" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Título</SelectItem>
                    <SelectItem value="timeline">Linha do Tempo</SelectItem>
                    <SelectItem value="comparison">Comparação</SelectItem>
                    <SelectItem value="list">Lista</SelectItem>
                    <SelectItem value="text">Texto Simples</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-40">
                <Select defaultValue={slide.depth}>
                  <SelectTrigger>
                    <SelectValue placeholder="Profundidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concise">Conciso</SelectItem>
                    <SelectItem value="detailed">Detalhado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-5 w-5 text-red-500" />
              </Button>
            </Card>
          ))}
        </div>
    </div>
  );
}
