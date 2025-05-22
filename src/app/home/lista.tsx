'use client';

import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';

type Vehicle = {
  id: string;
  marca: string;
  modelo: string;
  valor: string;
  ano: number;
  combustivel: string;
  codigoFipe: string;
};

export default function ListaCompras() {
  const [items, setItems] = useState<Vehicle[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('lista-compras');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  const removerItem = (id: string) => {
    const novaLista = items.filter(item => item.id !== id);
    setItems(novaLista);
    localStorage.setItem('lista-compras', JSON.stringify(novaLista));
  };

  return (
    <div
      style={{
        minHeight: '89.6vh',
        backgroundColor: '#1a1a1a',
        padding: '40px',
        fontFamily: "'Orbitron', sans-serif",
        color: '#eee',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          marginBottom: '24px',
          fontWeight: '700',
          color: '#e63946',
        }}
      >
        Lista de Compras
      </h1>

      {items.length === 0 ? (
        <p
          style={{
            fontSize: '1.2rem',
            color: '#999',
            fontStyle: 'italic',
          }}
        >
          Nenhum item na lista de compras.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            width: '100%',
          }}
        >
          {items.map(item => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#2a2a2a',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(230, 57, 70, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div>
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#e63946',
                    marginBottom: '10px',
                  }}
                >
                  {item.marca} {item.modelo}
                </h2>
                <p style={{ margin: '4px 0', color: '#ccc' }}>
                  <strong>Valor:</strong> {item.valor}
                </p>
                <p style={{ margin: '4px 0', color: '#ccc' }}>
                  <strong>Ano:</strong> {item.ano}
                </p>
                <p style={{ margin: '4px 0', color: '#ccc' }}>
                  <strong>Combustível:</strong> {item.combustivel}
                </p>
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '0.85rem',
                    color: '#888',
                    fontStyle: 'italic',
                  }}
                >
                  Código FIPE: {item.codigoFipe}
                </p>
              </div>

              <button
                onClick={() => removerItem(item.id)}
                style={{
                  marginTop: '16px',
                  padding: '10px',
                  backgroundColor: '#e63946',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  userSelect: 'none',
                  boxShadow: '0 2px 8px rgba(230, 57, 70, 0.5)',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a0272f')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e63946')}
                aria-label={`Remover ${item.marca} ${item.modelo}`}
              >
                <Trash2 size={18} />
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
