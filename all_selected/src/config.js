const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "https://flatlogic-node-backend.herokuapp.com";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = 'https://infominer.aifintech.in/api/'; //`${hostApi}${portApi ? `:${portApi}` : ``}`;

export default {
  // baseUrl: 'https://infominer.aifintech.in/api/',
  baseUrl: 'http://localhost:6400/api/',
  hostApi,
  portApi,
  baseURLApi,
  remote: "https://flatlogic-node-backend.herokuapp.com",
  isBackend: process.env.REACT_APP_BACKEND,
  auth: {
    email: 'admin@flatlogic.com',
    password: 'password'
  },
  app: {
    colors: {
      dark: "#323232",
      light: "#FFFFFF",
    },
    themeColors: {
      warning: '#FEBE69',
      danger: '#FF7769',
      success: '#81D4BB',
      info: '#4DC7DF'
    }
  }
};
