import React from "react";
import Upload from "./Upload";
import UploadImage from "./UploadImage";
import { UploadInfo } from "./UploadInfo";
import useEyeDropper from "use-eye-dropper";
import ColorPallette from "./ColorPallette";
import ColorThief from "colorthief";

const Home = () => {
  const [color, setColor] = React.useState<string>("#fff");
  const [palletteColor, setPalletteColor] = React.useState<any[]>([]);
  const [uploadImage, setUploadImage] = React.useState<HTMLImageElement>();
  const [delButton, setDelButton] = React.useState<boolean>(false);

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

  // Палетка цветов

  React.useEffect(() => {
    const colorThief = new ColorThief();

    const image = new Image();
    image.src = uploadImage;

    image?.addEventListener("load", () => {
      const colors = colorThief.getPalette(image, 8);
      setPalletteColor(colors);
    });
  }, [uploadImage]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="home py-10">
        <Upload setUploadImage={setUploadImage} />
        <div className="home-wrapper flex justify-between gap-10 items-center mb-5">
          <div className="home-werapper__img">
            <UploadImage
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
            />
          </div>
          <div className="home-werapper__info">
            <UploadInfo
              color={color}
              openPicker={openPicker}
              uploadImage={uploadImage}
              palletteColor={[]}
            />
          </div>
        </div>
        {palletteColor.length > 0 ? (
          <ColorPallette palletteColor={palletteColor} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
