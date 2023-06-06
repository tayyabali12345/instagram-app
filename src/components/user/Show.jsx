import { useNavigate } from "react-router-dom";
import { DeleteImageApi, EditImageApi } from "../../api/login.jsx";
import { useState, useEffect } from "react";

export function Show(props) {
  const { posts, setPosts } = props;
  const [reload, setReload] = useState(false);
  const [signedUser, setSignedUser] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  const handleInputChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleEditPost = (postId) => {
    handleEdit(postId, editedContent);
    setEditedContent("");
  };

  const handleEdit = async (postId, editedContent) => {
    await EditImageApi(postId, editedContent).then((res) => {
      if (res.data === true) {
        console.log(res.data);
        setPosts((prevPosts) =>
          prevPosts.map((post) => {
            if (post.id === postId) {
              return {
                ...post,
                content: editedContent,
              };
            }
            return post;
          })
        );

        navigate("/home", {
          state: { signedUser: null, functionality: null },
        });
      } else {
        console.log("there was error while creating post");
      }
    });
  };

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("userId");
    setSignedUser(storedUserId);
  }, []);

  const navigate = useNavigate();
  const handleDelete = async (postId) => {
    await DeleteImageApi(postId).then((res) => {
      if (res.data != null) {
        console.log(res.data);
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

        navigate("/home", {
          state: { signedUser: null, functionality: null },
        });
      } else {
        console.log("there was error while creating post");
      }
    });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <p>Post Description: {post.content}</p>
          <p>User: {post.employee?.name}</p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={post.uri}
              alt="Post Image"
              style={{
                maxWidth: "700px",
                height: "600px",
                objectFit: "contain",
              }}
            />
          </div>

          {post.employee?.id == signedUser && (
            <div>
              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
              <label style={{ marginLeft: "20%" }} htmlFor="editedContentInput">
                Edited Description:
              </label>
              <input
                id="editedContentInput"
                type="text"
                value={editedContent}
                onChange={handleInputChange}
              />
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleEditPost(post.id)}
              >
                Save Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
