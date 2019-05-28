<?php

/**
 * Creating the menu item
 *
 * @return void
 * @since 1.0
 */
function gaoop_admin_menu() {

	$hook = add_submenu_page( 'options-general.php', __( 'Analytics Opt-In/Out', 'google-analytics-opt-out' ), __( 'Analytics Opt-In/Out', 'google-analytics-opt-out' ), 'manage_options', 'gaoo-options', 'gaoop_settings_page' );
	add_action( "load-$hook", 'gaoop_settings_scripts' );

	$hook = add_submenu_page( 'monsterinsights_settings', __( 'Analytics Opt-In/Out', 'google-analytics-opt-out' ), __( 'Opt-In/Out Settings', 'google-analytics-opt-out' ), 'manage_options', 'gaoo-options', 'gaoop_settings_page' );
	add_action( "load-$hook", 'gaoop_settings_scripts' );
}

add_action( 'admin_menu', 'gaoop_admin_menu', 30 );


/**
 * Creating the settings page HTML output
 *
 * @return void
 * @since 1.0
 */
function gaoop_settings_page() {

	?>
    <div class="wrap">
        <h1><?php echo get_admin_page_title(); ?></h1>

        <p class="description"><?php
			printf(
				__( 'This plugin provides an Opt-Out and an Opt-In functionality for Google Analytics (Universal Tracking aka analytics.js and Global Site Tag aka gtag.js). You can show a banner to your users and/or you can use the following shortcode in any of your posts: %s. It integrates a link that allows a user to opt-out off or opt-in to Google Analytics. You can read more about the <a href="https://wp-buddy.com/documentation/plugins/google-analytics-opt/faq/#what-are-the-shortcodes-that-i-can-use" target="_blank">shortcodes here</a>.', 'google-analytics-opt-out' ),
				'<code>[google_analytics_optout]Your link text[/google_analytics_optout]</code>'
			); ?></p>

        <form action="<?php echo esc_url( admin_url( 'options.php' ) ); ?>" method="post">
			<?php
			settings_fields( 'gaoop_options_page' );
			do_settings_sections( 'gaoop_options_page' );
			submit_button();
			?>
        </form>
    </div>
	<?php
}


/**
 * Enqueues the settings page scripts and styles
 *
 * @return void
 * @since 1.0
 */
function gaoop_settings_scripts() {

	wp_enqueue_script( 'equipment', GAOOP_URL . '/js/settings.js', array( 'jquery' ), false, true );
}


/**
 * Registers Settings sections and fields
 *
 * @return void
 * @since 1.0
 */
