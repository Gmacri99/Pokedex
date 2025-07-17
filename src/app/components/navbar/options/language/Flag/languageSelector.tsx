'use client'

import { Languages } from "@/app/const/Languages";
import { useAppContext } from "@/app/context/context";

export const FlagOption = () => {

  const { language } = useAppContext();

  console.log(language)

  return (
    <>
        <div>
          {Languages.map((el,index)=>el.name===language ? <span key={index}> {el.svg}</span> : null)}
        </div>
    </>
  );
}
