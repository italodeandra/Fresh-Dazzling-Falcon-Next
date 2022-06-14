import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const Portfolio = (props) => {
  return (
    <>
      <div className="portfolio-container">
        <Head>
          <title>Portfolio - Fresh Dazzling Falcon</title>
          <meta
            property="og:title"
            content="Portfolio - Fresh Dazzling Falcon"
          />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="portfolio-content">
          <span>This is my portfolio</span>
        </div>
      </div>
      <style jsx>
        {`
          .portfolio-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .portfolio-content {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Portfolio
