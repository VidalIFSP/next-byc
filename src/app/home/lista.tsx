'use client'

import { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react'

type Vehicle = {
  id: string
  marca: string
  modelo: string
  valor: string
  ano: number
  combustivel: string
  codigoFipe: string
}

export default function ListaCompras() {
  const [items, setItems] = useState<Vehicle[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('lista-compras')
    if (stored) {
      setItems(JSON.parse(stored))
    }
  }, [])

  const removerItem = (id: string) => {
    const novaLista = items.filter(item => item.id !== id)
    setItems(novaLista)
    localStorage.setItem('lista-compras', JSON.stringify(novaLista))
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '2rem 1rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        fontWeight: '700',
        color: '#2c3e50',
      }}>Lista de Compras</h1>

      {items.length === 0 ? (
        <p style={{
          fontSize: '1.25rem',
          color: '#7f8c8d',
          fontStyle: 'italic',
        }}>Nenhum item na lista de compras.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          width: '100%',
          maxWidth: '960px',
        }}>
          {items.map(item => (
            <div key={item.id} style={{
              backgroundColor: '#fff',
              borderRadius: '14px',
              padding: '1.5rem 2rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
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
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#c0392b',
                  marginBottom: '0.75rem',
                }}>
                  {item.marca} {item.modelo}
                </h2>
                <p style={{ margin: '0.3rem 0', fontSize: '1rem', color: '#444' }}>
                  <strong>Valor:</strong> {item.valor}
                </p>
                <p style={{ margin: '0.3rem 0', fontSize: '1rem', color: '#444' }}>
                  <strong>Ano:</strong> {item.ano}
                </p>
                <p style={{ margin: '0.3rem 0', fontSize: '1rem', color: '#444' }}>
                  <strong>Combustível:</strong> {item.combustivel}
                </p>
                <p style={{
                  marginTop: '1rem',
                  fontSize: '0.85rem',
                  color: '#888',
                  fontStyle: 'italic',
                }}>
                  Código FIPE: {item.codigoFipe}
                </p>
              </div>

              <button
                onClick={() => removerItem(item.id)}
                style={{
                  marginTop: '1.5rem',
                  padding: '0.5rem 1.2rem',
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  userSelect: 'none',
                  boxShadow: '0 2px 8px rgba(231, 76, 60, 0.5)',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c0392b')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e74c3c')}
                aria-label={`Remover ${item.marca} ${item.modelo}`}
              >
                <Trash2 size={20} />
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
