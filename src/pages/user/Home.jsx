import React, { useRef, useContext, useState, useEffect } from "react";
import { StoreImageApi, AllPostsApi } from "../../api/instagramApi.jsx";
import { useNavigate } from "react-router-dom";
import { Show } from "./Show";
import { UserContext } from "../../component/UserContext";

export function Home(props) {
  const { userId, setUserId } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    AllPostsApi(setPosts);
  }, []);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = async (event) => {
    const selectedFile = event.target.files[0];
    const fileData = {
      filelocation: selectedFile,
      user: userId,
    };
    await StoreImage(fileData);
  };

  const handlePhoto = () => {
    navigate("/newPost");
  };

  const StoreImage = (fileData) => {
    StoreImageApi(fileData).then((res) => {
      if (res.data != null) {
        navigate("/post", { state: { imageUri: res.data } });
      } else {
        console.log("there was error while creating post");
      }
    });
  };

  const handleSignOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      {(() => {
        return (
          <>
            <button className="btn1 sp" onClick={handleSignOut}>
              Sign Out
            </button>

            <button className="btn1 sp1" onClick={handleButtonClick}>
              Upload Post
            </button>
            <input
              className="input1"
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />

            <button
              className="btn1 sp1"
              onClick={handlePhoto}
            >
              Take Photo
            </button>

            {posts?.length > 0 && <Show posts={posts} setPosts={setPosts} />}
          </>
        );
      })()}
    </div>
  );
}
