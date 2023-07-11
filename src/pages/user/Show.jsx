import { useNavigate } from "react-router-dom";
import { DeleteImageApi, EditImageApi } from "../../api/instagramApi.jsx";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { MdSaveAlt } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";

// import { IconName } from "react-icons/bs";

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
        <div className="con6" key={post.id}>
          <div className="inlineitems">
            <img className="profileimage" src={post.uri} alt="Post_Image" />

            <span className="custom">{post.user?.name}</span>
            <FiMoreHorizontal style={{ marginLeft: "49%" }} />
          </div>

          <div>
            <div className="tempo">
              <img className="imagefield" src={post.uri} alt="Post_Image" />
              <div>
                <AiOutlineHeart size={24} />
                <FaRegComment style={{ marginLeft: "20px" }} size={24} />
                <BiShare style={{ marginLeft: "20px" }} size={24} />
                <RiDeleteBin6Line
                  onClick={() => handleDelete(post.id)}
                  style={{ marginLeft: "49%" }}
                  size={24}
                />
                <p>
                  4211 <span style={{ fontWeight: "bolder" }}>likes</span>
                </p>
              </div>
              <div></div>
            </div>

            <p className="allpost">
              {post.user?.name}:{" "}
              <span className="custom" style={{ fontWeight: "lighter" }}>
                {post.content}
              </span>
            </p>

            <input
              id="editedContentInput"
              placeholder="Type New Description"
              type="text"
              value={editedContent}
              onChange={handleInputChange}
              className="textfield"
            />

            <TfiCommentsSmiley
              className="btn2"
              onClick={() => handleEditPost(post.id)}
              style={{
                marginLeft: "",
                color: "black",
                backgroundColor: "white",
                marginLeft: "20%",
              }}
              size={20}
            />
          </div>
          <hr className="post-separator" />
        </div>
      ))}
    </div>
  );
}
