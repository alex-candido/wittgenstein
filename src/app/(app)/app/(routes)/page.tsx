"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function AppPage() {
  // This would be generated on the backend upon form submission
  const newGenerateId = uuidv4();

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Crie uma nova apresentação</CardTitle>
          <CardDescription>
            Insira o tema e os parâmetros para gerar o outline da sua
            apresentação.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label htmlFor="prompt" className="text-base font-medium">
                Prompt Principal
              </Label>
              <Textarea
                id="prompt"
                placeholder="Ex: O impacto da inteligência artificial no mercado de trabalho do futuro."
                className="min-h-[120px] text-base mt-2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="slideCount">Quantidade de Slides</Label>
                <Input
                  id="slideCount"
                  type="number"
                  placeholder="Ex: 10"
                  defaultValue={10}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pageSize">Estilo da Página</Label>
                <Select defaultValue="16:9">
                  <SelectTrigger id="pageSize">
                    <SelectValue placeholder="Selecione o estilo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16:9">16:9 (Widescreen)</SelectItem>
                    <SelectItem value="4:3">4:3 (Tradicional)</SelectItem>
                    <SelectItem value="fluid">Fluido (Automático)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Idioma</Label>
                <Select defaultValue="pt-BR">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Selecione o idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en-US">Inglês (EUA)</SelectItem>
                    <SelectItem value="es-ES">Espanhol</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="keywords">Palavras-chave</Label>
                <Input
                  id="keywords"
                  placeholder="Ex: inovação, carreira, automação"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Link href={`/app/generate/${newGenerateId}`}>
                <Button size="lg">Gerar Outline</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
