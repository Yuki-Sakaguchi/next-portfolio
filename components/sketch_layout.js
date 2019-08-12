export default (props) => (
  <div>
    {props.children}
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }
    `}</style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"></script>
  </div>
)
