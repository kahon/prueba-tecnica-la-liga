import { RootStateOrAny, useSelector } from "react-redux";

const useLoading = () => {
  const isLoading = useSelector(
    (state: RootStateOrAny) => state.apiReducer.loading
  );
  return { isLoading };
};
export default useLoading;
