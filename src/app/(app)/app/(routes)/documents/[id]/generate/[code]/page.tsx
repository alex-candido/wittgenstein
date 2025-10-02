
'use client';

import Link from 'next/link';

export default function Page({ params }: { params: { id: string, code: string } }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Coluna da Esquerda: Histórico de Gerações */}
      <aside className="w-1/4 p-4 bg-white border-r overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Histórico de Gerações</h2>
        <div className="space-y-2 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => {
            const genCode = Math.random().toString(36).substring(7);
            return (
              <Link key={i} href={`/app/documents/${params.id}/generate/${genCode}`}>
                <div className={`p-3 rounded ${params.code === genCode ? 'bg-blue-100' : 'bg-gray-200'}`}>
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

      {/* Coluna da Direita: Outline Editável */}
      <main className="w-3/4 p-8">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Geração: {params.code}</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Gerar Apresentação
            </button>
        </div>
        <div className="space-y-4 animate-pulse">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow-md">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-3"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
