import { RootStateOrAny, useSelector } from "react-redux";

/**
 * Maneja el estado de loading del store de forma reactiva.
 * @returns { isLoading: Boolean: indica si el estado de la aplicación está cargando. }
 */
const useLoading = () => {
  const isLoading: Boolean = useSelector(
    (state: RootStateOrAny) => state.apiReducer.loading
  );
  return { isLoading };
};
export default useLoading;
