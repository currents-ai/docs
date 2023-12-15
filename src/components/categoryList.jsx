import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Texture from "@site/static/img/assets/texture.png";
import Lights from "@site/static/img/assets/lights.png";
import Holy from "@site/static/img/assets/holy.png";
import categoryData from './categoryData.json'

export default function Home() {
  const { globalData } = useDocusaurusContext()


  const docs =
    globalData["docusaurus-plugin-content-docs"].default.versions[0].docs

  const mainCategories = categorizeRootArticles(docs)

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
        {mainCategories.map((category) => {
          return(
            

<div key={category.id} className="md:w-[47%] w-full m-2">
  <a className="pagination-nav__link h-full w-full" href={category.path}>
    <div className="flex h-full w-full items-center">
      <div className="flex h-16 w-auto  mr-3">
        <img src={category.icon || "img/icons/table-cells.svg"} className="h-full w-full object-cover" alt="Logo" />
      </div>
      <div className="flex-1 truncate">
        <div className="font-semibold text-black dark:text-white">
          {category.header}
        </div>
        <div className="text-gray-700 dark:text-gray-300 truncate mt-1">
          {category.subheader}
        </div>
        <div className="text-gray-500 text-sm italic mt-1">
          {category.count} articles
        </div>
      </div>
    </div>
  </a>
</div>


          )}
        )}
      </div>
    </div>
  )

  function categorizeRootArticles(articles) {
    // Extract unique root categories from the articles
    const rootCategories = [...new Set(articles.map(article => article.id.split('/')[0]))];

    // Initialize a count object for each root category
    const categoryCounts = rootCategories.reduce((acc, category) => {
        acc[category] = 0;
        return acc;
    }, {});

    // Count the articles in each category
    articles.forEach(article => {
        const category = article.id.split('/')[0];
        if (rootCategories.includes(category)) {
            categoryCounts[category]++;
        }
    });

    // Map the counts to an array of objects in the desired format
    return rootCategories.map(category => ({
        id: category,
        header: category.charAt(0).toUpperCase() + category.slice(1),
        subheader: `Articles about ${category}`,
        path: `/docs/${category}`,
        count: categoryCounts[category],
        ...(category in categoryData && categoryData[category]),
    }));
  }

}
