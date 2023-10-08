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
      <div className="container">
            <div className="container row">
                <div className="container col col--6">
                    <h1 className="hero__title">{siteConfig.tagline}</h1>
                    <p className="hero__body">
                        error.fyi is an open-source project with the aim of improving user-facing errors in applications, enhancing the end-user experience.
                        It accomplishes this by providing developers with tools and libraries to enrich applications' errors with <strong>additional error context</strong>, including <strong>causes, fixes, and documentation</strong> whenever errors are returned to their users.
                    </p>
                    <div>
                        <Link
                            className={clsx("button button--primary button--lg", styles.buttons)}
                            to="/docs/intro">
                            Get Started
                        </Link>
                        <Link
                            className={clsx("button  button--secondary button--lg", styles.buttons)}
                            to="/docs/category/installation">
                            Installation
                        </Link>
                    </div>
                </div>
                <div className="container col col--6">
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
