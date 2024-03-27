import React from "react";

interface UploadProps {
  setUploadImage: any;
}

const Upload = ({ setUploadImage }: UploadProps) => {
  const inputRef = React.useRef<HTMLDivElement>(null);

  const handleChangeInput = (image: Blob | MediaSource) => {
    setUploadImage(URL.createObjectURL(image));
    // console.log(image);
  };

  return (
    <div className="mb-4 flex">
      <button
        onClick={() => inputRef.current.click()}
        className="bg-gradient-to-r from-[#0353a4] to-[#023e7d] rounded-2xl
      py-3 px-7 font-bold"
      >
        Загрузить фото
      </button>
      {/* <button
        onClick={() => setUploadImage(null)}
        className="bg-gradient-to-r bg-red-700 rounded-2xl
      py-3 px-7 font-bold"
      >
        Удалить картинку
      </button> */}
      <input
        onChange={(e) => handleChangeInput(e.target.files[0])}
        ref={inputRef}
        type="file"
        hidden
      />
    </div>
  );
};

export default Upload;
