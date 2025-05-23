import styles from './styles';

export default function TermsOfUse() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Termos de Uso</h1>

      <section style={styles.textSection}>
        <p>
          Bem-vindo ao nosso site. Ao acessar ou utilizar nossos serviços, você concorda
          em cumprir e estar legalmente vinculado aos seguintes termos e condições de uso.
        </p>

        <h2>1. Uso do Site</h2>
        <p>
          Você concorda em usar este site apenas para fins legais e de maneira que não
          infrinja os direitos de terceiros ou restrinja o uso e aproveitamento do site por
          outros usuários.
        </p>

        <h2>2. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo, incluindo textos, gráficos, logos e imagens, é protegido por
          direitos autorais e não pode ser reproduzido sem autorização expressa.
        </p>

        <h2>3. Limitação de Responsabilidade</h2>
        <p>
          Não nos responsabilizamos por quaisquer danos que possam resultar do uso ou da
          incapacidade de usar o site.
        </p>

        <h2>4. Alterações nos Termos</h2>
        <p>
          Reservamo-nos o direito de modificar estes termos a qualquer momento, sendo
          recomendada a revisão periódica.
        </p>

        <h2>5. Contato</h2>
        <p>
          Se tiver dúvidas sobre estes termos, entre em contato conosco.
        </p>
      </section>
    </div>
  );
}