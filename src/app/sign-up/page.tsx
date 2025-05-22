'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import styles from './styles';

interface RegisterFormInputs {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    mode: 'onTouched',
  });

  const password = watch('password', '');

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    if (!data.acceptTerms) {
      alert('Você deve aceitar os termos e condições.');
      return;
    }

    // Here you would proceed with your registration logic
    alert('Registrado com sucesso! (Aqui você colocaria a lógica real.)');
    // e.g., router.push('/somewhere');
  };

  return (
    <div style={styles.container}>
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
          .error-message {
            color: #ff6b6b;
            font-size: 12px;
            margin-top: 4px;
          }
        `}
      </style>

      <div className="register-box" style={styles.registerBox}>
        <h1 className="register-title" style={styles.registerTitle}>
          Criar Conta
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div style={styles.formGroup}>
            <label htmlFor="fullName" style={styles.label}>
              Nome Completo
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Seu nome completo"
              style={styles.input}
              {...register('fullName', { required: 'Nome completo é obrigatório' })}
            />
            {errors.fullName && (
              <p className="error-message">{errors.fullName.message}</p>
            )}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              style={styles.input}
              {...register('email', {
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email inválido',
                },
              })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              style={styles.input}
              {...register('password', {
                required: 'Senha é obrigatória',
                minLength: { value: 6, message: 'Senha deve ter ao menos 6 caracteres' },
              })}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>
              Confirmar Senha
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              style={styles.input}
              {...register('confirmPassword', {
                required: 'Confirmação de senha é obrigatória',
                validate: (value) =>
                  value === password || 'As senhas não coincidem',
              })}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div style={styles.checkboxContainer}>
            <input
              id="acceptTerms"
              type="checkbox"
              style={styles.checkbox}
              {...register('acceptTerms', {
                required: 'Você deve aceitar os termos e condições',
              })}
            />
            <label htmlFor="acceptTerms" style={styles.checkboxLabel}>
              Aceito os{' '}
              <a href="#" onClick={(e) => e.preventDefault()} style={styles.link}>
                termos e condições
              </a>
            </label>
          </div>
          {errors.acceptTerms && (
            <p className="error-message">{errors.acceptTerms.message}</p>
          )}

          <button type="submit" style={styles.button}>
            Cadastrar
          </button>
        </form>

        <p style={styles.paragraph}>
          Já tem uma conta?{' '}
          <a href="#" onClick={() => router.push('/')} style={styles.link}>
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
