jQuery(document).ready(function($) {
 'use strict';

  var $ac_sentence_slider = $('.ac-sentence-slider');
  
  // Buttons on blog
  $('.aside').addClass("sidebar-left col-sm-12 col-desc-3");
  $('.social4in').addClass("clearfix");
  $('.social4i').addClass("clearfix");
  $('.addthis_toolbox').addClass("clearfix");
  // $('.archive .grid-item').addClass("grid-item");
  

  var buttons7Click = Array.prototype.slice.call( document.querySelectorAll( '#btn-click button' ) ),
      buttons9Click = Array.prototype.slice.call( document.querySelectorAll( 'button.btn-8g' ) ),
      totalButtons7Click = buttons7Click.length,
      totalButtons9Click = buttons9Click.length;

    buttons7Click.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );
    buttons9Click.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );

    function activate() {
      var self = this, activatedClass = 'btn-activated';

      if( classie.has( this, 'btn-8g' ) ) {
        // if it is the first of the two btn-8g then activatedClass = 'btn-success3d';
        // if it is the second then activatedClass = 'btn-error3d'
        // activatedClass = buttons9Click.indexOf( this ) === totalButtons9Click-2 ? 'btn-success3d' : 'btn-error3d';
        activatedClass = 'btn-success3d';
      }

      if( !classie.has( this, activatedClass ) ) {
        classie.add( this, activatedClass );
        setTimeout( function() { classie.remove( self, activatedClass ) }, 1000 );
      }
    }

    ( function( window ) {

 

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }

  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
  } else {
    // browser global
    window.classie = classie;
  }

  })( window );



  $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  })

  // Menu. 
  $(".collapse-button").click(function(){
    $('.menuBar').toggleClass('is-menuOpen');
    $('.menu-burger').toggleClass('line-animation');
    // $('.page-overlay').toggleClass('overlay-bg');
  });

  // Animated links.
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing'); //900, 'swing', function () {
    // , function () {
    //     window.location.hash = target;
    // }); <--Stop Anchor Being Included In URL
  });

  // FIRST THREE SENTENCES
  setTimeout(function () {
    $('.page .highlight').addClass('animated');
  }, 1000);

  setTimeout(function () {
    $('.job .highlight').addClass('animated');
  }, 2000);

  //ARROW
  setTimeout(function () {
    $('.ac-arrow').fadeIn().addClass('display').css({opacity: 1});
  }, 2000);

  //Animation for Hiring text
  setTimeout(function () {
    $('.hiring-text').fadeIn().addClass('display').css({opacity: 1});
    new AcSentenceSlider($ac_sentence_slider.get(0), {init_delay: 1000});
  }, 4500);

  //CONTACT
  setTimeout(function () {
    $('.contact-us').fadeIn().addClass('display').css({opacity: 1});
    new AcSentenceSlider($ac_sentence_slider.get(0), {init_delay: 1000});
  }, 4000);
  


