import React from "react";
import Upload from "./Upload";
import UploadImage from "./UploadImage";
import { UploadInfo } from "./UploadInfo";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="home">
        <Upload />
        <div className="home-wrapper flex justify-center gap-10">
          <div className="home-werapper__img">
            <UploadImage />
          </div>
          <div className="home-werapper__info">
            <UploadInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
