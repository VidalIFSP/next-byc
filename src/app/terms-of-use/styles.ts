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
    } as CSSProperties,
  
    heading: {
      fontSize: '32px',
      marginBottom: '24px',
      fontWeight: '700',
      color: '#e63946',
    },
  
    emptyMessage: {
      fontSize: '1.2rem',
      color: '#999',
      fontStyle: 'italic',
    },
  
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      width: '100%',
    },
  
    card: {
      backgroundColor: '#2a2a2a',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(230, 57, 70, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.2s ease',
      cursor: 'default',
    },
  
    title: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#e63946',
      marginBottom: '10px',
    },
  
    info: {
      margin: '4px 0',
      color: '#ccc',
    },
  
    code: {
      marginTop: '10px',
      fontSize: '0.85rem',
      color: '#888',
      fontStyle: 'italic',
    },
  
    button: {
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
    } as CSSProperties,
  };
  
  export default styles;
  