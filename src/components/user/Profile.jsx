import React, { useRef } from "react";
import Webcam from "react-webcam";
import { StoreImageApi } from "../../api/instagramApi.jsx";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: "auto",
  height: "auto",
  facingMode: "user",
};
const Profile = () => {
  const navigate = useNavigate();
  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(async () => {
    const storedUserId = sessionStorage.getItem("userId");
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);

    const base64Data = pictureSrc.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ""
    );
    const selectedFile = base64ToBlob(base64Data, "image/jpeg");
    console.log(selectedFile);
    console.log(pictureSrc);

    const fileData = {
      filelocation: selectedFile,
      user: storedUserId,
    };
    await StoreImage(fileData);
  });

  const StoreImage = async (fileData) => {
    // console.log(fileData.filelocation);
    await StoreImageApi(fileData).then((res) => {
      if (res.data != null) {
        console.log("HI tayyab");
        console.log(res.data);
        navigate("/post", { state: { imageUri: res.data } });
      } else {
        console.log("there was error while creating post");
      }
    });
  };

  const base64ToBlob = (base64Data, contentType = "image/jpeg") => {
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
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