// VIEWPORT
  $.fn.inviewport = function (options) {
    var settings = $.extend({
      'minPercentageInView' : 100,
      'standardClassName': 'in-view'
    }, options);
    this.each(function () {
      var $this = $(this),
        $win = $(window),
        changed = false,
        isVisible = function () {
          var c = settings.className || settings.standardClassName,
            min = (settings.threshold || settings.minPercentageInView) / 100,
            xMin = $this.width() * min,
            yMin = $this.height() * min,
            winPosX = $win.scrollLeft() + $win.width(),
            winPosY = $win.scrollTop() + $win.height(),
            elPosX = $this.offset().left + xMin,
            elPosY = $this.offset().top + yMin;
          if (winPosX > elPosX && winPosY > elPosY) {
            $this.addClass(c);
          }
        };
      $win.on('ready', isVisible())
        .on('resize scroll', function () {
          changed = true;
        })
      setInterval(function () {
        if (changed) {
          changed = false;
          isVisible();
        }
      }, 250);
    });
  };

  
  // LON and LAT
  $('.ac-place').inviewport({
    threshold: 75,
  })
  setTimeout(function () {
    $('section.ac-place div:first-child p').show().addClass('animated1').css({opacity: 1});
  }, 1000);

  setTimeout(function () {
    $('section.ac-place div:nth-child(2) p').show().addClass('animated2').css({opacity: 1});
  }, 1200);

  setTimeout(function () {
    $('section.ac-place div:nth-child(3) p').show().addClass('animated3').css({opacity: 1});
  }, 1400);


  // var windowH = $(window).height();
  $('.footer-box').css({'height':($(window).height())+'px'});

  // function box() {
  //     setTimeout(function () {
  //       $('.hiring-box').addClass('display');
  //     }, 12000);
  //     setTimeout(function () {
  //       $('.hiring-box').removeClass('display');
  //     }, 20000); 
  //     setTimeout(function () {
  //       $('.blog-box').addClass('display');
  //     }, 24000);
  //     setTimeout(function () {
  //       $('.blog-box').removeClass('display');
  //     }, 32000);
  //     setTimeout(function () {
  //       $('.insta-box').addClass('display');
  //     }, 36000);
  //     setTimeout(function () {
  //       $('.insta-box').removeClass('display');
  //     }, 44000);
  // } 
  //
  // box();
  // setInterval(function(){
  //   box()
  // }, 44100);

  function box() {

      setTimeout(function () {
        $('.insta-box').addClass('display');
      }, 12000);
      setTimeout(function () {
        $('.insta-box').removeClass('display');
      }, 24000);

  }
  box();
  setInterval(function(){
      box()
  }, 56100);



  // function box() {
  //   setTimeout(function () {
  //     $('.blog-box').addClass('display');
  //   }, 12000);
  //   setTimeout(function () {
  //     $('.blog-box').removeClass('display');
  //   }, 20000);
  //   setTimeout(function () {
  //     $('.insta-box').addClass('display');
  //   }, 24000);
  //   setTimeout(function () {
  //     $('.insta-box').removeClass('display');
  //   }, 32000);
  // } 
  // box();
  // setInterval(function(){
  //   box()
  // }, 32100);

 
  setTimeout(function () {
    $('.page .first-type').typed({
      strings: ["We are serious about"],
      typeSpeed: 20,
      // time before typing starts
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // callback: function(){ foo(); },
    });
  }, 1000);

  setTimeout(function () {
    $('.job .first-type-job').typed({
      strings: ["HEY! ARE YOU READY TO JOIN US IN A"],
      typeSpeed: 20,
      // time before typing starts
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // callback: function(){ foo(); },
    });
  }, 1000);

});




/*= Sentence Slider
-----------------------------------------------------------------------------*/    
AcSentenceSlider = (function() {
  var $ = jQuery;


  function AcSentenceSlider(elem, options) 
  {
    this.$wrap = $(elem);
    this.$items = this.$wrap.find('.ac-sentence');
    this.currIdx = -1;
    this.init_delay = (options.init_delay ? options.init_delay : 0);
    this.height = 0;
    this.timeout = null;
    
    this.init();
  }    

  
  AcSentenceSlider.prototype.init = function()
  {
    var _ctx = this;
    
    $(window).on('resize', function() {
      _ctx.resize();
    });
    _ctx.resize();
    
    setTimeout(function() {
      _ctx.slide();
    }, _ctx.init_delay);
  }
  
  
  AcSentenceSlider.prototype.slide = function()
  {
    var _ctx = this;
    var newIdx = (_ctx.currIdx + 1) % _ctx.$items.size();
    var $newItem = _ctx.$items.eq(newIdx);
    var delay = parseInt( $newItem.attr('data-delay') );
    
    _ctx.$items.filter('.active, .init').stop().animate({opacity: 0}, 400, function() {
      _ctx.$items.removeClass('active init');
      $newItem.addClass('active');
      $newItem.stop().animate({opacity: 1}, 1200);
      _ctx.currIdx = newIdx;
    });
    
    _ctx.timeout = setTimeout(function() {
      _ctx.slide();
    }, delay);
  }  
  
  
  AcSentenceSlider.prototype.resize = function()
  {
    var _ctx = this;
    var maxh = 0;
    
    _ctx.$items.each(function() {
      var $item = $(this);
      var h = $item.height();
      
      if (h > maxh) {
        maxh = h;
      }
      _ctx.height = maxh;
    });
    _ctx.$wrap.css('height', maxh+'px');
  }
  
  
  return AcSentenceSlider;
})();  



