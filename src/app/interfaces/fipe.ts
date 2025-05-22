export interface MarcaResponse {
    nome: string;
    codigo: string;
  }
  
  export interface ModeloResponse {
    nome: string;
    codigo: string;
  }
  
  export interface AnoResponse {
    nome: string;
    codigo: string;
  }
  
  export interface PrecoResponse {
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
  