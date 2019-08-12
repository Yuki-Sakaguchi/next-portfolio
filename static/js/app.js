/**
 * iframeを更新
 */
window.addEventListener('load', function () {  
  var iframe = document.getElementById('sketchContainer');
  var links = document.querySelectorAll('a[data-url^="/p5/"]');
  links.forEach((el, index) => {
    el.addEventListener('click', () => {
      var url = el.getAttribute('data-url');
      var className = 'js-active';
      if (iframe.src !== url) {
        iframe.classList.add(className)
        iframe.addEventListener('transitionend', () => {
          iframe.src = url;
          iframe.addEventListener('load', () => {
            iframe.classList.remove(className);
          })
        })
      }
    })
  })
});