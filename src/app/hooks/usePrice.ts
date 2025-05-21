import { useEffect, useState } from 'react';
import { PrecoResponse } from '../interfaces/fipe';
import { VehicleType, getPreco } from '../services/fipe';

export function usePrice(
  vehicleType: VehicleType,
  brandCode: string,
  modelCode: string,
  yearCode: string
) {
  const [price, setPrice] = useState<PrecoResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!vehicleType || !brandCode || !modelCode || !yearCode) return;

    setLoading(true);
    getPreco(vehicleType, brandCode, modelCode, yearCode)
      .then(setPrice)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [vehicleType, brandCode, modelCode, yearCode]);

  return { price, loading, error };
}
