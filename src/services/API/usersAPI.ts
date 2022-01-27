const URLS = {
  LOGIN: "https://reqres.in/api/login",
  LIST_USERS: "https://reqres.in/api/users",
};

/**
 * Tipo de entrada de usuario en el login
 */
interface UserLogin {
  username: string;
  password: string;
}
/**
 * Resultado devuelto por la petición de login
 */
interface LoginResult {
  token?: string;
  error?: string;
}

/**
 * Resultado devuelto por getUsers
 */
interface GetUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: {
    url: string;
    text: string;
  };
  data: Array<UserItem>;
}
/**
 * Item del array data devuelto por getUsers
 */
interface UserItem {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

/**
 * Funciones de acceso a la API de usuarios
 */
const usersAPI = {
  /**
   * Función para hacer el login de usuario
   * @param user usuario que se loguea
   * @returns devuelve el token o el error
   */
  login: async (user: UserLogin): Promise<LoginResult> => {
    const response = await fetch(URLS.LOGIN, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data: LoginResult = await response.json();
    return data;
  },
  getUsers: async (page: number = 1): Promise<GetUsersResponse> => {
    const response = await fetch(URLS.LIST_USERS + `?page=${page}`);
    const data: GetUsersResponse = await response.json();
    return data;
  },
};

export type { UserLogin, LoginResult, GetUsersResponse, UserItem };
export { usersAPI, URLS };
