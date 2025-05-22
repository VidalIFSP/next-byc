import { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: '89.6vh',
    backgroundColor: '#1a1a1a',
    padding: '40px',
    fontFamily: "'Orbitron', sans-serif",
    color: '#eee',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    margin: '0 auto',
  },
  title: {
    fontSize: '32px',
    marginBottom: '24px',
    color: '#e63946',
  },
  resumoSection: {
    display: 'flex',
    gap: '24px',
    marginBottom: '40px',
  },
  resumoBox: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    padding: '24px',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(230, 57, 70, 0.4)',
    textAlign: 'center',
  },
  resumoTitle: {
    fontSize: '20px',
    marginBottom: '8px',
  },
  resumoNumber: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#e63946',
  },
  listaTipos: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  favoritosSectionTitle: {
    marginBottom: '16px',
    fontSize: '24px',
  },
  favoritosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
  },
  noFavoritosText: {
    color: '#999',
  },
  favoritoCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 4px 12px rgba(230, 57, 70, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  favoritoTitle: {
    margin: '0 0 8px 0',
    fontWeight: 'bold',
    color: '#e63946',
  },
  favoritoAno: {
    margin: '0 0 4px 0',
  },
  favoritoPreco: {
    margin: 0,
    fontWeight: 'bold',
  },
  favoritoButton: {
    marginTop: '12px',
    padding: '10px',
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  acoesSection: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  btnPrimary: {
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    padding: '14px 24px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  btnSecondary: {
    backgroundColor: '#444',
    color: '#eee',
    border: 'none',
    padding: '14px 24px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default styles;