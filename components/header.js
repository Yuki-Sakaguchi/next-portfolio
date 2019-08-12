import Link from 'next/link'

const localStyle = {
  marginTop: '30px'
}

export default () => (
  <div className="menu">
    <Link href="/">
      <a className="menu__item">TOP</a>
    </Link>
    <Link href="/about">
      <a className="menu__item">ABOUT</a>
    </Link>
    <a className="menu__item" style={localStyle} data-url="/p5/circle">circle</a>
    <a className="menu__item" data-url="/p5/rotate_circle">rotate</a>
    <a className="menu__item" data-url="/p5/paint">paint</a>
    <style jsx>{`
      .menu {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 11;
        display: flex;
        flex-direction: column;
      }
      .menu__item {
        display: inline-block;
        margin-top: 10px;
        margin-right: 0 !important;
        margin-left: auto;
        color: white;
        text-decoration: none;
        background-color: black;
        line-height: 1;
        cursor: pointer;
        transition: 0.3s;
      }
      .menu__item:hover {
        opacity: 0.7;
      }
    `}</style>
  </div>
)
