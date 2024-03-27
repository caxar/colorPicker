import React from "react";

const DragDropFile = ({ uploadImage }: any) => {
  console.log(uploadImage);
  return (
    <div className="w-[700px] h-[400px] bg-blue-900">
      <form action="">
        <input type="file" name="image" />
      </form>
    </div>
  );
};

export default DragDropFile;
