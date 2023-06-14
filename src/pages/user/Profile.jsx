import Webcam from "react-webcam";
import { StoreImageApi } from "../../api/instagramApi.jsx";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../component/UserContext";
import React, { useState, useContext, useRef } from "react";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
const Profile = () => {
  const { userId, setUserId } = useContext(UserContext);
  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const navigate = useNavigate();
  const capture = React.useCallback(async () => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);

    const base64Data = pictureSrc.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ""
    );

    const base64ToBlob = (base64Data, contentType = "image/jpeg") => {
      const sliceSize = 1024;
      const byteCharacters = atob(base64Data);
      const byteArrays = [];

      for (
        let offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      return new Blob(byteArrays, { type: contentType });
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

    const selectedFile = base64ToBlob(base64Data, "image/jpeg");
    await StoreImage({
      filelocation: selectedFile,
      user: userId,
    });
  });

  return (
    <div>
      <h2 className="mb-5 text-center">
        React Photo Capture using Webcam Examle
      </h2>
      <div>
        {picture == "" ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div>
        {picture != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setPicture();
            }}
            className="btn btn-primary"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="btn btn-danger"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
};
export default Profile;
