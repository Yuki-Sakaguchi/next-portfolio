import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout.js'

const layoutStyle = {
  height: '100%',
  width: '100%'
}

export default () => (
  <div style={layoutStyle}>
    <Head>
      <title>Home</title>
    </Head>

    <Layout>
      <div className='hero'>
        <h1 className='title'>Portfolio.</h1>
        <p className='description'>
          JavaScript / p5.js / processing / Three.js
        </p>
      </div>
    </Layout>
  </div>
)
