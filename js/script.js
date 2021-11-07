
window.addEventListener('DOMContentLoaded', function () {

  window.onresize = function(){window.location.reload();}
  // dropdown ******************************************************************************

  document.querySelectorAll('.art-menu__btn').forEach(function(el) {
   el.addEventListener('click', dropdown);
  })
  function dropdown(e) {
    var listElem = document.getElementsByClassName('art-menu__btn');
    listElem.forEach(el => {
      el.classList.remove('dropdown')
    })
    e.target.classList.toggle('dropdown');
  }

  window.onclick = function(event) {
    if (!event.target.matches('.art-menu__btn')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('dropdown')) {
          openDropdown.classList.remove('dropdown');
        }
      }
    }
  }

  // hero slider ******************************************************************************

  var heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    allowTouchMove: false,

    autoplay: {
      delay: 2000,
    },
  })

  const defaultSelect = () => {
    const gal = document.querySelector('.galery-select');
    const choices = new Choices (gal, {
      searchEnabled: false,
      shouldSort: false,
    });
  };

  defaultSelect ();

  const multiDefault = () => {
    const publ = document.querySelectorAll('.publ-select');
    publ.forEach (pb => {
      const choices = new Choices (pb, {
        searchEnabled: false,
        shouldSort: false,
      });
    })
  }

  multiDefault ();

// galery slider ******************************************************************************

var galerySwiper = new Swiper('.galery-swiper', {
  grabCursor: true,
  autoHeight: false,

  breakpoints: {
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1325: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30
    },

    1584: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  grid: {
    rows: 2,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // mousewheel: {
  //   sensitivity: 1,
  //   eventsTarget: ".galery-swiper",
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  a11y: {
    enabled: true,
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
    firstSlideMessage: 'это первый слайд',
    lastSlideMessage: 'это последний слайд',
    notificationClass: 'swiper-notification',
  }
})

//TABS country ******************************************************************************

document.querySelectorAll('.country__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll('.artists__accordion').forEach(function(tabContent) {
      tabContent.classList.remove('artist__acc__active')
      tabContent.classList.add('visually-hidden')
      tabContent.classList.add('tab-hidden')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('artist__acc__active')
    document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden')
    document.querySelector(`[data-target="${path}"]`).classList.remove('tab-hidden')
  })
})

document.querySelectorAll('.country__btn').forEach(function(e2) {
  e2.addEventListener('click', btnvisit);
 })
 function btnvisit(e) {
   var btn = document.getElementsByClassName('country__btn');
   btn.forEach(e2 => {
     e2.classList.remove('country__btn__visited')
   })
   e.target.classList.toggle('country__btn__visited');
 }

//TABS artists ******************************************************************************

document.querySelectorAll('.artist__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event2) {
    const path = event2.currentTarget.dataset.path

    document.querySelectorAll('.artist__tab').forEach(function(tabContent) {
      tabContent.classList.remove('artist__tab__active')
      tabContent.classList.add('visually-hidden')
      tabContent.classList.add('tab-hidden')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('artist__tab__active')
    document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden')
    document.querySelector(`[data-target="${path}"]`).classList.remove('tab-hidden')
  })
})

document.querySelectorAll('.artist__btn').forEach(function(e2) {
  e2.addEventListener('click', btn2visit);
 })
 function btn2visit(e) {
   var btn = document.getElementsByClassName('artist__btn');
   btn.forEach(e2 => {
     e2.classList.remove('artist__btn__visited')
   })
   e.target.classList.toggle('artist__btn__visited');
 }

//Accordion artists ******************************************************************************

$( ".artists__accordion" ).accordion({
  collapsible: true,
  // active: false,
  heightStyle: "content",
});

//events btn *************************************************************************************

document.querySelector('.events__btn').addEventListener('click', function(e) {
  document.querySelectorAll('.event-cards__item').forEach(function(e3) {
    e3.style.display = "flex";
  })
  e.target.style.display = "none";
})

// event slider ******************************************************************************

var galerySwiper = new Swiper('.event-swiper', {
  loop: true,
  grabCursor: true,
  autoHeight: false,
  spaceBetween: 1,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".event-swiper"
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.event-pagination',
    type: 'bullets',
    clickable: true,
  },

  a11y: {
    enabled: true,
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
    firstSlideMessage: 'это первый слайд',
    lastSlideMessage: 'это последний слайд',
    notificationClass: 'swiper-notification',
  }
})

// publication slider ******************************************************************************

var galerySwiper = new Swiper('.books-swiper', {
  loop: true,
  grabCursor: true,
  autoHeight: false,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 49,
    },

    1215: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1510: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".books-swiper"
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },


  a11y: {
    enabled: true,
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
    firstSlideMessage: 'это первый слайд',
    lastSlideMessage: 'это последний слайд',
    notificationClass: 'swiper-notification',
  }
})

