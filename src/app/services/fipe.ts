const BASE_URL = 'https://parallelum.com.br/fipe/api/v1';

export type VehicleType = 'carros' | 'motos' | 'caminhoes';

export interface Marca {
  nome: string;
  codigo: string;
}

export interface Modelo {
  nome: string;
  codigo: string;
}

export interface Ano {
  nome: string;
  codigo: string;
}

export interface Preco {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}

export const getMarcas = async (tipo: VehicleType): Promise<Marca[]> => {
  const res = await fetch(`${BASE_URL}/${tipo}/marcas`);
  return res.json();
};

export const getModelos = async (tipo: VehicleType, marcaCodigo: string): Promise<{ modelos: Modelo[] }> => {
  const res = await fetch(`${BASE_URL}/${tipo}/marcas/${marcaCodigo}/modelos`);
  return res.json();
};

export const getAnos = async (tipo: VehicleType, marcaCodigo: string, modeloCodigo: string): Promise<Ano[]> => {
  const res = await fetch(`${BASE_URL}/${tipo}/marcas/${marcaCodigo}/modelos/${modeloCodigo}/anos`);
  return res.json();
};

export const getPreco = async (
  tipo: VehicleType,
  marcaCodigo: string,
  modeloCodigo: string,
  anoCodigo: string
): Promise<Preco> => {
  const res = await fetch(
    `${BASE_URL}/${tipo}/marcas/${marcaCodigo}/modelos/${modeloCodigo}/anos/${anoCodigo}`
  );
  return res.json();
};
