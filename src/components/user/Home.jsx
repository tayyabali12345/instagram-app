import { useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { StoreImageApi, AllPostsApi } from "../../api/login.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Show } from "../user/Show";

export function Home(props) {
  const location = useLocation();
  const { signedUser, functionality } = location.state;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AllPostsApi(setPosts);
  }, []);

  let responsedata = null;
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = async (event) => {
    const selectedFile = event.target.files[0];
    const storedUserId = sessionStorage.getItem("userId");
    const fileData = {
      filelocation: selectedFile,
      user: storedUserId,
    };
    await StoreImage(fileData);
  };

  const StoreImage = async (fileData) => {
    console.log(fileData.filelocation);
    await StoreImageApi(fileData).then((res) => {
      if (res.data != null) {
        console.log(res.data);
        navigate("/post", { state: { imageUri: res.data } });
      } else {
        console.log("there was error while creating post");
      }
    });
  };

  return (
    <div>
      {(() => {
        if (signedUser === "0" && functionality === "signup") {
          return <h1>This Email is already in use</h1>;
        } else if (functionality === "signin" && signedUser != null) {
          const userId = signedUser.id;
          sessionStorage.setItem("userId", userId);
        } else if (functionality === null && signedUser === null) {
        } else {
          const userId = signedUser;
          sessionStorage.setItem("userId", userId);
        }

        return (
          <>
            <h1>Welcome</h1>
            <p>Thank you for visiting our website.</p>

            <button onClick={handleButtonClick}>Select File</button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />

            {posts.length > 0 && <Show posts={posts} setPosts={setPosts} />}
          </>
        );
      })()}
    </div>
  );
}
