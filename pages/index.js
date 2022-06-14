import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Fresh Dazzling Falcon</title>
          <meta property="og:title" content="Fresh Dazzling Falcon" />
        </Head>
        <Header></Header>
        <div className="home-content">
          <span>This is my home</span>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-content {
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

export default Home
