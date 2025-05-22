'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import styles from './styles';

type LoginFormInputs = {
  email: string;
  password: string;
  remember: boolean;
};

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    router.push('/dashboard');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <h1 style={styles.title}>BYC - Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div style={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              {...register('email', { required: 'Email é obrigatório' })}
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {}),
              }}
            />
            {errors.email && <p style={styles.errorText}>{errors.email.message}</p>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register('password', { required: 'Senha é obrigatória' })}
              style={{
                ...styles.input,
                ...(errors.password ? styles.inputError : {}),
              }}
            />
            {errors.password && <p style={styles.errorText}>{errors.password.message}</p>}
          </div>

          <div style={styles.formExtras}>
            <label>
              <input type="checkbox" {...register('remember')} />
              Lembrar senha
            </label>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={styles.link}
            >
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" style={styles.submitButton}>
            Entrar
          </button>
        </form>

        <p style={styles.registerText}>
          Ainda não tem uma conta?{' '}
          <a
            href="#"
            onClick={() => router.push('/sign-up')}
            style={styles.link}
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}