
'use client';

import Link from 'next/link';

export default function Page({ params }: { params: { id: string, code: string } }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Coluna da Esquerda: Histórico de Apresentações */}
      <aside className="w-1/4 p-4 bg-white border-r overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Histórico de Apresentações</h2>
        <div className="space-y-2 animate-pulse">
          {Array.from({ length: 3 }).map((_, i) => {
            const presCode = Math.random().toString(36).substring(7);
            return (
              <Link key={i} href={`/app/documents/${params.id}/presentation/${presCode}`}>
                <div className={`p-3 rounded ${params.code === presCode ? 'bg-blue-100' : 'bg-gray-200'}`}>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                </div>
              </Link>
            );
          })}
        </div>
        <Link href={`/app/documents/${params.id}`}>
            <button className="bg-gray-200 px-4 py-2 rounded mt-4">Voltar</button>
          </Link>
      </aside>

      {/* Coluna da Direita: Canvas da Apresentação */}
      <main className="w-3/4 p-8 flex flex-col">
         <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Apresentação: {params.code}</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Modo Apresentação
            </button>
        </div>
        <div className="flex-grow bg-white rounded-lg shadow-inner border p-4">
          <div className="w-full h-full bg-gray-200 rounded animate-pulse flex items-center justify-center">
            <p className="text-gray-400">Canvas da Apresentação (Excalidraw)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
