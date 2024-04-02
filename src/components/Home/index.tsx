import React from "react";
import Upload from "./Upload";
import UploadImage from "./UploadImage";
import { UploadInfo } from "./UploadInfo";
import useEyeDropper from "use-eye-dropper";
import ColorPallette from "./ColorPallette";
import ColorThief from "colorthief";

const Home = () => {
  const [color, setColor] = React.useState<string>("#fff");
  const [palletteColor, setPalletteColor] = React.useState([]);
  const [uploadImage, setUploadImage] = React.useState<HTMLImageElement>();
  const [dominateColor, setDominateColor] = React.useState();

  const { open, close, isSupported } = useEyeDropper();

  const openPicker = async () => {
    try {
      const color = await open();
      setColor(color?.sRGBHex);
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
      const palletteColorsFromImg = colorThief?.getPalette(image, 8);
      const dominateColorsFromImg = colorThief?.getColor(image);
      setPalletteColor(palletteColorsFromImg);
      setDominateColor(dominateColorsFromImg);
    });
  }, [uploadImage]);

  return (
    <div className="flex justify-center items-center">
      <div className="home py-10 w-full">
        <Upload
          setUploadImage={setUploadImage}
          uploadImage={uploadImage}
          setPalletteColor={setPalletteColor}
          setColor={setColor}
        />
        <div className="home-wrapper flex flex-col justify-between gap-10 items-center mb-5">
          <div className="home-werapper__img w-full">
            <UploadImage
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
              setPalletteColor={undefined}
            />
          </div>
          <div className="home-wrapper__info w-full">
            <UploadInfo
              color={color}
              openPicker={openPicker}
              uploadImage={uploadImage}
              palletteColor={[]}
            />
          </div>
        </div>
        {palletteColor?.length > 0 ? (
          <ColorPallette
            palletteColor={palletteColor}
            dominateColor={dominateColor}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