// tooltips ******************************************************************************

tippy('#tip1', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'tip-back',
  maxWidth: 264,
  offset: [0, 10],
});

tippy('#tip2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'tip-back',
  maxWidth: 264,
  offset: [0, 10],
});

tippy('#tip3', {
  content: 'В стремлении повысить качество',
  theme: 'tip-back',
  maxWidth: 264,
  offset: [0, 10],
});

// partners slider ******************************************************************************

document.querySelectorAll('.partners-swiper').forEach(function(elem) {
  new Swiper(elem, {
    loop: true,
    autoHeight: false,
    spaceBetween: 1,

    navigation: {
      nextEl: elem.nextElementSibling.nextElementSibling,
      prevEl: elem.nextElementSibling,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },

      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    mousewheel: {
      sensitivity: 1,
      eventsTarget: ".partners-swiper"
    },

    a11y: {
      enabled: true,
      prevSlideMessage: 'предыдущий слайд',
      nextSlideMessage: 'следующий слайд',
      firstSlideMessage: 'это первый слайд',
      lastSlideMessage: 'это последний слайд',
      notificationClass: 'swiper-notification',
    }
  });
});

// map ******************************************************************************

  ymaps.ready(init);

  var viewport = {
    width : $(window).width(),
    height : $(window).height()
  };
  var width = viewport.width;
  var height = viewport.height;

  if (width > 500) {
    var central = [55.75846306898368,37.601079499999905];
  } else {
  var central = [55.765120317972375,37.601079499999905];
  }

    function init() {
      var myMap = new ymaps.Map('map', {
        center: central,
        zoom: 14,
      });

      myMap.controls.remove('geolocationControl'); // удаляем геолокацию
      myMap.controls.remove('searchControl'); // удаляем поиск
      myMap.controls.remove('trafficControl'); // удаляем контроль трафика
      myMap.controls.remove('typeSelector'); // удаляем тип
      myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
      myMap.controls.remove('rulerControl'); // удаляем контрол правил
      myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      //на мобильных устройствах...
      if (width < 1025){
         //... отключаем перетаскивание карты
        myMap.behaviors.disable('drag');
      }

        // Создадим пользовательский макет ползунка масштаба.
        ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='map-btn'>" +
            "<div id='zoom-in' class='zoom-btn zoom-in'></div>" +
            "<div id='zoom-out' class='zoom-btn zoom-out'></div>" +
            "</div>", {

            // Переопределяем методы макета, чтобы выполнять дополнительные действия
            // при построении и очистке макета.
            build: function () {
                // Вызываем родительский метод build.
                ZoomLayout.superclass.build.call(this);

                // Привязываем функции-обработчики к контексту и сохраняем ссылки
                // на них, чтобы потом отписаться от событий.
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                // Начинаем слушать клики на кнопках макета.
                $('#zoom-in').bind('click', this.zoomInCallback);
                $('#zoom-out').bind('click', this.zoomOutCallback);
            },

            clear: function () {
                // Снимаем обработчики кликов.
                $('#zoom-in').unbind('click', this.zoomInCallback);
                $('#zoom-out').unbind('click', this.zoomOutCallback);

                // Вызываем родительский метод clear.
                ZoomLayout.superclass.clear.call(this);
            },

            zoomIn: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
            },

            zoomOut: function () {
                var map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
            }
        }),

      zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});
      myMap.controls.add(zoomControl, {
        float: 'none',
        position: {
        bottom: '362px',
        right: '12px'
        }
      });

      // Создадим пользовательский макет ползунка масштаба.
      GeolocationLayout = ymaps.templateLayoutFactory.createClass("<div class='map-btn'>" +
      "<div id='geo' class='geo-btn'></div>" +
      "</div>", {

      // Переопределяем методы макета, чтобы выполнять дополнительные действия
      // при построении и очистке макета.
      build: function () {
          // Вызываем родительский метод build.
          GeolocationLayout.superclass.build.call(this);

          // Привязываем функции-обработчики к контексту и сохраняем ссылки
          // на них, чтобы потом отписаться от событий.
          this.GeolocationCallback = ymaps.util.bind(this.Geo, this);

          // Начинаем слушать клики на кнопках макета.
          $('#geo').bind('click', this.GeolocationCallback);
      },

      clear: function () {
          // Снимаем обработчики кликов.
          $('#geo').unbind('click', this.GeolocationCallback);

          // Вызываем родительский метод clear.
          GeolocationLayout.superclass.clear.call(this);
      },

      Geo: function () {
          var map = this.getData().control.getMap();
          ymaps.geolocation.get({
            // Выставляем опцию для определения положения по ip
            provider: 'yandex',
            // Карта автоматически отцентрируется по положению пользователя.
            mapStateAutoApply: true
        }).then(function (result) {
            myMap.geoObjects.add(result.geoObjects);
        });
      },
  }),

      geolocationControl = new ymaps.control.GeolocationControl({options: {layout: GeolocationLayout}});
      myMap.controls.add(geolocationControl, {
        float: 'none',
        position: {
        bottom: '310px',
        right: '13px'
        }
  });

      var myPlacemark = new ymaps.Placemark([55.765120317972375,37.59596184519949], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-mark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
      });

      myMap.geoObjects.add(myPlacemark);
}

  // mask

  var selector = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  // validate

  new JustValidate('.callback__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue ()
          return Number(phone) && phone.length===10
        }
      },
    },

    tooltip: {
      fadeOutTime: 2000 // default value - 5000
  },

  messages: {
    name: {
        required: 'Обязательное поле',
        minLength: 'Минимум 2 символа'
    },

    tel: 'Укажите номер телефона'
 },
  });

