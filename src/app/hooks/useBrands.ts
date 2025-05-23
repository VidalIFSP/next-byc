import { useCallback, useEffect, useState } from 'react';
import { MarcaResponse } from '../interfaces/fipe';
import { VehicleType, getMarcas } from '../services/fipe';

export function useBrands() {

  const fetchBrands = useCallback(
    async (vehicleType: VehicleType): Promise<MarcaResponse[]> => {
      if (!vehicleType) return [];
      try {
        const data = await getMarcas(vehicleType);
        return data;
      } catch (err) {
        return [];
      }
    },
    []
  );

  return { fetchBrands };
}
