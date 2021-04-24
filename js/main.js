$(document).ready(function() {
  //Hot deals
  $('.left-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    navSpeed: 1500,
    dots: false,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
    navSpeed: 1500,
    dots: false,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
    navSpeed: 1500,
    dots: false,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
