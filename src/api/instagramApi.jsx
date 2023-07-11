import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

const createLoginForm = (loginData) => {
  const formData = new FormData();
  formData.append("username", loginData.username);
  formData.append("password", loginData.password);
  return formData;
};

const createImageForm = (fileData) => {
  const formData = new FormData();
  formData.append("file", fileData.filelocation);
  formData.append("user", fileData.user);
  return formData;
};

export const LoginApi = async (loginData) => {
  const formData = createLoginForm(loginData);
  return await axiosInstance.post(`/login`, formData);
};

export const SignUpApi = async (SignUpData) => {
  return await axiosInstance.post(`/signup`, SignUpData);
};

export const DeleteImageApi = async (postId) => {
  return await axiosInstance.delete(`/post/${postId}/delete`);
};

export const EditImageApi = async (postId, editedContent) => {
  return await axiosInstance.put(`/post/${postId}/edit`, {
    content: editedContent,
  });
};

export const AllPostsApi = async (setPosts) => {
  axiosInstance
    .get(`/allPosts`)
    .then((response) => {
      setPosts(response.data);
    })
    .catch((error) => {
      setPosts([]);
      debugger;
      console.log(error);
    });
};

export const StoreImageApi = async (fileData) => {
  const formData = createImageForm(fileData);
  return await axiosInstance.post(`/storeImage`, createImageForm(fileData));
};
