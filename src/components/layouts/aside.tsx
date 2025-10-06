'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { File, Home, PlusSquare, Presentation, Settings } from 'lucide-react';
import Link from 'next/link';

export function Aside() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <TooltipProvider>
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                href="/"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Presentation className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">presenterai</span>
                </Link>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                        href="/"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                        <Home className="h-5 w-5" />
                        <span className="sr-only">Home</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Home</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                        href="/app"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                        <PlusSquare className="h-5 w-5" />
                        <span className="sr-only">Criar Novo</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Criar Novo</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                        href="/app/documents"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                        <File className="h-5 w-5" />
                        <span className="sr-only">Apresentações</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Apresentações</TooltipContent>
                </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </TooltipProvider>
    </aside>
  );
}
