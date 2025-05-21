import { useEffect, useState } from 'react';
import { MarcaResponse } from '../interfaces/fipe';
import { VehicleType, getMarcas } from '../services/fipe';

export function useBrands(vehicleType: VehicleType) {
  const [brands, setBrands] = useState<MarcaResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getMarcas(vehicleType)
      .then(setBrands)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [vehicleType]);

  return { brands, loading, error };
}
