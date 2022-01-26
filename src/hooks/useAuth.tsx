import { useStore } from "react-redux";

export default function useAuth() {
  const store = useStore();

  const isAuth = (): Boolean => {
    return Boolean(store.getState()["apiReducer"]["token"]);
  };

  return { isAuth };
}
