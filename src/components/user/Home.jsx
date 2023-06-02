import { useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { StoreImageApi } from "../../api/login.jsx";
import { useNavigate } from "react-router-dom";

export function Home(props) {
  const location = useLocation();
  const { signedUser, functionality } = location.state;
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
        } else {
          // here store the id of user in session
          // Get the user ID from the API or any other source
          // const userId = signedUser;

          // // Store the user ID in sessionStorage
          // sessionStorage.setItem("userId", userId);

          const userId = signedUser;
          sessionStorage.setItem("userId", userId);

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
            </>
          );
        }
      })()}

      {/* here to show instagram post */}
    </div>
  );
}
