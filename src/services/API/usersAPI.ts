const URLS = { LOGIN: "https://reqres.in/api/login" };

interface UserLogin {
  username: string;
  password: string;
}

const usersAPI = {
  login: async (user: UserLogin) => {
    const response = await fetch(URLS.LOGIN, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    return data;
  },
};

export type { UserLogin };
export { usersAPI, URLS };
