import { CSSProperties } from "react";

const styles: Record<string, CSSProperties> =  {
  wrapper: {
    minHeight: '93.9vh',
    backgroundColor: '#121212',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Roboto', sans-serif",
    padding: '20px',
  },
  box: {
    width: '380px',
    backgroundColor: '#1e1e1e',
    padding: '32px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.8)',
    border: '1px solid #333',
    color: '#eee',
  },
  title: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '30px',
    color: '#d32f2f',
    textAlign: 'center',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '92%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid #555',
    backgroundColor: '#2c2c2c',
    color: '#eee',
    fontSize: '16px',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  },
  inputError: {
    borderColor: '#ff6b6b',
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: '12px',
    marginTop: '6px',
  },
  formExtras: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    color: '#ccc',
  },
  link: {
    color: '#d32f2f',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#d32f2f',
    color: 'white',
    padding: '14px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '16px',
    textTransform: 'uppercase',
    boxShadow: '0 4px 12px rgba(211, 47, 47, 0.6)',
    transition: 'background-color 0.3s ease',
  },
  registerText: {
    marginTop: '24px',
    fontSize: '14px',
    textAlign: 'center',
    color: '#bbb',
  },
};

export default styles;