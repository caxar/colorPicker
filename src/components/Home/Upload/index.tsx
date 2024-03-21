import React from "react";

const Upload = () => {
  return (
    <div className="mb-4 flex">
      <input
        className="bg-gradient-to-r from-gradient_one to-gradient_two rounded-2xl
      py-3 px-7 font-bold"
        type="file"
        placeholder="Загрузка фото"
      />
    </div>
  );
};

export default Upload;
