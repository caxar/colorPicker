import React from "react";

interface PropsInfo {
  color: string;
  openPicker: () => void;
}

export const UploadInfo: React.FC<PropsInfo> = ({ color, openPicker }) => {
  const handleCopyColor = () => {};

  return (
    <div className="color flex flex-col justify-between h-full">
      <div
        onClick={() => openPicker()}
        className="color-picker font-bold text-[25px] flex items-center gap-5 cursor-pointer"
      >
        Выбрать цвет
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="style=bulk">
            <g id="add-circle">
              <path
                id="vector (Stroke)"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
                fill="#feffff"
              />
              <path
                id="vector (Stroke)_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.00744C12.4142 7.00744 12.75 7.34323 12.75 7.75744L12.75 16.2427C12.75 16.6569 12.4142 16.9927 12 16.9927C11.5857 16.9927 11.25 16.6569 11.25 16.2427L11.25 7.75743C11.25 7.34322 11.5858 7.00744 12 7.00744Z"
                fill="#000000"
              />
              <path
                id="vector (Stroke)_3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 12C17 12.4142 16.6642 12.75 16.25 12.75L7.76476 12.75C7.35055 12.75 7.01476 12.4142 7.01476 12C7.01477 11.5857 7.35055 11.25 7.76477 11.25L16.25 11.25C16.6642 11.25 17 11.5858 17 12Z"
                fill="#000000"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="color-picker__wrapper flex gap-5">
        <div
          className={`picker-wrapper__color bg-[${color}] w-[50px] rounded-full`}
        ></div>
        <div className="picker-wrapper__info flex flex-col gap-3">
          {/* 1 */}
          <div className="wrapper-info__item">
            <div className="text-[17px] mb-2">Hex значения</div>
            <div className="info-item__value w-[240px] flex justify-between items-center text-black_color bg-white_color rounded-full py-1 px-5">
              <span className="text-[17px] font-bold">{color}</span>
              <button>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z"
                    stroke="#0f0f0f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
                    stroke="#0f0f0f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
                    stroke="#0f0f0f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="wrapper-info__item">
            <div className="text-[17px] mb-2">RGB значения</div>
            <div className="info-item__value w-[240px] flex justify-between items-center text-black_color bg-white_color rounded-full py-1 px-5">
              <span className="text-[17px] font-bold">rgb(146, 211, 165)</span>
              <button onClick={handleCopyColor}>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z"
                    stroke="#0f0f0f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
                    stroke="#0f0f0f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
                    stroke="#0f0f0f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* 3 */}
          <div className="wrapper-info__item">
            <div className="text-[17px] mb-2">HSL значения</div>
            <div className="info-item__value w-[240px] flex justify-between items-center text-black_color bg-white_color rounded-full py-1 px-5">
              <span className="text-[17px] font-bold">hsl(136, 42, 70)</span>
              <button>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z"
                    stroke="#0f0f0f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
                    stroke="#0f0f0f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
                    stroke="#0f0f0f"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
