import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface CarState {
  cars: PrecoResponse[];
}

const initialState: CarState = {
  cars: [],
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state: CarState, action: PayloadAction<PrecoResponse>) => {
      state.cars.push(action.payload);
    },
    setCars: (state: CarState, action: PayloadAction<PrecoResponse[]>) => {
      state.cars = action.payload;
    },
    clearCars: (state: CarState) => {
      state.cars = [];
    },
    removeCar: (state: CarState, action: PayloadAction<string>) => {
      state.cars = state.cars.filter(car => car.CodigoFipe !== action.payload);
    },
  },
});

export const { addCar, setCars, clearCars, removeCar } = carSlice.actions;

export default carSlice.reducer;
