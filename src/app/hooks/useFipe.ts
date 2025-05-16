import { useState, useEffect } from 'react';
import { Ano, getAnos, getMarcas, getModelos, getPreco, Marca, Modelo, Preco, VehicleType } from '../services/fipe';

export const useFipe = (tipo: VehicleType) => {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [anos, setAnos] = useState<Ano[]>([]);
  const [preco, setPreco] = useState<Preco | null>(null);

  const [marcaSelecionada, setMarcaSelecionada] = useState<string | null>(null);
  const [modeloSelecionado, setModeloSelecionado] = useState<string | null>(null);
  const [anoSelecionado, setAnoSelecionado] = useState<string | null>(null);

  useEffect(() => {
    getMarcas(tipo).then(setMarcas);
  }, [tipo]);

  useEffect(() => {
    if (marcaSelecionada) {
      getModelos(tipo, marcaSelecionada).then((data) => setModelos(data.modelos));
      setModeloSelecionado(null);
      setAnos([]);
      setAnoSelecionado(null);
      setPreco(null);
    }
  }, [marcaSelecionada]);

  useEffect(() => {
    if (marcaSelecionada && modeloSelecionado) {
      getAnos(tipo, marcaSelecionada, modeloSelecionado).then(setAnos);
      setAnoSelecionado(null);
      setPreco(null);
    }
  }, [modeloSelecionado]);

  useEffect(() => {
    if (marcaSelecionada && modeloSelecionado && anoSelecionado) {
      getPreco(tipo, marcaSelecionada, modeloSelecionado, anoSelecionado).then(setPreco);
    }
  }, [anoSelecionado]);

  return {
    marcas,
    modelos,
    anos,
    preco,
    setMarcaSelecionada,
    setModeloSelecionado,
    setAnoSelecionado,
    marcaSelecionada,
    modeloSelecionado,
    anoSelecionado,
  };
};
