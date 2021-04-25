$(document).ready(function() {
  //Hot deals
  $('.left-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    dots: false,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  //New_Latest_products
  $('.new_latest_product').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    dots: false,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  })

  // Featured Products
  $('.featured_product').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    dots: false,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })

  // Both row moves with one button
  var o1 = $('.first-slider'),
    o2 = $('.second-slider');
  o1.on('click', '.owl-next', function() {
    o2.trigger('next.owl.carousel')
  });
  o1.on('click', '.owl-prev', function() {
    o2.trigger('prev.owl.carousel')
  })

  // Sponsors
  $('.sponsors-slider').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

})
