'use client';
import { CSSProperties, useState } from 'react';
import styles from './styles';
import { VehicleType } from '../services/fipe';

type Favorito = {
  id: string;
  tipo: VehicleType;
  marca: string;
  modelo: string;
  ano: string;
  preco: string;
};

export const listaItemStyle = (isCarros: boolean): CSSProperties => ({
  marginBottom: '6px',
  color: isCarros ? '#e63946' : '#ccc',
});

export default function Dashboard() {
  const [favoritos, setFavoritos] = useState<Favorito[]>([
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

  const estatisticas = {
    carros: favoritos.filter(f => f.tipo === 'carros').length,
    motos: favoritos.filter(f => f.tipo === 'motos').length,
    caminhões: favoritos.filter(f => f.tipo === 'caminhoes').length,
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bem-vindo ao BYC</h1>
      <section style={styles.resumoSection}>
        <div style={styles.resumoBox}>
          <h2 style={styles.resumoTitle}>Total de Favoritos</h2>
          <p style={styles.resumoNumber}>{favoritos.length}</p>
        </div>

        <div style={styles.resumoBox}>
          <h2 style={styles.resumoTitle}>Carros por Tipo</h2>
          <ul style={styles.listaTipos}>
            {Object.entries(estatisticas).map(([tipo, qtd]) => (
              <li
                key={tipo}
                style={listaItemStyle(tipo === 'carros')}
              >
                {tipo.charAt(0).toUpperCase() + tipo.slice(1)}: {qtd}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2 style={styles.favoritosSectionTitle}>Últimos Favoritos</h2>

        <div style={styles.favoritosGrid}>
          {favoritos.length === 0 && (
            <p style={styles.noFavoritosText}>
              Você ainda não adicionou carros aos favoritos.
            </p>
          )}

          {favoritos.map(fav => (
            <div key={fav.id} style={styles.favoritoCard}>
              <div>
                <h3 style={styles.favoritoTitle}>
                  {fav.marca} {fav.modelo}
                </h3>
                <p style={styles.favoritoAno}>Ano: {fav.ano}</p>
                <p style={styles.favoritoPreco}>{fav.preco}</p>
              </div>

              <button
                style={styles.favoritoButton}
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

      <section style={styles.acoesSection}>
        <button
          style={styles.btnPrimary}
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
          style={styles.btnSecondary}
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