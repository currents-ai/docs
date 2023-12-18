import React from "react"
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import CategoryList from '@site/src/components/categoryList'
import Banner from '@site/src/components/banner'



export default function Index() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Docs`}
      description={`FreeText AI Docs - Hub for privacy, help docs and other resources.`}>
      <main>
        <div className="space-y-16">
          <Banner />
          <div className="max-w-6xl m-auto p-4">
            <CategoryList />
          </div>
        </div>
      </main>
    </Layout>
  );
}










