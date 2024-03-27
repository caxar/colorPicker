import React from "react";
import { ToastContainer, toast } from "react-toastify";

const PalletteItems = ({ data }: any) => {
  const [copyText, setCopyText] = React.useState<boolean>(false);

  const colorData = data;

  const hexColor =
    "#" +
    colorData
      .map((color: { toString: (arg0: number) => any }) => {
        const hex = color.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  const copyColor = () => {
    navigator?.clipboard?.writeText(hexColor);

    setCopyText(true);
    // setTimeout(() => {
    //   setCopyText(false);
    // }, 1300);
  };

  return (
    <>
      <div className="group color-pallette__item relative flex flex-col w-[120px] ">
        <div
          onClick={copyColor}
          style={{ background: hexColor }}
          className="color h-[70px] rounded-xl flex items-center justify-center gap-3 cursor-pointer
        "
        >
          {hexColor}
        </div>
        <span className="absolute left-[18px] bottom-[-35px] scale-0 transition-all rounded bg-block_color p-2 text-xs text-white group-hover:scale-100">
          Скопировать
        </span>
      </div>
    </>
  );
};

export default PalletteItems;
