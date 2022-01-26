const URLS = { LOGIN: "https://reqres.in/api/login" };

/**
 * Tipo de entrada de usuario en el login
 */
interface UserLogin {
  username: string;
  password: string;
}
/**
 * Tipo de resultado devuelto por la petición de login
 */
interface LoginResult {
  token?: string;
  error?: string;
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
};

export type { UserLogin, LoginResult };
export { usersAPI, URLS };
