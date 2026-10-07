<?php
/**
 * Orchid by Huma - Generic Page Template
 *
 * @package Orchid_By_Huma
 */

get_header();
?>

<div class="container" style="padding: 4.5rem 1.25rem; max-width: 900px;">
  <?php while (have_posts()) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <header style="margin-bottom: 2.5rem; border-bottom: 1px solid var(--orchid-border); padding-bottom: 1.5rem;">
        <h1 class="font-serif" style="font-size: clamp(2.5rem, 5vw, 3.5rem); margin-bottom: 0.5rem;">
          <?php the_title(); ?>
        </h1>
      </header>

      <div class="entry-content" style="font-size: 1rem; line-height: 1.8; color: #3A352F;">
        <?php the_content(); ?>
      </div>
    </article>
  <?php endwhile; ?>
</div>

<?php
get_footer();
