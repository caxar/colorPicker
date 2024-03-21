import React from "react";

interface UploadProps {
  setUploadImage: any;
}

const Upload = ({ setUploadImage }: UploadProps) => {
  const inputRef = React.useRef();

  const handleChangeInput = (image) => {
    setUploadImage(URL.createObjectURL(image));
    console.log(image);
  };

  return (
    <div className="mb-4 flex">
      <button
        onClick={() => inputRef.current.click()}
        className="bg-gradient-to-r from-gradient_one to-gradient_two rounded-2xl
      py-3 px-7 font-bold"
      >
        Загрузка фото
      </button>
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
