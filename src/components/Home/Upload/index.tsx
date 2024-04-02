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
  const [index, setIndex] = React.useState<number>(0);

  const context = ["public/1.png", "public/2.png", "public/3.jpg"];

  const choseImage = () => {
    setIndex(index === context.length - 1 ? 0 : index + 1);
    setUploadImage(context[index]);
  };

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
    <div className="mb-4 flex flex-col gap-5">
      {/* <button
        onClick={() => inputRef.current && inputRef.current.click()}
        className="bg-gradient-to-r from-[#0353a4] to-[#023e7d] rounded-xl
      py-3 px-7 font-bold"
      >
        Загрузить картинку
      </button> */}

      <button
        onClick={choseImage}
        className="bg-gradient-to-r from-[#0353a4] to-[#023e7d] rounded-xl
      py-3 px-7 font-bold"
      >
        Картинка для примера
      </button>

      {uploadImage?.length > 1 && (
        <button
          onClick={handleDelete}
          className=" bg-red-600 rounded-xl
          py-3 px-7 font-bold "
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
