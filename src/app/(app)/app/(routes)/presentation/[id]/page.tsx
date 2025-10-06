'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownToLine, ArrowLeft, ArrowUpFromLine, Eraser, MousePointer, Pen, Redo, Square, Type, Undo } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

export default function PresentationPage({ params }: { params: { id: string } }) {
  const { id } = use(params);

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-4 lg:gap-8 h-full">
        <div className="lg:col-span-3 flex flex-col gap-4">
            <Card className="flex-grow">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/app/documents">
                            <Button variant="outline" size="icon">
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <CardTitle>Workspace de Edição</CardTitle>
                    </div>
                    <Button>Modo Apresentação</Button>
                </CardHeader>
                <CardContent className="h-[75vh]">
                    <div className="h-full w-full flex gap-4">
                        {/* Slide List */}
                        <div className="w-40 space-y-2 overflow-y-auto pr-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="aspect-[16/9] w-full rounded-md border-2 border-primary bg-muted flex items-center justify-center">
                                    <span className="text-sm text-primary font-semibold">{i + 1}</span>
                                </div>
                            ))}
                        </div>

                        {/* Canvas Area */}
                        <div className="flex-grow h-full bg-muted rounded-lg relative flex items-center justify-center">
                            {/* Toolbar */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-background p-2 rounded-lg shadow-md flex gap-1 border">
                                <Button variant="ghost" size="icon"><MousePointer className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon"><Pen className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon"><Type className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon"><Square className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon"><Eraser className="h-4 w-4" /></Button>
                                <div className="border-l mx-1"></div>
                                <Button variant="ghost" size="icon"><Undo className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon"><Redo className="h-4 w-4" /></Button>
                                <div className="border-l mx-1"></div>
                                <Button variant="ghost" size="icon"><ArrowUpFromLine className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon"><ArrowDownToLine className="h-4 w-4" /></Button>
                            </div>

                            <span className="text-muted-foreground">Canvas do Excalidraw</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Versões</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li className="p-3 bg-primary/10 text-primary rounded-md font-semibold cursor-pointer">
                            Versão Atual ({id.substring(0, 6)})
                        </li>
                        <li className="p-3 hover:bg-muted rounded-md cursor-pointer">
                            Versão anterior (d4e5f6)
                        </li>
                        <li className="p-3 hover:bg-muted rounded-md cursor-pointer">
                            Versão inicial (g7h8i9)
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
