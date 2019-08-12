import React from 'react'
import Head from 'next/head'
import Layout from '../../components/sketch_layout.js'

export default () => (
  <div>
    <Head>
      <title>Circle</title>
    </Head>
    <Layout>
      <script src="/static/js/p5/paint.js"></script>
    </Layout>
  </div>
)
