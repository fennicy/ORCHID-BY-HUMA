<?php
/**
 * Template Name: Gallery Page
 *
 * @package Orchid_By_Huma
 */

get_header();
?>

<div class="container" style="padding-top: 4rem; padding-bottom: 2rem;">
  <span class="kicker">Visual Showcase</span>
  <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem;">
    Authentic Orchid by Huma Gallery
  </h1>
  <p style="color: var(--orchid-text-muted); max-width: 640px; font-size: 1.05rem;">
    Authentic photographs of the actual Orchid by Huma salon and spa interior in Katy, Texas. Click any photo to expand in full-screen lightbox.
  </p>
</div>

<section class="gallery-section" style="padding-top: 2rem;">
  <div class="container">
    <div class="gallery-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      
      <!-- Authentic Photo 1: Spa Treatment Room -->
      <div class="gallery-item"
           data-full="<?php echo esc_url(orchid_image_url('spa-treatment-room.jpg')); ?>"
           data-caption="Orchid by Huma spa treatment room in Katy Texas">
        <?php
        echo orchid_render_image(
            'spa-treatment-room.jpg',
            'Orchid by Huma spa treatment room in Katy Texas',
            '',
            ['loading' => 'eager', 'width' => 800, 'height' => 1000]
        );
        ?>
        <div class="gallery-overlay">
          <span class="gallery-overlay-caption">Spa &amp; Treatment Sanctuary</span>
          <h3 class="gallery-overlay-title">Treatment Bed &amp; Mirror Suite</h3>
        </div>
      </div>

      <!-- Authentic Photo 2: Salon Interior / Hair Area -->
      <div class="gallery-item"
           data-full="<?php echo esc_url(orchid_image_url('salon-interior-hair.jpg')); ?>"
           data-caption="Orchid by Huma salon interior in Katy Texas">
        <?php
        echo orchid_render_image(
            'salon-interior-hair.jpg',
            'Orchid by Huma salon interior in Katy Texas',
            '',
            ['loading' => 'eager', 'width' => 800, 'height' => 1000]
        );
        ?>
        <div class="gallery-overlay">
          <span class="gallery-overlay-caption">Styling Studio</span>
          <h3 class="gallery-overlay-title">Hair Equipment &amp; Wall Art Area</h3>
        </div>
      </div>

      <!-- Authentic Photo 3: Reception & Salon Area -->
      <div class="gallery-item"
           data-full="<?php echo esc_url(orchid_image_url('orchid-reception-salon.jpg')); ?>"
           data-caption="Orchid by Huma beauty salon interior in Katy Texas">
        <?php
        echo orchid_render_image(
            'orchid-reception-salon.jpg',
            'Orchid by Huma beauty salon interior in Katy Texas',
            '',
            ['loading' => 'eager', 'width' => 800, 'height' => 1000]
        );
        ?>
        <div class="gallery-overlay">
          <span class="gallery-overlay-caption">Reception &amp; Service</span>
          <h3 class="gallery-overlay-title">Orchid Branding &amp; Welcome Lounge</h3>
        </div>
      </div>

      <!-- Authentic Photo 4: Hair Wash & Styling Area -->
      <div class="gallery-item"
           data-full="<?php echo esc_url(orchid_image_url('hair-wash-styling.jpg')); ?>"
           data-caption="Orchid by Huma hair wash and styling area in Katy Texas">
        <?php
        echo orchid_render_image(
            'hair-wash-styling.jpg',
            'Orchid by Huma hair wash and styling area in Katy Texas',
            '',
            ['loading' => 'eager', 'width' => 800, 'height' => 1000]
        );
        ?>
        <div class="gallery-overlay">
          <span class="gallery-overlay-caption">Hair Spa Station</span>
          <h3 class="gallery-overlay-title">Shampoo Basin &amp; Styling Sink</h3>
        </div>
      </div>

    </div>
  </div>
</section>

<?php
get_footer();
