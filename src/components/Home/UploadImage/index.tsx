import React from "react";

import { useDropzone } from "react-dropzone";

type UploadImageProps = {
  uploadImage: boolean;
  setUploadImage: (i: boolean) => {};
};

const UploadImage = ({ uploadImage, setUploadImage }: UploadImageProps) => {
  const [file, setFile] = React.useState<File | undefined>();

  const handleChaneg = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setUploadImage(URL.createObjectURL(target.files[0]));
  };

  const onDrop = React.useCallback((acceptedFiles) => {
    setUploadImage(URL.createObjectURL(acceptedFiles));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="upload-image w-[700px] h-[400px] rounded-2xl flex justify-center items-center overflow-hidden bg-block_color">
      {uploadImage ? (
        <>
          <img
            className="w-[100%] h-[100%] rounded-xl"
            src={uploadImage}
            alt="image"
          />
        </>
      ) : (
        <div className=" h-full w-full flex justify-center items-center">
          <form action="" onChange={handleChaneg}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
          </form>
          {/* <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M12 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M4.04193 18.2622C4.07264 18.5226 4.12583 18.7271 4.21799 18.908C4.40973 19.2843 4.7157 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12M16 3L18.5 5.5M18.5 5.5L21 8M18.5 5.5L21 3M18.5 5.5L16 8"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold">Нет фотографии</span> */}
        </div>
      )}
    </div>
  );
};

export default UploadImage;
