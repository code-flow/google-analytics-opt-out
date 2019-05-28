<?php

/**
 * Echos the Javascript or returns it (if $echo is set to TRUE)
 *
 * @return void|string
 * @since 1.0
 *
 */
function gaoop_js() {

	$mode = get_option( 'gaoop_mode', 'opt-out' );

	$ua_code = gaoop_get_ua_code();
	if ( empty( $ua_code ) ) {
		return;
	}
	?>
    <script type="text/javascript">
        /* Google Analytics Opt-Out WordPress Plugin by WP-Buddy | https://wp-buddy.com/products/plugins/google-analytics-opt-out */
		<?php do_action( 'gaoop_js_before_script' ); ?>
		var gaoop_property    = '<?php echo esc_attr( $ua_code ); ?>';
		var gaoop_mode        = '<?php echo esc_attr( $mode ); ?>';
		var gaoop_disable_str = 'ga-disable-' + gaoop_property;
		var gaoop_enable_str  = 'ga-enable-' + gaoop_property;

        /* In 'opt-out'-mode we stop tracking if the opt-out cookie has been set */
		if ( 'opt-out' === gaoop_mode && document.cookie.indexOf( gaoop_disable_str + '=true' ) > -1 ) {
			window[ gaoop_disable_str ] = true;
		}

        /* In 'opt-in'-mode we always stop tracking but not if the user has opted-in */
		if ( 'opt-in' === gaoop_mode ) {
			window[ gaoop_disable_str ] = true;

			if ( document.cookie.indexOf( gaoop_enable_str + '=true' ) > -1 ) {
				window[ gaoop_disable_str ] = false;
			}
		}

		function gaoop_analytics_optout() {

			if ( 'opt-out' === gaoop_mode ) {
				document.cookie = gaoop_disable_str + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
				document.cookie = gaoop_enable_str + '=true; expires=Thu, 31 Dec 1999 23:59:59 UTC; path=/';
			} else {
				document.cookie = gaoop_enable_str + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
				document.cookie = gaoop_disable_str + '=true; expires=Thu, 31 Dec 1999 23:59:59 UTC; path=/';
			}

			<?php echo apply_filters( 'gaoop_cookie_set', '', $mode ); ?>
		}
		<?php
		do_action( 'gaoop_js_after_script' );
		?>
    </script>
	<?php
}

add_action( 'wp_head', 'gaoop_js', 0 );


/**
 * Enqueue Frontend Scripts
 *
 * @since 1.0
 */
function gaoop_enqueue_scripts() {

	wp_enqueue_script( 'goop', GAOOP_URL . 'js/frontend.js', array( 'jquery' ), false, true );

	add_filter( 'script_loader_tag', function ( $tag, $handle ) {

		if ( $handle === 'goop' && false === stripos( $tag, 'defer' ) ) {
			return str_replace( '<script', '<script defer ', $tag );
		}

		return $tag;
	}, 10, 2 );
}

add_action( 'init', 'gaoop_enqueue_scripts' );
