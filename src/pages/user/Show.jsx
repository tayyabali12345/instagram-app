import { useNavigate } from "react-router-dom";
import { DeleteImageApi, EditImageApi } from "../../api/instagramApi.jsx";
import { useState } from "react";

export function Show(props) {
  const { posts, setPosts } = props;
  const [editedContent, setEditedContent] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setEditedContent(event.target.value);
  };

  const handleEditPost = (postId) => {
    handleEdit(postId, editedContent);
    setEditedContent("");
  };

  const handleEdit = (postId, editedContent) => {
    EditImageApi(postId, editedContent).then((res) => {
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

        navigate("/home");
      } else {
        console.log("there was error while creating post");
      }
    });
  };

  const handleDelete = (postId) => {
    DeleteImageApi(postId).then((res) => {
      if (res.data != null) {
        console.log(res.data);
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

        navigate("/home");
      } else {
        console.log("there was error while creating post");
      }
    });
  };

  return (
    <div className="con5">
      {posts.map((post) => (
        <div className="con6" key={post.id} >
          <p className="allpost">
            User: <span className="custom">{post.user?.name}</span>
          </p>
          <p className="allpost">
            Description: <span className="custom">{post.content}</span>
          </p>
          <div style={{ display: "flex" }}>
            <div className="con7" >
              <button className="btn3" onClick={() => handleDelete(post.id)}>
                Delete Post
              </button>
              <br />
              <br />
              <button className="btn2" onClick={() => handleEditPost(post.id)}>
                Save Edit
              </button>
              <input
                id="editedContentInput"
                placeholder="Type New Description"
                type="text"
                value={editedContent}
                onChange={handleInputChange}
                className="textfield"
              />
            </div>
            <div>
              <img src={post.uri} alt="Post_Image" className="imagefield" />
            </div>
          </div>
          )}
        </div>
      ))}
    </div>
  );
}
