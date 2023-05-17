export const AuthHelper = {
  getToken: (key = "token") => {
    return localStorage.getItem(key);
  },
  setToken: (token: string, key = "token") => {
    localStorage.setItem(key, token);
  },
  clearSession: () => {
    localStorage.clear();
  },
};
