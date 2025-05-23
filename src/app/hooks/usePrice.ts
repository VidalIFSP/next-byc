import { useEffect, useState, useCallback } from 'react';
import { PrecoResponse } from '../interfaces/fipe';
import { VehicleType, getPreco } from '../services/fipe';

export function usePrice(
  vehicleType: VehicleType,
  brandCode: string,
  modelCode: string,
  yearCode: string
) {

  const fetchPrice = useCallback(async (): Promise<PrecoResponse | undefined> => {
    if (!vehicleType || !brandCode || !modelCode || !yearCode) return undefined;

    try {
      const data = await getPreco(vehicleType, brandCode, modelCode, yearCode);
      return data
    } catch (err) {
      console.warn(err);
    }
  }, [vehicleType, brandCode, modelCode, yearCode]);

  return { fetchPrice };
}
