import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { api } from '@services/api';

import { Brand, CarSpecifications, Model, ModelYear } from '@dtos/index';

interface FipeProviderProps {
  children: ReactNode;
}

export interface FipeContextData {
  brands: Brand[];
  brandIsLoading: boolean;
  selectedBrand: Brand | null;
  setSelectedBrand(brand: Brand | null): void;

  carModels: Model[];
  modelIsLoading: boolean;
  selectedModel: Model | null;
  setSelectedModel(model: Model | null): void;

  modelsYear: ModelYear[];
  modelsYearIsLoading: boolean;
  selectedModelsYear: ModelYear | null;
  setSelectedModelsYear(modelYear: ModelYear | null): void;

  handleGetCarValue(): Promise<void>;
  selectedCarSpecifications: CarSpecifications | undefined;
  carValueLoading: boolean;
}

export const FipeContext = createContext<FipeContextData>(
  {} as FipeContextData,
);

export const FipeProvider = ({ children }: FipeProviderProps) => {
  const router = useRouter();

  const [brands, setBrands] = useState<Brand[]>([]);
  const [brandIsLoading, setBrandIsLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const [carModels, setCarModels] = useState<Model[]>([]);
  const [modelIsLoading, setModelIsLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const [modelsYear, setModelsYear] = useState<ModelYear[]>([]);
  const [modelsYearIsLoading, setModelsYearIsLoading] = useState(true);
  const [selectedModelsYear, setSelectedModelsYear] =
    useState<ModelYear | null>(null);

  const [selectedCarSpecifications, setSelectedCarSpecifications] =
    useState<CarSpecifications>();
  const [carValueLoading, setCarValueLoading] = useState(false);

  useEffect(() => {
    setSelectedModel(null);
    setSelectedModelsYear(null);

    const handleGetCarBrands = async () => {
      try {
        const { data } = await api.get<Brand[]>('/');

        // Need "label" for autocomplete
        const newArray = data.map(item => {
          return { ...item, label: item.nome };
        });

        setBrands(newArray);
      } catch (error) {
        toast.error('Não foi possível buscar as marcas.');
      } finally {
        setBrandIsLoading(false);
      }
    };

    handleGetCarBrands();
  }, [selectedBrand]);

  useEffect(() => {
    setSelectedModelsYear(null);

    if (selectedBrand?.codigo) {
      const handleGetCarModel = async () => {
        try {
          setModelsYear([]);

          const { data } = await api.get<{ modelos: Model[] }>(
            `${selectedBrand?.codigo}/modelos`,
          );

          const newArray = data.modelos.map(item => {
            return { ...item, label: item.nome };
          });

          setCarModels(newArray);
        } catch (error) {
          toast.error('Não foi possível buscar os modelos.');
        } finally {
          setModelIsLoading(false);
        }
      };

      handleGetCarModel();
    }
  }, [selectedBrand?.codigo, selectedModel]);

  useEffect(() => {
    if (selectedBrand?.codigo && selectedModel?.codigo) {
      const handleGetCarModel = async () => {
        try {
          const { data } = await api.get<ModelYear[]>(
            `${selectedBrand?.codigo}/modelos/${selectedModel?.codigo}/anos`,
          );

          const newArray = data.map(item => {
            return { ...item, label: item.nome };
          });

          setModelsYear(newArray);
        } catch (error: any) {
          // Ignoring fipe.org api error
          if (
            error.response.data.error ===
            'failed to locate the information on fipe.org'
          )
            return;

          toast.error('Não foi possível buscar o ano do modelo selecionado.');
        } finally {
          setModelsYearIsLoading(false);
        }
      };

      handleGetCarModel();
    }
  }, [selectedBrand?.codigo, selectedModel?.codigo]);

  const handleGetCarValue = useCallback(async () => {
    try {
      setCarValueLoading(true);

      if (
        !selectedBrand?.codigo ||
        !selectedModel?.codigo ||
        !selectedModelsYear?.codigo
      )
        throw new Error('Dados insuficiente.');

      const { data } = await api.get<CarSpecifications>(
        `${selectedBrand?.codigo}/modelos/${selectedModel?.codigo}/anos/${selectedModelsYear.codigo}`,
      );

      setSelectedCarSpecifications(data);

      router.push('/fipe-result');
    } catch (error) {
      toast.error('Dados insuficiente para realizar busca das informações.');
    } finally {
      setCarValueLoading(false);
    }
  }, [
    router,
    selectedBrand?.codigo,
    selectedModel?.codigo,
    selectedModelsYear?.codigo,
  ]);

  return (
    <FipeContext.Provider
      value={{
        brands,
        brandIsLoading,
        selectedBrand,
        setSelectedBrand,

        carModels,
        modelIsLoading,
        selectedModel,
        setSelectedModel,

        modelsYear,
        modelsYearIsLoading,
        selectedModelsYear,
        setSelectedModelsYear,

        handleGetCarValue,
        selectedCarSpecifications,
        carValueLoading,
      }}
    >
      {children}
    </FipeContext.Provider>
  );
};

export function useFipe(): FipeContextData {
  const context = useContext(FipeContext);

  if (!context) throw new Error('useFipe must be used within a FipeProvider');

  return context;
}
