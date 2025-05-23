import { PrecoResponse } from "@/app/interfaces/fipe";
import styles from "./styles";

type CarCardProps = {
  fav: PrecoResponse;
};

const CarCard = ({ fav }: CarCardProps) => {
  return (
    <div key={fav.CodigoFipe} style={styles.favoritoCard}>
      <div>
        <h3 style={styles.favoritoTitle}>
          {fav.Marca} {fav.Modelo}
        </h3>
        <p style={styles.favoritoAno}>Ano: {fav.AnoModelo}</p>
        <p style={styles.favoritoPreco}>{fav.Valor}</p>
      </div>

      <button
        style={styles.favoritoButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#a0272f')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e63946')}
        onClick={() => alert(`Você clicou para ver detalhes do ${fav.Marca} ${fav.Modelo}`)}
      >
        Ver detalhes
      </button>
    </div>
  );
};

export default CarCard;
