import { MarcaResponse, ModeloResponse, AnoResponse, PrecoResponse } from "../interfaces/fipe";

const BASE_URL = 'https://parallelum.com.br/fipe/api/v1';

export type VehicleType = 'carros' | 'motos' | 'caminhoes';



export const getMarcas = async (tipo: VehicleType): Promise<MarcaResponse[]> => {
  const res = await fetch(`${BASE_URL}/${tipo}/marcas`);
  return res.json();
};

export const getModelos = async (tipo: VehicleType, marcaCodigo: string): Promise<{ modelos: ModeloResponse[] }> => {
  const res = await fetch(`${BASE_URL}/${tipo}/marcas/${marcaCodigo}/modelos`);
  return res.json();
};

export const getAnos = async (tipo: VehicleType, marcaCodigo: string, modeloCodigo: string): Promise<AnoResponse[]> => {
  const res = await fetch(`${BASE_URL}/${tipo}/marcas/${marcaCodigo}/modelos/${modeloCodigo}/anos`);
  return res.json();
};

export const getPreco = async (
  tipo: VehicleType,
  marcaCodigo: string,
  modeloCodigo: string,
  anoCodigo: string
): Promise<PrecoResponse> => {
  const res = await fetch(
    `${BASE_URL}/${tipo}/marcas/${marcaCodigo}/modelos/${modeloCodigo}/anos/${anoCodigo}`
  );
  return res.json();
};

