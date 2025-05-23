'use client';
import { CSSProperties, useEffect, useState } from 'react';
import styles from './styles';
import router from 'next/router';
import { useBrands } from '../hooks/useBrands';
import { useModels } from '../hooks/useModel';
import { useYears } from '../hooks/useYear';
import { AnoResponse, PrecoResponse } from '../interfaces/fipe';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import CarCard from '../components/car-card/car-card';
import { addCar } from '@/store/carSlice';
import { usePrice } from '../hooks/usePrice';

const listaItemStyle = (isCarros: boolean): CSSProperties => ({
  marginBottom: '6px',
  color: isCarros ? '#e63946' : '#ccc',
});

export default function Dashboard() {
  const { fetchBrands } = useBrands();
  const { fetchModels } = useModels();
  const { fetchYears } = useYears();
  const { fetchPrice } = usePrice();

  const [brands, setBrands] = useState<{ codigo: string; nome: string }[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<{ codigo: string; nome: string } | null>(null);
  const [selectedModelo, setSelectedModelo] = useState<{ codigo: string; nome: string } | null>(null);
  const [selectedAno, setSelectedAno] = useState<{ codigo: string; nome: string } | null>(null);

  const [models, setModels] = useState<{ codigo: string; nome: string }[]>([]);
  const [years, setYears] = useState<AnoResponse[]>([]);
  const [isLoadingBrands, setIsLoadingBrands] = useState(true);
  const [isErrorBrands, setIsErrorBrands] = useState(false);
  const cars = useSelector((state: RootState) => state.car.cars);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoadingBrands(true);
        const fetchedBrands = await fetchBrands('carros');
        setBrands(fetchedBrands);
        setSelectedBrand(fetchedBrands[0] || null);
        setIsErrorBrands(false);
      } catch (err) {
        setBrands([]);
        setSelectedBrand(null);
        setIsErrorBrands(true);
      } finally {
        setIsLoadingBrands(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!selectedBrand) {
      setModels([]);
      setSelectedModelo(null);
      setYears([]);
      setSelectedAno(null);
      return;
    }

    (async () => {
      try {
        const fetchedModels = await fetchModels('carros', selectedBrand.codigo);
        setModels(fetchedModels);
        setSelectedModelo(null);
        setYears([]);
        setSelectedAno(null);
      } catch (error) {
        setModels([]);
        setSelectedModelo(null);
        setYears([]);
        setSelectedAno(null);
      }
    })();
  }, [selectedBrand, fetchModels]);


  useEffect(() => {
    if (!selectedBrand || !selectedModelo) {
      setYears([]);
      setSelectedAno(null);
      return;
    }

    (async () => {
      try {
        const fetchedYears = await fetchYears('carros', selectedBrand.codigo, selectedModelo.codigo);
        setYears(fetchedYears);
        setSelectedAno(null);
      } catch (error) {
        setYears([]);
        setSelectedAno(null);
      }
    })();
  }, [selectedBrand, selectedModelo, fetchYears]);

  const handleBrandChange = (codigo: string) => {
    const brand = brands.find(b => b.codigo === codigo) || null;
    setSelectedBrand(brand);
  };

  const handleModelChange = (codigo: string) => {
    const model = models.find(m => String(m.codigo) === codigo) || null;
    setSelectedModelo(model);
  };

  const handleYearChange = (codigo: string) => {
    const year = years.find(y => String(y.codigo) === codigo) || null;
    setSelectedAno(year);
  };

  const handleAddCar = async () => {
    if (selectedBrand && selectedModelo && selectedAno) {
      const newCar = await fetchPrice('carros', selectedBrand.codigo, selectedModelo.codigo, selectedAno.codigo)
      if (newCar)
        dispatch(addCar(newCar));
    } else {
      return;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bem-vindo ao BYC</h1>
      <section style={styles.resumoSection}>
        <div style={styles.resumoBox}>
          <h2 style={styles.resumoTitle}>Total de Carros</h2>
          <p style={styles.resumoNumber}>{cars.length}</p>
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={styles.resumoTitle}>Últimos carros adicionados</h2>
        {cars.length === 0 && <p>Nenhum carro adicionado ainda.</p>}
        {cars.length > 0 && (
          <div>
            {cars
              .slice(-2)
              .reverse()
              .map((car) => (
                <CarCard key={car.CodigoFipe} fav={car} />
              ))}
          </div>
        )}
      </section>

      <section style={styles.dropdownContainerStyle}>
        <select
          style={styles.dropdownStyle}
          value={selectedBrand?.codigo || ''}
          onChange={(e) => handleBrandChange(e.target.value)}
          disabled={isLoadingBrands || !!isErrorBrands}
        >
          {!selectedBrand && <option value="" disabled>Selecione uma marca</option>}
          {isLoadingBrands && <option>Carregando marcas...</option>}
          {isErrorBrands && <option>Erro ao carregar marcas</option>}
          {!isLoadingBrands &&
            !isErrorBrands &&
            brands.map((brand) => (
              <option key={brand.codigo} value={brand.codigo}>
                {brand.nome}
              </option>
            ))}
        </select>

        <select
          style={styles.dropdownStyle}
          value={selectedModelo?.codigo || ''}
          onChange={(e) => handleModelChange(e.target.value)}
          disabled={models.length === 0}
        >
          {!selectedModelo && <option value="" disabled>Selecione um modelo</option>}
          {models.map((model) => (
            <option key={model.codigo} value={model.codigo}>
              {model.nome}
            </option>
          ))}
        </select>

        <select
          style={styles.dropdownStyle}
          value={selectedAno?.codigo || ''}
          onChange={(e) => handleYearChange(e.target.value)}
          disabled={years.length === 0}
        >
          {!selectedAno && <option value="" disabled>Selecione um ano</option>}
          {years.map((year) => (
            <option key={year.codigo} value={year.codigo}>
              {year.nome}
            </option>
          ))}
        </select>
      </section>

      <section style={styles.acoesSection}>
        <button
          style={styles.btnPrimary}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#a0272f')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e63946')}
          onClick={handleAddCar}
          disabled={!selectedBrand || !selectedModelo || !selectedAno}
        >
          Comprar
        </button>

        <Link
          style={styles.btnPrimary}
          href='/terms-of-use'
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#a0272f')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e63946')}
        >
          Termos de Uso
        </Link>

        <button
          style={styles.btnSecondary}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#666')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#444')}
          onClick={() => router.push('/')}
        >
          Logout
        </button>
      </section>
    </div>
  );
}
