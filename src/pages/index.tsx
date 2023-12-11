import React from "react"
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Home from '@site/src/components/home';



export default function Index(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Docs`}
      description={`FreeText AI Docs - Hub for privacy, help docs and other resources.`}>
      <main>
        <div className="max-w-6xl m-auto p-4"><Home /></div>
      </main>
    </Layout>
  );
}










