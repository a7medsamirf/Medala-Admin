/*************************************

Template Name: Medala Admin | Personal Portfolio HTML5 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Medala Admin | Personal Portfolio HTML5 Template
Version: 1.2

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/

(function ($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarCollapse").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });


  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

  $('body').bootstrapMaterialDesign();


  $('.fixed-menu .show').on('click', function () {

    $(this).parent('.fixed-menu').toggleClass('is-visible');

    if ($(this).parent('.fixed-menu').hasClass('is-visible')) {

      $(this).parent('.fixed-menu').animate({

        right: 0

      }, 500);

      $('body').animate({

        paddingright: '250px'

      }, 50);
    } else {

      $(this).parent('.fixed-menu').animate({

        right: '-250px'

      }, 700);

      $('body').animate({

        paddingright: 0

      }, 500);

    }
  });


  /////// Change Colors

$('.sidebar-bg li').on('click', function () {
        
  $('body').attr('data-default-color', $(this).data('color'));

});  



    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('body').toggleClass('night')
        $('.card').toggleClass('night')
        $('.bg-white').toggleClass('night')
        $('.fixed-menu').toggleClass('night')

    });

})(jQuery); // End of use strict


