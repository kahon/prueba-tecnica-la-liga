import { useState } from "react";
import { useStore } from "react-redux";
import { Store } from "redux";

export default function useAuth() {
  const store = useStore();
  const [token, setToken] = useState(selectToken(store));

  function selectToken(store: Store): string {
    return store.getState()["apiReducer"]["token"];
  }
  const isAuth = (): Boolean => {
    return Boolean(token);
  };

  store.subscribe(() => {
    setToken(selectToken(store));
  });

  return { isAuth, token };
}
