'use client';

import { useEffect, useState } from 'react';
import { useModels } from '@/app/hooks/useModel';
import { useYears } from '@/app/hooks/useYear';
import { useBrands } from '@/app/hooks/useBrands';
import { usePrice } from '@/app/hooks/usePrice';
import { VehicleType } from '@/app/services/fipe';


export default function FipeTest() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('carros');
  const [brandCode, setBrandCode] = useState('');
  const [modelCode, setModelCode] = useState('');
  const [yearCode, setYearCode] = useState('');

  const { brands, loading: loadingBrands } = useBrands(vehicleType);
  const { models, loading: loadingModels } = useModels(vehicleType, brandCode);
  const { years, loading: loadingYears } = useYears(vehicleType, brandCode, modelCode);
  const { price, loading: loadingPrice } = usePrice(vehicleType, brandCode, modelCode, yearCode);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Teste dos Hooks da Tabela FIPE</h2>

      <div>
        <label>Tipo de veículo:</label>
        <select
          value={vehicleType}
          onChange={(e) => {
            setVehicleType(e.target.value as VehicleType);
            setBrandCode('');
            setModelCode('');
            setYearCode('');
          }}
        >
          <option value="carros">Carros</option>
          <option value="motos">Motos</option>
          <option value="caminhoes">Caminhões</option>
        </select>
      </div>

      <br />

      <div>
        <label>Marca:</label>
        <select
          value={brandCode}
          onChange={(e) => {
            setBrandCode(e.target.value);
            setModelCode('');
            setYearCode('');
          }}
        >
          <option value="">Selecione</option>
          {loadingBrands ? (
            <option>Carregando...</option>
          ) : (
            brands.map((marca) => (
              <option key={marca.codigo} value={marca.codigo}>
                {marca.nome}
              </option>
            ))
          )}
        </select>
      </div>

      <br />

      {brandCode && (
        <div>
          <label>Modelo:</label>
          <select
            value={modelCode}
            onChange={(e) => {
              setModelCode(e.target.value);
              setYearCode('');
            }}
          >
            <option value="">Selecione</option>
            {loadingModels ? (
              <option>Carregando...</option>
            ) : (
              models.map((modelo) => (
                <option key={modelo.codigo} value={modelo.codigo}>
                  {modelo.nome}
                </option>
              ))
            )}
          </select>
        </div>
      )}

      <br />

      {modelCode && (
        <div>
          <label>Ano:</label>
          <select value={yearCode} onChange={(e) => setYearCode(e.target.value)}>
            <option value="">Selecione</option>
            {loadingYears ? (
              <option>Carregando...</option>
            ) : (
              years.map((ano) => (
                <option key={ano.codigo} value={ano.codigo}>
                  {ano.nome}
                </option>
              ))
            )}
          </select>
        </div>
      )}

      <br />

      {yearCode && (
        <div>
          <h3>Preço:</h3>
          {loadingPrice ? (
            <p>Carregando preço...</p>
          ) : price ? (
            <pre>{JSON.stringify(price, null, 2)}</pre>
          ) : (
            <p>Erro ao carregar preço.</p>
          )}
        </div>
      )}
    </div>
  );
}