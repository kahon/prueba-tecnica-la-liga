import { RootStateOrAny, useSelector } from "react-redux";

/**
 * Maneja el estado de error del store de forma reactiva.
 * @returns
 */
const useError = () => {
  const error: string = useSelector(
    (state: RootStateOrAny) => state.apiReducer.error
  );
  return { error };
};
export default useError;