function gaoop_register_theme_options_section() {

	add_settings_section( 'gaoop_settings_section', __( 'General Settings', 'google-analytics-opt-out' ), null, 'gaoop_options_page' );

	add_settings_field( 'gaoop_yoast', __( 'Use Monster Insights Settings', 'google-analytics-opt-out' ), 'gaoop_options_yoast', 'gaoop_options_page', 'gaoop_settings_section', array( 'label_for' => 'gaoop_options_yoast' ) );
	register_setting( 'gaoop_options_page', 'gaoop_yoast', 'intval' );

	add_settings_field( 'gaoop_property', __( 'UA- or GA-Code', 'google-analytics-opt-out' ), 'gaoop_options_property', 'gaoop_options_page', 'gaoop_settings_section', array( 'label_for' => 'gaoop_options_property' ) );
	register_setting( 'gaoop_options_page', 'gaoop_property', 'sanitize_text_field' );

	add_settings_field( 'gaoop_editor_button', __( 'Show Editor button (Classic Editor)', 'google-analytics-opt-out' ), 'gaoop_options_editor_button', 'gaoop_options_page', 'gaoop_settings_section', array( 'label_for' => 'gaoop_options_editor_banner' ) );
	register_setting( 'gaoop_options_page', 'gaoop_editor_button', 'intval' );

	add_settings_field( 'gaoop_mode', __( 'Mode', 'google-analytics-opt-out' ), 'gaoop_options_mode', 'gaoop_options_page', 'gaoop_settings_section', array( 'label_for' => 'gaoop_options_mode' ) );
	register_setting( 'gaoop_options_page', 'gaoop_mode', 'sanitize_text_field' );

	add_settings_section( 'gaoop_settings_section_opt_out', __( 'Banner & Messages', 'google-analytics-opt-out' ), null, 'gaoop_options_page' );

	add_settings_field( 'gaoop_opt_out_cookie_set_text', __( 'Opt-Out/Opt-In Successful', 'google-analytics-opt-out' ), 'gaoop_options_opt_out_cookie_set_text', 'gaoop_options_page', 'gaoop_settings_section_opt_out', array( 'label_for' => 'gaoop_options_opt_out_cookie_set_text' ) );
	register_setting( 'gaoop_options_page', 'gaoop_opt_out_cookie_set_text', 'sanitize_text_field' );

	add_settings_field( 'gaoop_banner', __( 'Use Banner', 'google-analytics-opt-out' ), 'gaoop_options_banner', 'gaoop_options_page', 'gaoop_settings_section_opt_out', array( 'label_for' => 'gaoop_options_banner' ) );
	register_setting( 'gaoop_options_page', 'gaoop_banner', 'intval' );

	add_settings_field( 'gaoop_opt_out_text', __( 'Opt-In/Out Banner-Text', 'google-analytics-opt-out' ), 'gaoop_options_opt_out_text', 'gaoop_options_page', 'gaoop_settings_section_opt_out', array( 'label_for' => 'gaoop_options_opt_out_text' ) );
	register_setting( 'gaoop_options_page', 'gaoop_opt_out_text', 'wp_kses_post' );

	add_settings_field( 'gaoop_opt_out_shortcode_integration', __( 'Integrate Shortcode', 'google-analytics-opt-out' ), 'gaoop_options_opt_out_shortcode_integration', 'gaoop_options_page', 'gaoop_settings_section_opt_out', array( 'label_for' => 'gaoop_options_opt_out_shortcode_integration' ) );
	register_setting( 'gaoop_options_page', 'gaoop_opt_out_shortcode_integration', 'sanitize_text_field' );

	add_settings_field( 'gaoop_hide', __( 'Hide banner after closing', 'google-analytics-opt-out' ), 'gaoop_options_hide', 'gaoop_options_page', 'gaoop_settings_section_opt_out', array( 'label_for' => 'gaoop_options_hide' ) );
	register_setting( 'gaoop_options_page', 'gaoop_hide', 'intval' );

	add_settings_field( 'gaoop_custom_styles', __( 'Custom CSS', 'google-analytics-opt-out' ), 'gaoop_options_custom_styles', 'gaoop_options_page', 'gaoop_settings_section_opt_out', array( 'label_for' => 'gaoop_options_custom_styles' ) );
	register_setting( 'gaoop_options_page', 'gaoop_custom_styles' );

}

add_action( 'admin_init', 'gaoop_register_theme_options_section' );


/**
 * Settings field for the Yoast Checkbox
 *
 * @return void
 * @since 1.0
 */
function gaoop_options_yoast() {

	$monster_insights_active = gaoop_monster_insights_plugin_active();

	$option = get_option( 'gaoop_yoast', null );

	// if the plugin is used the first time it has the value of NULL. In this case we set the option to 1
	if ( is_null( $option ) ) {
		$option = 1;
	}

	if ( ! $monster_insights_active ) {
		$option = 0;
	}

	echo '<input ' . disabled( ! $monster_insights_active, true, false ) . ' ' . checked( $option, 1, false ) . ' id="gaoop_options_yoast" type="checkbox" name="gaoop_yoast" value="1" />';
	echo '<p class="description">';
	if ( $monster_insights_active ) {
		echo '<span style="color: #5EB95E;">' . __( 'Monster Insights Plugin has been detected.', 'google-analytics-opt-out' ) . '</span>';
	} else {
		echo '<span style="color: #DD514C;">' . __( 'Monster Insights Plugin has NOT been detected. Please enter your UA- or GA-code manually and then check the sourcode of your website. Make sure that Analytics code appears AFTER the opt-out code (which starts with <code>/* Google Analytics Opt-Out</code>).', 'google-analytics-opt-out' ) . '</span>';
	}
	echo '</p>';
}


/**
 * Settings field for the UA property
 *
 * @return void
 * @since 1.0
 */
function gaoop_options_property() {

	$monster_insights_active = gaoop_monster_insights_plugin_active();
	$option                  = get_option( 'gaoop_yoast', null );

	if ( $monster_insights_active && 1 == $option ) {
		$value = gaoop_get_monster_insights_ua();
	} else {
		$value = sanitize_text_field( get_option( 'gaoop_property', '' ) );
	}

	echo '<input id="gaoop_options_property" placeholder="UA-XXXXXX-X | GA-XXXXXX-X" type="text" class="regular-text" value="' . $value . '" name="gaoop_property" /> ';

}


/**
 * Settings field for the banner checkbox
 *
 * @return void
 * @since 2.0.0
 */
function gaoop_options_banner() {

	$banner_active = (bool) get_option( 'gaoop_banner', false );

	echo '<input ' . checked( $banner_active, true, false ) . ' id="gaoop_options_banner" type="checkbox" name="gaoop_banner" value="1" />';
}


