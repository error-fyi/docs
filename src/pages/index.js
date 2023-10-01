import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();


  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container"  style={{ display: "flex"}}>
        <div className="container">
            <h1 className="hero__title">{siteConfig.tagline}</h1>
            <p className="hero__body">
                error.fyi is an open-source project dedicated to improving the narrative regarding user-facing errors in software applications, with the ultimate aim of enhancing the end-user experience.
                It accomplishes this by providing developers with tools and libraries that facilitate the creation, documentation, and management of errors within applications.
            </p>
            <div>
                <Link
                    className={clsx("button button--primary button--lg", styles.buttons)}
                    to="/docs/intro">
                    Get Started
                </Link>
                <Link
                    className={clsx("button  button--secondary button--lg", styles.buttons)}
                    to="/docs/intro">
                    Installation
                </Link>
            </div>
        </div>
        <div className="container">
            <Splide options={{autoplay: true}} aria-label="Examples">
                <SplideSlide>
                    <img src="/img/landing/code.png" alt="code_example"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/landing/manifest.png" alt="manifest"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/landing/error_cli.png" alt="error_example"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/landing/markdown.png" alt="generated_markdown"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="/img/landing/static_site.png" alt="static_site"/>
                </SplideSlide>

            </Splide>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
