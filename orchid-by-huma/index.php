<?php
/**
 * Orchid by Huma - Index Template
 *
 * @package Orchid_By_Huma
 */

get_header();
?>

<div class="container" style="padding: 4rem 1.25rem;">
  <?php if (have_posts()) : ?>
    <h1 class="font-serif" style="font-size: 3rem; margin-bottom: 2rem;">
      <?php single_post_title(); ?>
    </h1>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
      <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('service-card'); ?> style="padding: 2rem;">
          <h2 class="font-serif" style="font-size: 1.75rem; margin-bottom: 0.5rem;">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
          </h2>
          <div style="font-size: 0.8rem; color: var(--orchid-gold-dark); margin-bottom: 1rem;">
            <?php echo get_the_date(); ?>
          </div>
          <div style="font-size: 0.9rem; color: #5A534B; line-height: 1.6;">
            <?php the_excerpt(); ?>
          </div>
        </article>
      <?php endwhile; ?>
    </div>

    <div style="margin-top: 3rem;">
      <?php the_posts_pagination(); ?>
    </div>
  <?php else : ?>
    <h1 class="font-serif"><?php esc_html_e('Nothing Found', 'orchid-by-huma'); ?></h1>
    <p><?php esc_html_e('No content available.', 'orchid-by-huma'); ?></p>
  <?php endif; ?>
</div>

<?php
get_footer();
