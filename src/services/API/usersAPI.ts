const URLS = { LOGIN: "https://reqres.in/api/login" };

interface UserLogin {
  username: string;
  password: string;
}
interface LoginResult {
  token?: string;
  error?: string;
}

const usersAPI = {
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
