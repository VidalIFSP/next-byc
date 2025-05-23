import { useCallback, useState } from 'react';
import { ModeloResponse } from '../interfaces/fipe';
import { VehicleType, getModelos } from '../services/fipe';

export function useModels() {

  const fetchModels = useCallback(
    async (vehicleType: VehicleType, brandCode: string): Promise<ModeloResponse[]> => {
      if (!vehicleType || !brandCode) return [];

      try {
        const data = await getModelos(vehicleType, brandCode);
        return data.modelos;
      } catch (err) {
        return [];
      }
    },
    []
  );
  return { fetchModels };
}
