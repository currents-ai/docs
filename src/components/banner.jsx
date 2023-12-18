import React from "react"
import Texture from "@site/static/img/assets/texture.png";
import Lights from "@site/static/img/assets/lights.png";
import Holy from "@site/static/img/assets/holy.png";

export default function Banner() {
  return(
    <div className="bg-gradient-to-r overflow-hidden from-zinc-950 to-stone-700 w-full h-[30vh] flex justify-center items-center my-4 lg:my-0 mx-auto  relative ">
      <img
        src={Texture}
        className="w-full h-full absolute top-0 left-0 object-cover opacity-50"
      />
      <img
        src={Lights}
        className="absolute -left-20 -top-12 "
      />
      <img
        src={Holy}
        className="absolute -top-28 -right-28 opacity-50"
      />
      <div className="text-center space-y-8 z-20">
        <h1 className="text-white text-4xl lg:text-6xl font-semibold">
          FreeText AI Help Center 
        </h1>
      </div>
    </div>
  )

}