// burger enter/close menu ******************************************************************************

  const body = document.querySelector('.body');
  const burger = document.querySelector('.burger');
  const close = document.querySelector('.mobile-menu__close');
  const menu = document.querySelector('.mobile-menu');

  function showMenu() {
    menu.classList.add('menu--showed');
    body.classList.add('is-menu-open');
  };

  function closeMenu() {
    menu.classList.remove('menu--showed')
    body.classList.remove('is-menu-open');
  };

  burger.addEventListener('click', showMenu);
  close.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-nav__link').forEach(function(closel) {
    closel.addEventListener('click', closeMenu2);
   })
   function closeMenu2(e) {
     var listElem2 = document.getElementsByClassName('menu--showed');
     listElem2.forEach(e4 => {
       body.classList.remove('is-menu-open');
       e4.classList.remove('menu--showed')
     })
   };

// search field enter/close ******************************************************************************

  const searchForm = document.querySelector('.search__wrap');
  const searchOpen = document.querySelector('.search__btn--open');
  const searchClose = document.querySelector('.search__btn--close');
  const logo = document.querySelector('.header__logo');
  const topCont = document.querySelector('.header-top__container');

  function showSearch() {
    searchForm.classList.add('is-search-open');
    searchClose.classList.add('is-search-open');
    topCont.classList.add('is-search-open');
    burger.classList.add('is-hidden');
    logo.classList.add('is-hidden');
    searchOpen.classList.add('is-hidden')
  };

  function closeSearch() {
    searchForm.classList.remove('is-search-open');
    searchClose.classList.remove('is-search-open');
    topCont.classList.remove('is-search-open');
    burger.classList.remove('is-hidden');
    logo.classList.remove('is-hidden');
    searchOpen.classList.remove('is-hidden')
  };

  searchOpen.addEventListener('click', showSearch);
  searchClose.addEventListener('click', closeSearch);

// publication filter mobile ******************************************************************************

  const spoiler = document.querySelector('.filter-spoiler__title');
  const spoilerWrap = document.querySelector('.filter-spoiler__wrap');

  function showSpoiler() {
    spoilerWrap.classList.toggle('spoiler--shown');
    spoiler.classList.toggle('spoiler--shown')
  };

  spoiler.addEventListener('click', showSpoiler);

  document.querySelectorAll('.filter__label').forEach(function(sp) {
    sp.addEventListener('click', spoilerActive);
  })

    function spoilerActive(e) {
     var spoiler = document.getElementsByClassName('filter__label');
    };

  document.querySelectorAll('.filter__label').forEach (function(filter) {
    filter.addEventListener('click', function(active) {
      this.closest('.check__wrap').classList.add ('is-shown');
     })
  })

  document.querySelectorAll('.filter-close__btn').forEach (function(hidden) {
    hidden.addEventListener('click', function(hidden) {
      this.closest('.check__wrap').classList.remove('is-shown')
    })
  })

// modal ******************************************************************************

  var modalButtons  = document.querySelectorAll('.modal__open'),
       overlay      = document.querySelector('#overlay-modal'),
       closeButtons = document.querySelector('.js-modal-close');

   modalButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
         modalElem.classList.add('active');
         overlay.classList.add('active');
         body.classList.add('is-popup-open');
      }); // end click
   }); // end foreach

   var ov  = document.querySelector('.overlay');

  ov.addEventListener('click', function() {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    body.classList.remove('is-popup-open');
  });

  document.querySelectorAll('.popup-close__btn').forEach (function(e) {
    e.addEventListener('click', function(close) {
      this.closest('.modal').classList.remove ('active');
      ov.classList.remove('active');
      body.classList.remove('is-popup-open');
     })
  })

// scroll ******************************************************************************

if (document.documentElement.clientWidth < 1024) {

document.querySelectorAll('.artist__btn').forEach (function(scroll) {
  scroll.addEventListener('click', function(scroll) {
    var scrolTo= document.querySelector('.artist__tab__active');
  scrolTo.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
    })
   })
})
}
});

