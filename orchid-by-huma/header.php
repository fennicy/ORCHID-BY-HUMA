<?php
/**
 * Orchid by Huma - Header Template
 *
 * @package Orchid_By_Huma
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container">
    <div class="site-header-inner">
      <div class="site-brand">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="site-title">
          Orchid By Huma
        </a>
        <span class="site-tagline">Luxury Salon &amp; Spa · Katy, TX</span>
      </div>

      <nav class="site-nav" aria-label="<?php esc_attr_e('Main Navigation', 'orchid-by-huma'); ?>">
        <a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'orchid-by-huma'); ?></a>
        <a href="<?php echo esc_url(home_url('/about/')); ?>"><?php esc_html_e('About', 'orchid-by-huma'); ?></a>
        <a href="<?php echo esc_url(home_url('/services/')); ?>"><?php esc_html_e('Services', 'orchid-by-huma'); ?></a>
        <a href="<?php echo esc_url(home_url('/gallery/')); ?>"><?php esc_html_e('Gallery', 'orchid-by-huma'); ?></a>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact', 'orchid-by-huma'); ?></a>
      </nav>

      <div class="header-cta-group">
        <a href="tel:<?php echo esc_attr(orchid_business_info('phone_raw')); ?>" class="btn btn-outline" style="display: none;" id="headerCallBtn">
          <span><?php echo esc_html(orchid_business_info('phone_display')); ?></span>
        </a>
        <a href="<?php echo esc_url(orchid_business_info('booking_url')); ?>" class="btn btn-primary">
          <span><?php esc_html_e('Book Appointment', 'orchid-by-huma'); ?></span>
        </a>
        <button class="mobile-nav-toggle" aria-expanded="false" aria-label="<?php esc_attr_e('Toggle Menu', 'orchid-by-huma'); ?>">
          ☰
        </button>
      </div>
    </div>
  </div>
</header>
<main id="primary-content" class="site-main">
