import React from "react";

interface UploadProps {
  setUploadImage: any;
  setPalletteColor: any;
  uploadImage: string;
  setColor: any;
}

const Upload = ({
  setUploadImage,
  setPalletteColor,
  uploadImage,
  setColor,
}: UploadProps) => {
  const inputRef = React.useRef<HTMLDivElement>();

  const handleChangeInput = (image: Blob | MediaSource) => {
    setUploadImage(URL.createObjectURL(image));
  };

  const handleDelete = () => {
    setUploadImage("");
    setPalletteColor("");
    setColor("#fff");
  };

  return (
    <div className="mb-4 flex">
      <button
        onClick={() => inputRef.current && inputRef.current.click()}
        className="bg-gradient-to-r from-[#0353a4] to-[#023e7d] rounded-xl
      py-3 px-7 font-bold"
      >
        Загрузить фото
      </button>

      <button
        onClick={() => inputRef.current && inputRef.current.click()}
        className="bg-gradient-to-r  rounded-xl
      py-3 px-7 font-bold"
      >
        Загрузить примерную картинку
      </button>

      {uploadImage?.length > 1 && (
        <button
          onClick={handleDelete}
          className="bg-gradient-to-r bg-red-600 rounded-xl
          py-3 px-7 font-bold ml-5"
        >
          Удалить фото
        </button>
      )}

      <input
        onChange={(e) => handleChangeInput(e?.target?.files[0])}
        ref={inputRef}
        type="file"
        hidden
      />
    </div>
  );
};

export default Upload;