/**
 * Settings field for the banner checkbox
 *
 * @return void
 * @since 2.1.0
 */
function gaoop_options_editor_button() {

	$editor_button_active = (bool) get_option( 'gaoop_editor_button', false );

	echo '<input ' . checked( $editor_button_active, true, false ) . ' id="gaoop_options_editor_banner" type="checkbox" name="gaoop_editor_button" value="1" />';

	printf( '<p class="description">%s</p>', __( 'Some users reported problems with the editor button. So you can deactivate it here. Read more about the <a target="_blank" href="https://wp-buddy.com/documentation/plugins/google-analytics-opt/faq/#what-are-the-shortcodes-that-i-can-use">shortcodes</a> that can be used instead.', 'google-analytics-opt-out' ) );
}


/**
 * Settings field for the options mode.
 *
 * @return void
 * @since 2.3.0
 */
function gaoop_options_mode() {

	$mode = get_option( 'gaoop_mode', 'opt-out' );
	$mode = ! in_array( $mode, [ 'opt-in', 'opt-out' ] ) ? 'opt-out' : $mode;

	printf( '<p>%s<a href="#" data-mode="opt-in" class="gaoop-options-mode-link">%s</a> | ', 'opt-in' === $mode ? '<span class="dashicons dashicons-yes"></span>' : '', __( 'Opt-In', 'google-analytics-opt-out' ) );
	printf( '%s<a href="#" data-mode="opt-out" class="gaoop-options-mode-link">%s</a></p>', 'opt-out' === $mode ? '<span class="dashicons dashicons-yes"></span>' : '', __( 'Opt-Out', 'google-analytics-opt-out' ) );

	printf( '<input id="gaoop_options_mode" type="hidden" name="gaoop_mode" value="%s" />', esc_attr( $mode ) );

	printf( '<p class="description">%s</p>', __( 'Note that in "Opt-In"-Mode Google Analytics will not track anything!', 'google-analytics-opt-out' ) );
}


/**
 * Settings field for the UA property
 *
 * @return void
 * @since 1.0
 */
function gaoop_options_opt_out_text() {

	wp_editor(
		get_option( 'gaoop_opt_out_text', '' ),
		'gaoop_options_opt_out_text',
		array(
			'textarea_name' => 'gaoop_opt_out_text',
		)
	);

	printf( '<p class="description">%s</p>', __( 'Please integrate the shortcode so that the user can opt-out.', 'google-analytics-opt-out' ) );
}

/**
 * Set if the shortcode should be integrated automatically when it's not there.
 *
 * @since 1.4
 */
function gaoop_options_opt_out_shortcode_integration() {

	printf(
		'<input type="checkbox" id="gaoop_options_opt_out_shortcode_integration" value="1" name="gaoop_opt_out_shortcode_integration" %s />',
		checked( (bool) get_option( 'gaoop_opt_out_shortcode_integration', 1 ), true, false )
	);
	printf( '<p class="description">%s</p>', __( 'If the shortcode was not detected, it will be added automatically.', 'google-analytics-opt-out' ) );
}

/**
 * Successful Opt-Out Text
 *
 * @return void
 * @since 1.0
 */
function gaoop_options_opt_out_cookie_set_text() {

	echo '<input id="gaoop_options_opt_out_cookie_set_text" placeholder="' . esc_attr( gaoop_opt_out_cookie_set_text() ) . '" type="text" class="regular-text" value="' . sanitize_text_field( get_option( 'gaoop_opt_out_cookie_set_text', '' ) ) . '" name="gaoop_opt_out_cookie_set_text" /> ';
}

/**
 * Settings field for the Hide checkbox
 *
 * @return void
 * @since 1.0
 */
function gaoop_options_hide() {

	echo '<input type="checkbox" id="gaoop_options_hide" ' . checked( intval( get_option( 'gaoop_hide', 0 ) ), 1, false ) . ' value="1" name="gaoop_hide" /> ';
	echo '<p class="description">' . __( 'This will hide the opt-out box after the user has clicked the close-button. Otherwise a little info-button will be fixed to the bottom-right.', 'google-analytics-opt-out' ) . '</p>';

}

/**
 * Settings field for the custom CSS textarea
 *
 * @return void
 * @since 1.0
 */
function gaoop_options_custom_styles() {

	echo '<textarea id="gaoop_options_custom_styles" style="width: 400px;" cols="30" rows="5" class="regular-text" name="gaoop_custom_styles">' . esc_textarea( get_option( 'gaoop_custom_styles', '' ) ) . '</textarea> ';
}
