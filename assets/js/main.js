(function ($) {
  "use strict";
  $(function () {
    const body = $("body");
    const mainWrapper = $(".main-wrapper");
    const footer = $("footer");
    const sidebar = $(".sidebar");
    const navbar = $(".navbar").not(".top-navbar");
    const innerNav = $(".inner-nav .nav");
    const pageHamburger = $("page-hamburger");

    //   Initializing feather icon
    feather.replace();

    $("#page-hamburger").on("click", function (e) {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        $(".inner-nav").toggleClass("mobile");
      }
    });

    // initializing bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Applying perfect-scrollbar
    if ($(".sidebar .sidebar-body").length) {
      const sidebarBodyScroll = new PerfectScrollbar(".sidebar-body");
    }
    if ($(".content-nav-wrapper").length) {
      const contentNavWrapper = new PerfectScrollbar(".content-nav-wrapper");
    }

    // Sidebar toggle to sidebar-folded
    $(".sidebar-toggler:not(.mobile)").on("click", function (e) {
      $(this).toggleClass("is-active");
      // $(this).toggleClass('not-active');
      if (window.matchMedia("(min-width: 1025px)").matches) {
        e.preventDefault();
        body.toggleClass("sidebar-folded");
      } else if (window.matchMedia("(max-width: 767px)").matches) {
        e.preventDefault();
        body.toggleClass("sidebar-open");
      } else if (
        window.matchMedia("(min-width:768px) and (max-width: 1024px)").matches
      ) {
        e.preventDefault();
        body.toggleClass("sidebar-folded");
      }
    });

    $(".sidebar-toggler.mobile").on("click", function (e) {
      if (window.matchMedia("(max-width: 767px)").matches) {
        e.preventDefault();
        body.toggleClass("sidebar-open");
        $(this).toggleClass("is-active");
      }
    });

    // sidebar-folded on large devices
    function iconSidebar(e) {
      if (e.matches) {
        body.addClass("sidebar-folded");
      } else {
        body.removeClass("sidebar-folded");
      }
    }

    const mediumScreen = window.matchMedia(
      "(min-width:768px) and (max-width: 1024px)"
    );

    mediumScreen.addListener(iconSidebar);

    iconSidebar(mediumScreen);

    //  open sidebar-folded when hover
    $(".sidebar .sidebar-body").hover(
      function () {
        if (body.hasClass("sidebar-folded")) {
          body.addClass("open-sidebar-folded");
        }
      },
      function () {
        if (body.hasClass("sidebar-folded")) {
          body.removeClass("open-sidebar-folded");
        }
      }
    );

    $(" button.nav-toggler-close").on("click", function (e) {
      if ($("body").hasClass("sidebar-open")) {
        $("body").removeClass("sidebar-open");
      }
      if ($(".sidebar-toggler.mobile").hasClass("is-active")) {
        $(".sidebar-toggler.mobile").removeClass("is-active");
      }
    });

    // close sidebar when click outside on mobile/table
    $(document).on("click touchstart", function (e) {
      e.stopPropagation();

      // closing of sidebar menu when clicking outside of it
      if (!$(e.target).closest(".sidebar-toggler").length) {
        var sidebar = $(e.target).closest(".sidebar").length;
        var sidebarBody = $(e.target).closest(".sidebar-body").length;
        if (!sidebar && !sidebarBody) {
          if ($("body").hasClass("sidebar-open")) {
            $("body").removeClass("sidebar-open");
          }
          if ($(".sidebar-toggler.mobile").hasClass("is-active")) {
            $(".sidebar-toggler.mobile").removeClass("is-active");
          }
        }
      }

      // Toggling Inner Nav
      if (window.matchMedia("(max-width: 1024px)").matches) {
        if (!event.target.matches("#page-hamburger svg") ) {
          const dropdown = document.querySelector(".inner-nav");
          if (dropdown.classList.contains("mobile")) {
            dropdown.classList.remove("mobile");
          }
        }
      }
    });

    // initializing popover
    $('[data-toggle="popover"]').popover();

    //checkbox and radios
    $(".form-check label,.form-radio label").append(
      '<i class="input-frame"></i>'
    );

    //Horizontal menu in mobile
    $('[data-toggle="horizontal-menu-toggle"]').on("click", function () {
      $(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
    });
    // Horizontal menu navigation in mobile menu on click
    var navItemClicked = $(".horizontal-menu .page-navigation >.nav-item");
    navItemClicked.on("click", function (event) {
      if (window.matchMedia("(max-width: 991px)").matches) {
        if (!$(this).hasClass("show-submenu")) {
          navItemClicked.removeClass("show-submenu");
        }
        $(this).toggleClass("show-submenu");
      }
    });

    $(window).scroll(function () {
      if (window.matchMedia("(min-width: 1025px)").matches) {
        if ($(window).scrollTop() >= 56) {
          $(innerNav).addClass("fixed-on-scroll");
        } else {
          $(innerNav).removeClass("fixed-on-scroll");
        }
      }
    });
  });
})(jQuery);
