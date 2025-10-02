
'use client';

import Link from 'next/link';

export default function Page({ params }: { params: { id: string } }) {
  const hasPresentation = true; // Alterne para false para ver o formulário
  const newGenerationCode = Math.random().toString(36).substring(7);

  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Documento: {params.id}</h1>
        <div>
          <Link href={`/app/documents/${params.id}/generate/${newGenerationCode}`}>
            <button className="bg-gray-200 px-4 py-2 rounded mr-2">Nova Geração</button>
          </Link>
          <Link href={`/app/documents`}>
            <button className="bg-gray-200 px-4 py-2 rounded">Voltar</button>
          </Link>
        </div>
      </header>

      {hasPresentation ? (
        <div className="flex-grow bg-white rounded-lg shadow-inner border p-4">
          <div className="w-full h-[60vh] bg-gray-200 rounded animate-pulse flex items-center justify-center">
            <p className="text-gray-400">Canvas da Apresentação Principal</p>
          </div>
        </div>
      ) : (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Gerar Nova Apresentação</h2>
          <div className="p-6 bg-white rounded-lg shadow-md animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4 float-right"></div>
          </div>
        </div>
      )}
    </div>
  );
}
