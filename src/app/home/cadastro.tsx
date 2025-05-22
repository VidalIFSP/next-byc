'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
   
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Roboto', sans-serif",
        padding: '20px',
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
          @media (max-width: 480px) {
            .register-box {
              width: 100% !important;
              padding: 24px !important;
              border-radius: 8px !important;
            }
            .register-title {
              font-size: 24px !important;
            }
            input, button {
              font-size: 14px !important;
            }
          }
          input:focus {
            border-color: #d32f2f !important;
            box-shadow: 0 0 8px rgba(211, 47, 47, 0.6);
            outline: none;
          }
          button:hover {
            background-color: #b71c1c !important;
          }
          a {
            color: #d32f2f;
            text-decoration: none;
            cursor: pointer;
          }
          a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div
        className="register-box"
        style={{
          width: '400px',
          backgroundColor: '#1e1e1e',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
          border: '1px solid #333',
          color: '#eee',
        }}
      >
        <h1
          className="register-title"
          style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '30px',
            color: '#d32f2f',
            textAlign: 'center',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
          }}
        >
          Criar Conta
        </h1>

        <form onSubmit={handleRegister} noValidate>
          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="fullName"
              style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
            >
              Nome Completo
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Seu nome completo"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #555',
                backgroundColor: '#2c2c2c',
                color: '#eee',
                fontSize: '16px',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="email"
              style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seuemail@exemplo.com"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #555',
                backgroundColor: '#2c2c2c',
                color: '#eee',
                fontSize: '16px',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="password"
              style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Digite sua senha"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #555',
                backgroundColor: '#2c2c2c',
                color: '#eee',
                fontSize: '16px',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="confirmPassword"
              style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}
            >
              Confirmar Senha
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirme sua senha"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #555',
                backgroundColor: '#2c2c2c',
                color: '#eee',
                fontSize: '16px',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            />
          </div>

          <div
            style={{
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              color: '#ccc',
            }}
          >
            <input
              id="acceptTerms"
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              style={{ marginRight: '8px' }}
            />
            <label htmlFor="acceptTerms" style={{ cursor: 'pointer' }}>
              Aceito os{' '}
              <a href="#" onClick={(e) => e.preventDefault()}>
                termos e condições
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={!acceptTerms}
            style={{
              width: '100%',
              backgroundColor: acceptTerms ? '#d32f2f' : '#7a2929',
              color: 'white',
              padding: '14px',
              borderRadius: '10px',
              border: 'none',
              cursor: acceptTerms ? 'pointer' : 'not-allowed',
              fontWeight: '700',
              fontSize: '16px',
              textTransform: 'uppercase',
              boxShadow: acceptTerms
                ? '0 4px 12px rgba(211, 47, 47, 0.6)'
                : 'none',
              transition: 'background-color 0.3s ease',
            }}
          >
            Cadastrar
          </button>
        </form>

        <p
          style={{
            marginTop: '24px',
            fontSize: '14px',
            textAlign: 'center',
            color: '#bbb',
          }}
        >
          Já tem uma conta?{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
