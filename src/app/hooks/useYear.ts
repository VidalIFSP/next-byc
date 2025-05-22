import { useEffect, useState } from 'react';
import { AnoResponse } from '../interfaces/fipe';
import { VehicleType, getAnos } from '../services/fipe';

export function useYears(vehicleType: VehicleType, brandCode: string, modelCode: string) {
  const [years, setYears] = useState<AnoResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!vehicleType || !brandCode || !modelCode) return;

    setLoading(true);
    getAnos(vehicleType, brandCode, modelCode)
      .then(setYears)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [vehicleType, brandCode, modelCode]);

  return { years, loading, error };
}
