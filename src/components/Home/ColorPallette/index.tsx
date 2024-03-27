import React from "react";
import PalletteItems from "./PalletteItems";
import { nanoid } from "nanoid";

interface PropsColorPallette {
  palletteColor: any;
}

const ColorPallette = ({ palletteColor }: PropsColorPallette) => {
  console.log(palletteColor);
  return (
    <div className="color-pallette">
      <div className="color-pallette__title font-bold text-[25px] mb-5">
        Палетка цветов
      </div>
      <div className="color-pallette__wrapper grid grid-cols-8 justify-between items-center flex-wrap gap-5">
        {palletteColor?.map((item: any) => {
          return <PalletteItems key={nanoid()} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ColorPallette;
