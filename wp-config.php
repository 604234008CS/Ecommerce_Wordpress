<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '30Y76iS=J8NR^M*b=& *@tT!Mw8@ZuRfP8j~>PVY/Oyw[C!RVCYxXc0T[BpM^2KX' );
define( 'SECURE_AUTH_KEY',  '=7zHnr{R`rDl#q-) bkP<MA+{@n&wyB?MLYK,6rpV4^`ENZ>p=#=K1wT&}$n#IkR' );
define( 'LOGGED_IN_KEY',    'cc/StEq=9-k0`RP}14?`-O${<%CI!|O}d8h}c4&l,!-70D=YGj%!unMcm)W<{vuk' );
define( 'NONCE_KEY',        'n>~d:Xx>>M$>I&jy]madya=Gnd]A+NP92HvM`&sN[Fu pnI{^Ec)}Q(KwGj7%|a(' );
define( 'AUTH_SALT',        'nYO_1+]j&PvE[G8a6UQ8GVy9uiIC3R9&j% ,WjAXug#C&m:,^9o@/eSpHs$3y!pm' );
define( 'SECURE_AUTH_SALT', '6O{kH)$,|,PCeXdt;0IL%^[H%%o*`GepH1|Jf;S{9{+{gz~ rE}XLMH]9wU%v&Bb' );
define( 'LOGGED_IN_SALT',   'AdVm`DEVox>1nX?*dgO@RJ~G/6EX~1*9UgO1 }PhT !K%3x7XclH.]7]A)EOV:C=' );
define( 'NONCE_SALT',       ')CcC:E:wEIxbn^ix>JH)OJi:)l3DT6Y05=1p2u)nYU#NF2D}Pn@IAEdD`j&PM=5y' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
