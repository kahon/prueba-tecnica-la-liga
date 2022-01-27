import { RootStateOrAny, useSelector } from "react-redux";

const useLoading = () => {
  const loading = useSelector(
    (state: RootStateOrAny) => state.apiReducer.loading
  );
  return { loading };
};
export default useLoading;
