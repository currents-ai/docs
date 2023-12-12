import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Texture from "@site/static/img/assets/texture.png";
import Lights from "@site/static/img/assets/lights.png";
import Holy from "@site/static/img/assets/holy.png";

export default function Home() {
  const { globalData } = useDocusaurusContext()
 
  const docs =
    globalData["docusaurus-plugin-content-docs"].default.versions[0].docs

  // hack to find categories
  const mainCategories = docs
    .filter((doc) => doc.id.includes("/category/") || doc.id.includes("/index"))
    .map((doc) => {
      return {
        id: doc.id,
        path: doc.path,
        label:
          doc.path.split("/").pop().replace(/-/g, " ").charAt(0).toUpperCase() +
          doc.path.split("/").pop().replace(/-/g, " ").slice(1), // Capitalize the first letter
      }
    })

  return (
    <div className="space-y-16">
      <div className="bg-gradient-to-r overflow-hidden from-zinc-950 to-stone-700 w-full h-[30vh] flex justify-center items-center rounded-2xl my-4 lg:my-0 mx-auto lg:mt-10 relative ">
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
      <div className="flex flex-wrap justify-center md:justify-start">
        {mainCategories.map((category) => (
          <div key={category.id} className="md:w-[47%] w-full m-2">
            <a className="pagination-nav__link font-semibold text-black py-6" href={category.path}>
              {category.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
