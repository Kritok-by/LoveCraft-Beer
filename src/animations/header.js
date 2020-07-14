let cbpAnimatedHeader = (function() {

      let docElem = document.documentElement,
          header = document.querySelector('.header'),
          didScroll = false,
          changeHeaderOn = 200;



      function init() {
          window.addEventListener( 'scroll', function(event) {
              if( !didScroll ) {
                  didScroll = true;
                  setTimeout( scrollPage, 250 );
              }
          }, false );
      }

      function scrollPage() {
          var sy = scrollY();
          if ( sy >= changeHeaderOn ) {
              header.classList.add('min-header');
          }
          else {
            header.classList.remove('min-header' );
          }
          didScroll = false;
      }

      function scrollY() {
          return window.pageYOffset || docElem.scrollTop;
      }
      init();
})();

export {cbpAnimatedHeader};
