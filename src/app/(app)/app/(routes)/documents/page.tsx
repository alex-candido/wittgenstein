'use client';

import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Page() {
  const newDocumentId = uuidv4();

  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Documentos</h1>
        <Link href={`/app/documents/${newDocumentId}`} passHref>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + Novo Documento
          </button>
        </Link>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => {
            const docId = uuidv4();
            const genCode = Math.random().toString(36).substring(7);
            const presCode = Math.random().toString(36).substring(7);
            return (
              <div key={i} className="p-6 bg-gray-200 rounded-lg animate-pulse">
                <Link href={`/app/documents/${docId}`}>
                  <div className="block">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </Link>
                <div className="mt-4 flex justify-end space-x-2">
                  <Link href={`/app/documents/${docId}/generate/${genCode}`}>
                    <div className="text-sm text-blue-500 hover:underline">Gerações</div>
                  </Link>
                  <Link href={`/app/documents/${docId}/presentation/${presCode}`}>
                    <div className="text-sm text-blue-500 hover:underline">Apresentações</div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}