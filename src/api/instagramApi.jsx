import axios from "axios";

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
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, formData);
};

export const SignUpApi = async (SignUpData) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}/signup`,
    SignUpData
  );
};

export const DeleteImageApi = async (postId) => {
  return await axios.delete(
    `${process.env.REACT_APP_BASE_URL}/post/${postId}/delete`
  );
};

export const EditImageApi = async (postId, editedContent) => {
  return await axios.put(`http://localhost:8080/post/${postId}/edit`, {
    content: editedContent,
  });
};

export const AllPostsApi = async (setPosts) => {
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/allPosts`)
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
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}/storeImage`,
    formData
  );
};
