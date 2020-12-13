import axios from "axios";

const ax = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // 'http://localhost:5000',
  withCredentials: true,
});

export default {
  login(email, password) {
    return ax
      .post("/login", { username: email, password })
      .then((resp) => resp.data);
  },
  register(email, password) {
    return ax.post("/register", { email, password }).then((resp) => resp.data);
  },
  loggedIn() {
    return ax.post(`/logged-in`).then((resp) => resp.data);
  },
  logout() {
    return ax.post(`/logout`).then((resp) => resp.data);
  },
  requestResetPassword(email, language) {
    return ax
      .post(`/request-reset-password`, { email, language })
      .then((resp) => resp.data);
  },
  resetPassword(token, newPassword) {
    return ax
      .post("/reset-password", { token, newPassword })
      .then((resp) => resp.data);
  },
};
