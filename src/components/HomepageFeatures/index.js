import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

//you can easily add extra context to errors within your applications.
const FeatureList = [
  {
    title: 'Integrating with New and Existing Projects',
    description: (
      <>
          Effortlessly integrate error.fyi into your projects <strong>without many changes</strong> to your application's codebase, using error.fyi's tooling and client libraries.
      </>
    ),
  },
  {
    title: 'Create Error Documentation From Source Code',
    description: (
        <>
            Easily generate error <strong>markdown documentation</strong> from your projects' codebases and share to your users through platforms like GitHub Pages, Netlify, or Gatsby.
        </>
    ),
  },
  {
    title: 'Enhancing User Troubleshooting Experience',
    description: (
      <>
          error.fyi provides instant <strong>error context, including causes, fixes, and documentation</strong>, giving you more control over your users troubleshooting experience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3 card margin-right--sm')}>
      <div className={clsx("card__header", styles.cardHeader)}>
        <h3>{title}</h3>
      </div>
      <div className="card__body">
          <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
