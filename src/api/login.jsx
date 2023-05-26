import axios from "axios";

export const LoginApi = (setUser, setReload, loginData) => {
  axios
    .post("http://localhost:8080/home", loginData)
    .then((response) => {
      setReload(false);
      console.log(response);
      setUser(response.data);
    })
    .catch((error) => {
      setUser(null);
      console.log(error);
    });
};

