import React from "react";
import Upload from "./Upload";
import UploadImage from "./UploadImage";
import { UploadInfo } from "./UploadInfo";
import useEyeDropper from "use-eye-dropper";

const Home = () => {
  const [color, setColor] = React.useState<string>("#fff");
  const [uploadImage, setUploadImage] = React.useState(null);

  const { open, close, isSupported } = useEyeDropper();

  const openPicker = async () => {
    try {
      const color = await open();
      setColor(color.sRGBHex);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    openPicker();
  }, [open]);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="home">
        <Upload />
        <div className="home-wrapper flex justify-center gap-10">
          <div className="home-werapper__img">
            <UploadImage uploadImage={uploadImage} />
          </div>
          <div className="home-werapper__info">
            <UploadInfo color={color} openPicker={openPicker} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
