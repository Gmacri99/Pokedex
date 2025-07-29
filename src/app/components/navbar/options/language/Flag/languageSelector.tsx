'use client'
import  './styles.css'
import { renderIconSpan } from "@/app/common/functions";
import { Languages } from "@/app/const/Languages";
import { useAppContext } from "@/app/context/context";

export const FlagOption = () => {

  const { language } = useAppContext();


  return (
    <>
        <div>
          {renderIconSpan(Languages, language, 'FlagSvg')}
        </div>
    </>
  );
}
