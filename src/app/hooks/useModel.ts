import { useEffect, useState } from 'react';
import { ModeloResponse } from '../interfaces/fipe';
import { VehicleType, getModelos } from '../services/fipe';

export function useModels(vehicleType: VehicleType, brandCode: string) {
  const [models, setModels] = useState<ModeloResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!vehicleType || !brandCode) return;

    setLoading(true);
    getModelos(vehicleType, brandCode)
      .then(data => setModels(data.modelos))
      .catch(setError)
      .finally(() => setLoading(false));
  }, [vehicleType, brandCode]);

  return { models, loading, error };
}
