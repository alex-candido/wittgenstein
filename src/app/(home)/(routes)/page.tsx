"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [diagramData, setDiagramData] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!diagramData) return;

    navigator.clipboard.writeText(JSON.stringify(diagramData, null, 2));
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setDiagramData(null);

    try {
      const response = await fetch("/api/generate-diagram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch diagram data from the API.");
      }

      const data = await response.json();
      setDiagramData(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full p-4">
      {/* Aside Section */}
      <aside className="md:col-span-1 flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Gerador de Diagrama</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pt-4">
            <Textarea
              placeholder="Descreva seu diagrama aqui... Por exemplo: 'Um fluxo de login com três passos: usuário, senha e sucesso.'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={10}
            />
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? "Gerando..." : "Gerar Diagrama"}
            </Button>
          </CardContent>
        </Card>
      </aside>

      {/* Preview Section */}
      <main className="md:col-span-2">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Preview do Resultado (JSON)</CardTitle>
              {diagramData && (
                <Button onClick={handleCopy} variant="ghost" size="sm">
                  {isCopied ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  {isCopied ? "Copiado!" : "Copiar"}
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto pt-4">
            {isLoading && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[220px]" />
              </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
            {diagramData && (
              <pre className="p-4 h-[80vh] bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto">
                <code>{JSON.stringify(diagramData, null, 2)}</code>
              </pre>
            )}
            {!isLoading && !diagramData && !error && (
              <p className="text-gray-500">
                O resultado do diagrama aparecerá aqui.
              </p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
