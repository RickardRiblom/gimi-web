(function e (t, n, r) { function s (o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require === 'function' && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = 'MODULE_NOT_FOUND', f } var l = n[o] = {exports: {}}; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n || e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require === 'function' && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({1: [function (require, module, exports) {
  'use strict'

  var jquery = require('./components/jquery')
  var flipclock = require('./components/flipclock')
  var owlcarousel = require('./components/owlcarousel')
  var modernizr = require('./components/modernizr')
  var countup = require('./components/countup')
  var wow = require('./components/wow')

  var veckopengen = {}

// Remove is-loading class when page is loaded.
  $(window).on('load', function () {})

  $(document).ready(function () {
    veckopengen.counter.init()
    veckopengen.navigation.init()
    veckopengen.pigBankAnimation.init()
    veckopengen.footerQuote.init()
    veckopengen.heroHeader.init()
    veckopengen.progressScroll.init()
    veckopengen.saveObjectiveSlider.init()
    veckopengen.tabs.init()
    veckopengen.timeline.init()
    veckopengen.walletAnimation.init()
    veckopengen.landingScrollButton.init()
    veckopengen.videoPlayer.init()
    veckopengen.wow.init()
    veckopengen.quickTips.init()
    veckopengen.faqAccordion.init()
    veckopengen.siteHeader.init()
    veckopengen.current.init()

    window.setTimeout(function () {
      $('body').removeClass('is-loading')
    }, 100)

    $(document).foundation()

    $('a[href="#ex1"]').click(function (event) {
      event.preventDefault()
      $('#snapModal').foundation('reveal', 'open')
    })
  })

  veckopengen.siteHeader = {
    init: function init () {
      var $siteHeader = $('.site-header'),
        siteHeaderHeight = $siteHeader.height() * 3,
        $window = $(window),
        $body = $('body'),
        delta = 5,
        lastScrollTop = 0,
        onScroll = function onScroll () {
          $body.toggleClass('scroll', $window.scrollTop() > siteHeaderHeight)

          if ($window.width() > 767) {
            hasScrolled()
          }
        },
        hasScrolled = function hasScrolled () {
          var st = $window.scrollTop()
            // Make sure they scroll more than delta
          if (Math.abs(lastScrollTop - st) <= delta) return

          if (st > lastScrollTop && st > siteHeaderHeight) {
                // Scroll Down
            $('.site-header').addClass('hidden')
          } else {
                // Scroll Up
            if (st + $(window).height() < $(document).height()) {
              $('.site-header').removeClass('hidden')
            }
          }
          lastScrollTop = st
        }

      onScroll()
      $window.on('scroll', onScroll)
    }
  }

  veckopengen.counter = {

    init: function init () {
      if ($('.counter').length) {
        this.counter()
      }

      if ($('.footer-counter').length) {
        this.footerCounter()
      }
    },

    counter: function counter () {
      var funfairStartingValue = Math.round(counterValue / 1000)
      var consoleStartingValue = Math.round(counterValue / 2000)
      var footballStartingValue = Math.round(counterValue / 100)

      var animOptions = {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: '.',
        prefix: '',
        suffix: ''
      }

      var funfairAnim = new CountUp('funfairNumber', 0, funfairStartingValue, 0, 3, animOptions)
      var consolesAnim = new CountUp('consolesNumber', 0, consoleStartingValue, 0, 3, animOptions)
      var ballsAnim = new CountUp('ballsNumber', 0, footballStartingValue, 0, 3, animOptions)

      $(window).scroll(function (e) {
            // Start counter animation if in viewport:
        if (isElementInViewport($('#consolesNumber'))) {
          consolesAnim.start()
        }

        if (isElementInViewport($('#funfairNumber'))) {
          funfairAnim.start()
        }

        if (isElementInViewport($('#ballsNumber'))) {
          ballsAnim.start()
        }
      })

      var counter = $('.counter').FlipClock(counterValue, {
        clockFace: 'Counter',
        minimumDigits: 9
      })

      setTimeout(function () {
        setInterval(function () {
          counterValue = counterValue + 4
          counter.setValue(counterValue)

          var funfairValue = Math.round(counterValue / 1000),
            consolesValue = Math.round(counterValue / 2000),
            ballsValue = Math.round(counterValue / 100)

          funfairAnim.update(funfairValue)
          consolesAnim.update(consolesValue)
          ballsAnim.update(ballsValue)
        }, 4000)
      })

      function isElementInViewport (el) {
            // special bonus for those using jQuery
        if (typeof jQuery === 'function' && el instanceof jQuery) {
          el = el[0]
        }

        var rect = el.getBoundingClientRect()
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
      }
    },
    footerCounter: function footerCounter () {
      var footerCounter = $('.footer-counter').FlipClock(footerCounterValue, {
        clockFace: 'Counter',
        minimumDigits: 9
      })

      setTimeout(function () {
        setInterval(function () {
          footerCounterValue = footerCounterValue + 8
          footerCounter.setValue(footerCounterValue)
        }, 2000)
      })
    }
  }

  veckopengen.landingScrollButton = {
    init: function init () {
      $('#slideDown').click(function (e) {
        e.preventDefault()
        $('html,body').animate({
          scrollTop: $('.features').offset().top
        }, 'slow')
      })
    }
  }

  veckopengen.navigation = {
    init: function init () {
      var _base = this
      $('.nav-toggle').click(function () {
        $('.nav-menu').slideToggle()
        $('.nav-toggle').toggleClass('nav-active')
      })
    }
  }

  veckopengen.pigBankAnimation = {

    init: function init () {
      if ($('.pigbank-anim').length) {
        this.setbehaviour()
      }
    },

    setbehaviour: function setbehaviour () {
      var owl = $('.pigbank-anim')
      owl.owlCarousel({
        singleItem: true,
        navigation: false,
        pagination: false,
        mouseDrag: false,
        touchDrag: false,
        slideSpeed: 500
      })

      var clicks = 2
      var value = 50
      $('.pigbank-anim').find('.anim-1').addClass('no-sleep')
      $('.anim').removeClass('no-anim')
      $('.pigbank-anim').find('.anim-1.frame-1').removeClass('frame-1').addClass('frame-2')

      $('#pig-minus-button').on('touchstart click', function (e) {
        e.preventDefault()

        $('.anim').removeClass('no-anim')

        if (clicks == 1) {
          $(this).closest('.feature').find('.anim-1').removeClass('no-sleep')
          value = 0
        } else if (clicks == 2) {
          $(this).closest('.feature').find('.anim-1.frame-2').removeClass('frame-2').addClass('frame-1')
          value = 25
          owl.trigger('owl.goTo', 0)
          $('.anim').addClass('no-anim')
        } else if (clicks == 2) {
          $(this).closest('.feature').find('.anim-1.frame-2').removeClass('frame-2').addClass('frame-1')
          $(this).closest('.feature').find('.anim-2.frame-2').removeClass('frame-2').addClass('frame-1')

          owl.trigger('owl.goTo', 0)
          value = 25
        } else if (clicks == 3) {
          $(this).closest('.feature').find('.anim-2.frame-2').removeClass('frame-2').addClass('frame-1')
          owl.trigger('owl.goTo', 0)
          value = 50
        } else if (clicks == 4) {
          $(this).closest('.feature').find('.anim-3.frame-2').removeClass('frame-2').addClass('frame-1')

          owl.trigger('owl.goTo', 1)
          value = 135
        } else if (clicks == 5) {
        $(this).closest('.feature').find('.anim-4.frame-2').removeClass('frame-2').addClass('frame-1')

        owl.trigger('owl.goTo', 2)
        value = 270
      } else if (clicks == 6) {
        $(this).closest('.feature').find('.anim-5.frame-2').removeClass('frame-2').addClass('frame-1')

        value = 540
        owl.trigger('owl.goTo', 3)
      } else if (clicks > 6) {
            value = value - 20
          }

        if (clicks > 0) {
          clicks = clicks - 1
        }

        $(this).closest('.feature').find('.pig-value span').text(value)
      })

      $('#pig-plus-button').on('touchstart click', function (e) {
        e.preventDefault()

        if (clicks == 0) {
                // $(this).closest('.feature').find('.anim-1').removeClass('no-sleep');
          $(this).closest('.feature').find('.anim-1').addClass('no-sleep')
          value = 25
        }

        $('.anim').removeClass('no-anim')

        if (clicks == 1) {
          value = 50
          $(this).closest('.feature').find('.anim-1.frame-1').removeClass('frame-1').addClass('frame-2')
        } else if (clicks == 2) {
          value = 135
          $(this).closest('.feature').find('.anim-2.frame-1').removeClass('frame-1').addClass('frame-2')
          owl.trigger('owl.goTo', 1)
        } else if (clicks == 3) {
          value = value * 2
          $(this).closest('.feature').find('.anim-3.frame-1').removeClass('frame-1').addClass('frame-2')
          owl.trigger('owl.goTo', 2)
        } else if (clicks == 4) {
          value = value * 2
          $(this).closest('.feature').find('.anim-4.frame-1').removeClass('frame-1').addClass('frame-2')
          owl.trigger('owl.goTo', 3)
        } else if (clicks == 5) {
          value = value * 2
          $(this).closest('.feature').find('.anim-5.frame-1').removeClass('frame-1').addClass('frame-2')
          owl.trigger('owl.goTo', 4)
        } else if (clicks > 5) {
        value = 0
        clicks = -1
        owl.trigger('owl.goTo', 0)
        $(this).closest('.feature').find('.anim-5.frame-2').removeClass('frame-2').addClass('frame-1')
        $(this).closest('.feature').find('.anim-4.frame-2').removeClass('frame-2').addClass('frame-1')
        $(this).closest('.feature').find('.anim-3.frame-2').removeClass('frame-2').addClass('frame-1')
        $(this).closest('.feature').find('.anim-2.frame-2').removeClass('frame-2').addClass('frame-1')
        $(this).closest('.feature').find('.anim-1.frame-2').removeClass('frame-2').addClass('frame-1')
        $(this).closest('.feature').find('.anim-1').removeClass('no-sleep')
        $('.anim').addClass('no-anim')
      }

        $(this).closest('.feature').find('.pig-value span').text(Math.round(value))

        clicks = clicks + 1
      })
    }
  }

  veckopengen.footerQuote = {

    init: function init () {
      $('.footer-carousel').owlCarousel({
        autoPlay: 5000,
        slideSpeed: 300,
        singleItem: true,
        navigation: true,
        pagination: false,
        touchDrag: true,
        mouseDrag: true,
        navigationText: ["<img src='/themes/veckopengen/assets/images/arrow-left.png'>", "<img src='/themes/veckopengen/assets/images/arrow-right.png'>"]
      })
    }
  }

  veckopengen.heroHeader = {

    init: function init () {
      $('.landing-hero-bg-slider').owlCarousel({
        autoPlay: 8000,
        slideSpeed: 2000,
        paginationSpeed: 2000,
        singleItem: true,
        navigation: false,
        pagination: false,
        touchDrag: false,
        mouseDrag: false
      })

      $('.landing-hero-content-slider').owlCarousel({
        autoPlay: 8000,
        slideSpeed: 2000,
        paginationSpeed: 2000,
        singleItem: true,
        navigation: false,
        pagination: false,
        touchDrag: false,
        mouseDrag: false
      })

      $('.equal-height').matchHeight({
        byRow: 0
      })
    }
  }

  veckopengen.progressScroll = {

    init: function init () {
      if ($('.why-save-money__progress').length) {
        this.setbehaviour()
      }
    },

    setbehaviour: function setbehaviour () {
      $(window).scroll(function (e) {
        var el = $('.why-save-money__progress')[0]
        var rect = el.getBoundingClientRect()
        var clientHeight = window.innerHeight || document.documentElement.clientHeight
        var height = rect.bottom - rect.top

        var value = -((rect.bottom - clientHeight) / (clientHeight - height)) * 100 | 0
        var percent = Math.min(Math.max(value, 0), 100) + '%'

        $('.progress-bar').css('height', percent)
        $('.progress-percent').text(percent)
      })
    }
  }

  veckopengen.saveObjectiveSlider = {

    init: function init () {
      if ($('.save-objective__slider').length) {
        this.setbehaviour()
      }
    },

    setbehaviour: function setbehaviour () {
      var owl = $('.save-objective__slider')
      owl.owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: false,
        slideSpeed: 500,
        afterAction: owlInformation,
        navigationText: ["<img src='/themes/veckopengen/assets/images/arrow-left.png'>", "<img src='/themes/veckopengen/assets/images/arrow-right.png'>"]
      })

      function owlInformation () {
        var currentItem = this.owl.currentItem
        if (currentItem === 0) {
          $('.save-objective__progress-bar').css('width', '33%')
        } else if (currentItem === 1) {
          $('.save-objective__progress-bar').css('width', '57%')
        } else if (currentItem === 2) {
          $('.save-objective__progress-bar').css('width', '100%')
        }
      }
    }
  }

  veckopengen.tabs = {

    init: function init () {
      if ($('.tips-tabs').length) {
        this.setbehaviour()
      }
    },

    setbehaviour: function setbehaviour () {
      $('#tips-tabs a').each(function (index, value) {
        var element = $(value)

        element.on('click', function (event) {
          event.preventDefault()

          var buttons = $('#tips-tabs a')

          if (index !== 0) {
            $(buttons[0]).removeClass('tips-tabs__tab--active')
          }

          if (index !== 1) {
            $(buttons[1]).removeClass('tips-tabs__tab--active')
          }

          if (index !== 2) {
            $(buttons[2]).removeClass('tips-tabs__tab--active')
          }

          $(buttons[index]).addClass('tips-tabs__tab--active')

          $('#tips-tab-content-' + ((index + 1) % 3 + 1)).hide()
          $('#tips-tab-content-' + ((index + 2) % 3 + 1)).hide()
          $('#tips-tab-content-' + ((index + 3) % 3 + 1)).show()
        })
      })
    }
  }

  veckopengen.timeline = {

    init: function init () {
      if ($('.why-timeline').length) {
        this.setbehaviour()
      }
    },

    setbehaviour: function setbehaviour () {
      var _base = this,
        owl = $('.owl-carousel'),
        is_safari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1

      if ($('html.touch').length > 0 || is_safari) {
            // Disable transitionStyle on mobile and on safari.
        owl.owlCarousel({
                // transitionStyle: "backSlide",
          singleItem: true,
          navigation: false,
          pagination: false,
          afterAction: afterAction,
          slideSpeed: 500
        })
      } else {
        owl.owlCarousel({
          transitionStyle: 'backSlide',
          singleItem: true,
          navigation: false,
          pagination: false,
          afterAction: afterAction,
          slideSpeed: 500
        })
      }

      var owlContext = owl.data('owlCarousel')

      $('.point-1, .point-1:before').click(function (e) {
        e.preventDefault()
        addAnimation(0)
        owl.trigger('owl.goTo', 0)
      })

      $('.point-2, .point-2:before').click(function (e) {
        e.preventDefault()
        addAnimation(1)

        owl.trigger('owl.goTo', 1)
      })

      $('.point-3, .point-3:before').click(function (e) {
        e.preventDefault()
        addAnimation(2)

        owl.trigger('owl.goTo', 2)
      })

      $('.point-4, .point-4:before').click(function (e) {
        e.preventDefault()
        addAnimation(3)

        owl.trigger('owl.goTo', 3)
      })

      $('.point-5, .point-5:before').click(function (e) {
        e.preventDefault()
        addAnimation(4)

        owl.trigger('owl.goTo', 4)
      })

      $('.point-6, .point-6:before').click(function (e) {
        e.preventDefault()
        addAnimation(5)

        owl.trigger('owl.goTo', 5)
      })

      var owlContext = owl.data('owlCarousel')

      $('.timeline-prev').click(function (e) {
        e.preventDefault()
        owl.trigger('owl.prev')
      })

      $('.timeline-next').click(function (e) {
        e.preventDefault()
        owl.trigger('owl.next')
      })

      function addAnimation (nextSlide) {
        var currentSlide = owlContext.currentItem

        if (currentSlide > nextSlide) {
          owlContext.transitionTypes('backSlideReverse')
        } else {
          owlContext.transitionTypes('backSlide')
        }
      }

      function afterAction () {
        $('.timeline-point').removeClass('active')
        $('.point-' + (this.owl.currentItem + 1)).addClass('active')
      }
    }
  }

  veckopengen.quickTips = {
    init: function init () {
      if ($('.quick-tips').length) {
        this.setbehaviour()
      }
    },

    setbehaviour: function setbehaviour () {
      var _base = this
      var owl = $('.owl-carousel')

      if ($('html.touch').length > 0) {
            // Disable transitionStyle on mobile.
        owl.owlCarousel({
          singleItem: true,
          slideSpeed: 500,
          navigation: false,
          pagination: false
        })
      } else {
        owl.owlCarousel({
          transitionStyle: 'backSlide',
          singleItem: true,
          slideSpeed: 500,
          navigation: false,
          pagination: false
        })
      }

      var owlContext = owl.data('owlCarousel')

      $('.quick-tips-prev').click(function (e) {
        e.preventDefault()
        owlContext.transitionTypes('backSlideReverse')
        owl.trigger('owl.prev')
      })

      $('.quick-tips-next').click(function (e) {
        e.preventDefault()
        owlContext.transitionTypes('backSlide')
        owl.trigger('owl.next')
      })
    }
  }

  veckopengen.faqAccordion = {
    init: function init () {
      if ($('.feature__faqs').length) {
        this.setbehaviour()
      }
    },

    setbehaviour: function setbehaviour () {
      $('.feature__faqs').on('click', '.feature__faq-toggle-trigger', function () {
        $(this).parent('.feature__faq').toggleClass('out').find('.feature__faq-toggle').slideToggle(200)
      })
    }
  }

  veckopengen.videoPlayer = {
    init: function init () {
      var _base = this
      $('.open-movie a').click(function (e) {
        e.preventDefault()
        $('.video-player').fadeIn()

        var vid = document.getElementById('veckopengen-video')
        vid.play()
      })

      $('.close-video').click(function (e) {
        e.preventDefault()
        $('.video-player').fadeOut()

        var vid = document.getElementById('veckopengen-video')
        vid.pause()
        vid.currentTime = 0
      })
    }
  }

  veckopengen.walletAnimation = {

    init: function init () {
      if ($('.feature.veckopengen').length) {
        this.setbehaviour()
      }
    },

    setbehaviour: function setbehaviour () {
      var coins = 0.1
      var coinValue = 25
      numberOfCoins(coins)

      function numberOfCoins (value) {
        var originalValue = value

        for (var i = 1; i <= 6; i++) {
          if (value >= 6 - i + 1) {
            $('.anim-7 .money:nth-child(' + i + ')').css({
              left: (766 + 26 / 5 * (6 - i)) / (1596 / 100) + '%',
              top: (334 + i * 10) / (1192 / 100) + '%',
              transform: 'rotate(' + -((6 - i) * 2 + 2) + 'deg)'
            })
          } else {
            $('.anim-7 .money:nth-child(' + i + ')').css({ left: '', top: '', transform: '' })
          }
        }

        value = Math.abs(Math.floor(value) - value)
        for (var i = 17; i >= 9; i--) {
          var f = (i - 9) / 3 * 2
          f -= value * Math.PI * 2
          f -= Math.PI
          var s = Math.sin(f)
          var c = Math.cos(f)
          var ox = 0
          var oy = 0

          var j = (i - 1) % 9
          if (j > originalValue * 10) {
            s = -Math.PI / 2
            c = -Math.PI / 2
            ox = -100
            oy = 50
          }
                /*
                 if (s < 0) {
                 s = -Math.PI / 2;
                 c = -Math.PI / 2;
                 ox = -100;
                 oy = 50;
                 }
                 */

          $('.anim-7 .coin:nth-child(' + (17 - i + 9) + ')').css({
            left: (s * 140 + 100 + 1032 + ox) / (1596 / 100) + '%',
            top: (c * 140 + 100 + 632 + oy) / (1192 / 100) + '%'
          })
        }
      }

      $('#wallet-minus-button').on('touchstart click', function (e) {
        e.preventDefault()
        if (coins >= 0.2) {
          coins -= 1 / 10
          numberOfCoins(coins)
          coinValue = coinValue - 5
          $(this).closest('.feature').find('.wallet-value span').text(coinValue)
        }
      })

      $('#wallet-plus-button').on('touchstart click', function (e) {
        e.preventDefault()
        coins += 1 / 10
        numberOfCoins(coins)
        coinValue = coinValue + 5
        $(this).closest('.feature').find('.wallet-value span').text(coinValue)
      })
    }

  }

  veckopengen.wow = {
    init: function init () {
      this.setbehaviour()
    },

    setbehaviour: function setbehaviour () {
      var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 50,
        mobile: true,
        live: false
      })
      wow.init()
    }
  }

  veckopengen.current = {
    init: function init () {
      $('.current-single-share__link').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        window.open(url, 'share', 'width=640,height=320')
      })
    }
  }
}, {'./components/countup': 2, './components/flipclock': 3, './components/jquery': 4, './components/modernizr': 5, './components/owlcarousel': 6, './components/wow': 7}],
  2: [function (require, module, exports) {
    'use strict'

    module.exports = window.countup
  }, {}],
  3: [function (require, module, exports) {
    'use strict'

    module.exports = window.flipclock
  }, {}],
  4: [function (require, module, exports) {
    'use strict'

    module.exports = window.jQuery
  }, {}],
  5: [function (require, module, exports) {
    'use strict'

    module.exports = window.modernizr
  }, {}],
  6: [function (require, module, exports) {
    'use strict'

    module.exports = window.owlcarousel
  }, {}],
  7: [function (require, module, exports) {
    'use strict'

    module.exports = window.wow
  }, {}]}, {}, [1])

// # sourceMappingURL=app.js.map
