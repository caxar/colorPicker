import React from "react";
import PalletteItems from "./PalletteItems";
import { nanoid } from "nanoid";

interface PropsColorPallette {
  palletteColor: any;
  dominateColor: any;
}

const ColorPallette = ({
  palletteColor,
  dominateColor,
}: PropsColorPallette) => {
  return (
    <div className="color-pallette">
      <div className="color-wrapper flex flex-col gap-5">
        <div className="color-dominate">
          <div className="font-bold text-[25px] mb-5">Доминирующий цвет</div>
          <div className="color-dominate__item">
            <PalletteItems key={nanoid()} data={dominateColor} />
          </div>
        </div>
        <div className="color-pallette__title font-bold text-[25px]">
          Палетка цветов
        </div>
        <div className="color-pallette__wrapper grid grid-cols-2 justify-center items-center  gap-2">
          {palletteColor?.map((item: any) => {
            return <PalletteItems key={nanoid()} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorPallette;
