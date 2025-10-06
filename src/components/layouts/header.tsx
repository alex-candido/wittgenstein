'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Presentation } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
            <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
                <Link
                href="/"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                <Presentation className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">presenterai</span>
                </Link>
                <Link
                href="/"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                Home
                </Link>
                <Link
                href="/app"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                Criar Novo
                </Link>
                <Link
                href="/app/documents"
                className="flex items-center gap-4 px-2.5 text-foreground"
                >
                Apresentações
                </Link>
            </nav>
            </SheetContent>
        </Sheet>
        <div className="relative ml-auto flex-1 md:grow-0">
            {/* Pode adicionar um search bar aqui no futuro */}
        </div>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AC</AvatarFallback>
        </Avatar>
    </header>
  );
}
