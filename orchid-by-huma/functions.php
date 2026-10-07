<?php
/**
 * Orchid by Huma - Functions and Definitions
 *
 * @package Orchid_By_Huma
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function orchid_by_huma_setup() {
    // Make theme available for translation.
    load_theme_textdomain('orchid-by-huma', get_template_directory() . '/languages');

    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Set standard image sizes.
    set_post_thumbnail_size(1200, 800, true);
    add_image_size('orchid-hero', 1920, 1080, true);
    add_image_size('orchid-editorial', 1000, 1250, true);
    add_image_size('orchid-card', 800, 500, true);
    add_image_size('orchid-gallery', 800, 1000, true);

    // Register primary and footer navigation menus.
    register_nav_menus([
        'primary' => __('Primary Navigation', 'orchid-by-huma'),
        'footer'  => __('Footer Navigation', 'orchid-by-huma'),
    ]);

    // Switch default core markup to output valid HTML5.
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ]);

    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');
}
add_action('after_setup_theme', 'orchid_by_huma_setup');

/**
 * Enqueue scripts and styles.
 */
function orchid_by_huma_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'orchid-google-fonts',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
        [],
        null
    );

    // Main Theme Stylesheet
    wp_enqueue_style(
        'orchid-style',
        get_stylesheet_uri(),
        [],
        '1.0.0'
    );

    // Main Compiled Custom Styles
    wp_enqueue_style(
        'orchid-main-css',
        get_template_directory_uri() . '/assets/css/main.css',
        ['orchid-style'],
        '1.0.0'
    );

    // Theme JS & Lightbox
    wp_enqueue_script(
        'orchid-main-js',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'orchid_by_huma_scripts');

/**
 * Safe Image Helper to return theme asset URL
 *
 * @param string $filename The image filename in assets/images/
 * @return string Full URL to image
 */
function orchid_image_url($filename) {
    return esc_url(get_template_directory_uri() . '/assets/images/' . $filename);
}

/**
 * Safe Image Tag Renderer with responsive attributes
 *
 * @param string $filename
 * @param string $alt
 * @param string $class
 * @param array $args
 * @return string HTML img tag
 */
function orchid_render_image($filename, $alt = '', $class = '', $args = []) {
    $url = orchid_image_url($filename);
    $loading = isset($args['loading']) ? $args['loading'] : 'lazy';
    $fetchpriority = isset($args['fetchpriority']) ? $args['fetchpriority'] : '';
    $width = isset($args['width']) ? $args['width'] : '';
    $height = isset($args['height']) ? $args['height'] : '';

    $html = '<img src="' . $url . '" alt="' . esc_attr($alt) . '"';
    if ($class) {
        $html .= ' class="' . esc_attr($class) . '"';
    }
    if ($loading && $fetchpriority !== 'high') {
        $html .= ' loading="' . esc_attr($loading) . '"';
    }
    if ($fetchpriority) {
        $html .= ' fetchpriority="' . esc_attr($fetchpriority) . '"';
    }
    if ($width) {
        $html .= ' width="' . esc_attr($width) . '"';
    }
    if ($height) {
        $html .= ' height="' . esc_attr($height) . '"';
    }
    $html .= ' />';

    return $html;
}

/**
 * Business information helper constant
 */
function orchid_business_info($key = '') {
    $info = [
        'name'          => 'Orchid by Huma',
        'address'       => '1105 S Mason Rd, Katy, TX 77450',
        'phone_display' => '(281) 206-0151',
        'phone_raw'     => '+12812060151',
        'alt_phone'     => '(713) 933-4009',
        'email'         => 'orchbyhuma@gmail.com',
        'hours_week'    => 'Monday – Saturday: 10:00 AM – 6:30 PM',
        'hours_sun'     => 'Sunday: 12:00 PM – 5:00 PM',
        'rating'        => '4.8 ★ Google Rating',
        'instagram'     => 'https://www.instagram.com/orchidbyhuma/',
        'booking_url'   => home_url('/appointment/'),
    ];

    if ($key && isset($info[$key])) {
        return $info[$key];
    }
    return $info;
}
