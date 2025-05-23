import { useCallback } from 'react';
import { AnoResponse } from '../interfaces/fipe';
import { VehicleType, getAnos } from '../services/fipe';

export function useYears() {

  const fetchYears = useCallback(
    async (
      vehicleType: VehicleType,
      brandCode: string,
      modelCode: string
    ): Promise<AnoResponse[]> => {
      if (!vehicleType || !brandCode || !modelCode) return [];
      try {
        const data = await getAnos(vehicleType, brandCode, modelCode);
        return data;
      } catch (err) {
        return [];
      }
    },
    []
  );

  return { fetchYears };
}
