import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { isLight, isDark } from "color-2-name";

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

  const notify = () =>
    toast.success(`Цвет ${hexColor} скопирован`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });

  const copyColor = () => {
    navigator?.clipboard?.writeText(hexColor);
    setCopyText(true);
    notify();
  };

  const lightOrDark = isLight(hexColor);

  return (
    <>
      <div className="group color-pallette__item relative flex">
        <div
          onClick={copyColor}
          style={{ background: hexColor }}
          className="color h-[70px] rounded-xl flex items-center  w-full justify-center gap-3 cursor-pointer
        "
        >
          <span className={`font-bold ${lightOrDark ? "text-black" : ""}`}>
            {hexColor}
          </span>
        </div>
        <span className="absolute left-[18px] bottom-[-35px] scale-0 transition-all rounded bg-block_color p-2 text-xs text-white group-hover:scale-100">
          Скопировать
        </span>
      </div>
    </>
  );
};

export default PalletteItems;
