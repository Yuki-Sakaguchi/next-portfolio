import React from 'react'
import Head from 'next/head'
import Layout from '../../components/sketch_layout.js'

export default () => (
  <div>
    <Head>
      <title>Rotate circle</title>
    </Head>
    <Layout>
      <script src="/static/js/p5/rotate-circle.js"></script>
    </Layout>
    <style jsx global>{`
      html,
      body {
        background: black;
      }
    `}</style>
  </div>
)
