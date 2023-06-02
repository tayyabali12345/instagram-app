import axios from "axios";

export const LoginApi = (setUser, loginData) => {
  axios
    .post("http://localhost:8080/login", loginData)
    .then((response) => {
      console.log(response);
      setUser(response.data);
    })
    .catch((error) => {
      setUser(null);
      console.log(error);
    });
};

export const SignUpApi = async (SignUpData) => {
  return await axios.post("http://localhost:8080/signup", SignUpData);
};

export const StoreImageApi = async (fileData) => {
  const formData = new FormData();
  formData.append("file", fileData.filelocation);
  formData.append("user", fileData.user);

  return await axios.post("http://localhost:8080/storeImage", formData);
  // return await axios.post("http://localhost:8080/storeImage", fileData);
};
