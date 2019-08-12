import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout.js'

export default () => (
  <div>
    <Head>
      <title>About</title>
    </Head>

    <Layout>
      <div className='hero'>
        <h1 className='title'>About</h1>
      </div>
      <div className="modal">
        <h2>このサイトについて</h2>
        <p>
          過去に作ったものをまとめたポートフォリオサイトです。
        </p>
      </div>
    </Layout>

    <style jsx>{`
      .modal {
        position: fixed;
        width: 500px;
        height: 300px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background: rgba(255,255,255,0.9);
      }
    `}</style>
  </div>
)
