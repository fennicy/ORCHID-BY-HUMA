/**
 * Orchid by Huma - Main JavaScript & Lightbox Functionality
 */
document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  var navToggle = document.querySelector('.mobile-nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.backgroundColor = '#1A1816';
        nav.style.padding = '1.5rem';
        nav.style.borderBottom = '1px solid #2C2723';
      }
    });
  }

  // Authentic Gallery Lightbox
  var galleryItems = document.querySelectorAll('.gallery-item');
  var lightbox = document.getElementById('orchidLightbox');
  var lightboxImg = document.getElementById('orchidLightboxImg');
  var lightboxCaption = document.getElementById('orchidLightboxCaption');
  var lightboxClose = document.getElementById('orchidLightboxClose');

  if (galleryItems.length && lightbox && lightboxImg) {
    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        var caption = item.getAttribute('data-caption') || (img ? img.getAttribute('alt') : '');
        var fullSrc = item.getAttribute('data-full') || (img ? img.src : '');

        if (fullSrc) {
          lightboxImg.src = fullSrc;
          lightboxImg.alt = caption;
          if (lightboxCaption) {
            lightboxCaption.textContent = caption;
          }
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
});
