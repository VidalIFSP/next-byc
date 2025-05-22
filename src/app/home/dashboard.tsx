'use client';
import { useState, useEffect } from 'react';
import { getMarcas, getModelos, getAnos, getPreco, VehicleType, Preco } from './api'; // Ajuste o caminho conforme seu projeto

type Favorito = {
  id: string; // combinando marca+modelo+ano para id único
  tipo: VehicleType;
  marca: string;
  modelo: string;
  ano: string;
  preco: string;
};

export default function Dashboard() {
  // Simulação de usuário e favoritos (em app real viria do backend ou context)
  const [favoritos, setFavoritos] = useState<Favorito[]>([
    // Exemplo fixo pra mostrar algo
    {
      id: 'carros-001-002-2019',
      tipo: 'carros',
      marca: 'Chevrolet',
      modelo: 'Onix',
      ano: '2019',
      preco: 'R$ 48.000,00',
    },
    {
      id: 'motos-003-005-2020',
      tipo: 'motos',
      marca: 'Honda',
      modelo: 'CB 500',
      ano: '2020',
      preco: 'R$ 25.000,00',
    },
  ]);

  // Estatísticas simples (contagem por tipo)
  const estatisticas = {
    carros: favoritos.filter(f => f.tipo === 'carros').length,
    motos: favoritos.filter(f => f.tipo === 'motos').length,
    caminhões: favoritos.filter(f => f.tipo === 'caminhoes').length,
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
      <h1 style={{ fontSize: '32px', marginBottom: '24px', color: '#e63946' }}>
        Bem-vindo ao GarageX
      </h1>

      {/* Resumo rápido */}
      <section
        style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '40px',
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: '#2a2a2a',
            padding: '24px',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(230, 57, 70, 0.4)',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>
            Total de Favoritos
          </h2>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#e63946' }}>
            {favoritos.length}
          </p>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: '#2a2a2a',
            padding: '24px',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(230, 57, 70, 0.4)',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>
            Carros por Tipo
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {Object.entries(estatisticas).map(([tipo, qtd]) => (
              <li
                key={tipo}
                style={{
                  marginBottom: '6px',
                  color: tipo === 'carros' ? '#e63946' : '#ccc',
                }}
              >
                {tipo.charAt(0).toUpperCase() + tipo.slice(1)}: {qtd}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Últimos Favoritos */}
      <section>
        <h2 style={{ marginBottom: '16px', fontSize: '24px' }}>
          Últimos Favoritos
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {favoritos.length === 0 && (
            <p style={{ color: '#999' }}>
              Você ainda não adicionou carros aos favoritos.
            </p>
          )}

          {favoritos.map(fav => (
            <div
              key={fav.id}
              style={{
                backgroundColor: '#2a2a2a',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 4px 12px rgba(230, 57, 70, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3
                  style={{
                    margin: '0 0 8px 0',
                    fontWeight: 'bold',
                    color: '#e63946',
                  }}
                >
                  {fav.marca} {fav.modelo}
                </h3>
                <p style={{ margin: '0 0 4px 0' }}>Ano: {fav.ano}</p>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{fav.preco}</p>
              </div>

              <button
                style={{
                  marginTop: '12px',
                  padding: '10px',
                  backgroundColor: '#e63946',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = '#a0272f')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = '#e63946')
                }
                onClick={() =>
                  alert(`Você clicou para ver detalhes do ${fav.marca} ${fav.modelo}`)
                }
              >
                Ver detalhes
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Ações rápidas */}
      <section
        style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <button
          style={{
            backgroundColor: '#e63946',
            color: '#fff',
            border: 'none',
            padding: '14px 24px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#a0272f')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#e63946')
          }
          onClick={() => alert('Ir para Lista de Compras (Favoritos)')}
        >
          Lista de Compras
        </button>

        <button
          style={{
            backgroundColor: '#444',
            color: '#eee',
            border: 'none',
            padding: '14px 24px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#666')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#444')
          }
          onClick={() => alert('Logout (simulação)')}
        >
          Logout
        </button>
      </section>
    </div>
  );
}
