import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default () => (
  <div className="copy">
    <small>©︎ Yuki Sakaguchi.</small>
    <style jsx>{`
      .copy {
        position: absolute;
        bottom: 10px;
        text-align: center;
        width: 100%;
        left: 0;
        z-index: 100;
      }
    `}</style>
  </div>
)
