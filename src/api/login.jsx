import axios from "axios";

export const LoginApi = async (loginData) => {
  const formData = new FormData();
  formData.append("username", loginData.username);
  formData.append("password", loginData.password);
  return await axios.post("http://localhost:8080/login", formData);
};

export const SignUpApi = async (SignUpData) => {
  return await axios.post("http://localhost:8080/signup", SignUpData);
};

export const DeleteImageApi = async (postId) => {
  return await axios.delete(`http://localhost:8080/post/${postId}/delete`);
};

export const EditImageApi = async (postId, editedContent) => {
  return await axios.put(`http://localhost:8080/post/${postId}/edit`, {
    content: editedContent,
  });
};

export const AllPostsApi = async (setPosts) => {
  axios
    .get("http://localhost:8080/allPosts")
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
  const formData = new FormData();
  formData.append("file", fileData.filelocation);
  formData.append("user", fileData.user);

  return await axios.post("http://localhost:8080/storeImage", formData);
};
