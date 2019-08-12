import Header from './header'
import Footer from './footer'

const layoutStyle = {
  height: '100%',
  width: '100%'
}

export default (props) => (
  <div style={layoutStyle}>
    <Header />
    <div className="info">
      {props.children}
    </div>
    <iframe id="sketchContainer" src="/p5/circle" scrolling="no"></iframe>
    <Footer />
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      #__next,
      body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }
      .info {
        position: relative;
        margin-left: 20px;
        z-index: 10;
        pointer-events: none;
        display: inline-block;
        background: white;
        padding: 15px;
        padding-right: 30px;
        margin-top: 20px;
      }
      .title {
        
      }
      iframe {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        border: none;
        transition: 0.5s;
        opacity: 1;
      }
      iframe.js-active {
        opacity: 0;
      }
    `}</style>
    <script src="/static/js/app.js"></script>
  </div>
)

