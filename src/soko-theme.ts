import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral/built';

/**
 * SokoResult theme for Astryx.
 *
 * Extends the neutral theme and overrides only the semantic tokens, so every
 * Astryx component keeps its behaviour and the SokoResult look comes from the
 * picked 36-screen board: dark #07070D, violet #5B3BFF, YES mint #3BE3A8,
 * NO tomato #FF7461, light #F6F5F9, Inter. Token values are [light, dark].
 */
export const sokoTheme = defineTheme({
  extends: neutralTheme,
  name: 'soko',
  tokens: {
    // Surfaces — dark ground is the board's #07070D, light ground #F6F5F9.
    '--color-background-body': ['#F6F5F9', '#07070D'],
    '--color-background-surface': ['#FFFFFF', '#0F0F1A'],
    '--color-background-card': ['#FFFFFF', '#0F0F1A'],
    '--color-background-popover': ['#FFFFFF', '#171724'],
    '--color-background-muted': ['#5B36D614', '#5B3BFF1F'],

    // Text.
    '--color-text-primary': ['#131318', '#F6F5F9'],
    '--color-text-secondary': ['#55555F', '#A8A8B8'],
    '--color-icon-primary': ['#131318', '#F6F5F9'],
    '--color-icon-secondary': ['#55555F', '#A8A8B8'],

    // Accent — Soko violet. Light uses the board's #5B36D6, dark #5B3BFF.
    '--color-accent': ['#5B36D6', '#5B3BFF'],
    '--color-accent-muted': ['#5B36D633', '#5B3BFF3D'],
    '--color-on-accent': ['#FFFFFF', '#FFFFFF'],
    '--color-text-accent': ['#5B36D6', '#8F7BFF'],
    '--color-icon-accent': ['#5B36D6', '#5B3BFF'],

    // YES mint #3BE3A8. Strong fills need a deeper mint on light for contrast.
    '--color-success': ['#0B8A5F', '#3BE3A8'],
    '--color-text-success': ['#0B7A55', '#3BE3A8'],
    '--color-on-success': ['#FFFFFF', '#07070D'],
    '--color-success-muted': ['#3BE3A833', '#3BE3A83D'],
    '--color-on-success-muted': ['#0B7A55', '#3BE3A8'],
    '--color-border-success': ['#0B8A5F', '#3BE3A8'],

    // NO tomato #FF7461. Same treatment: deeper on light, pure on dark.
    '--color-error': ['#D63E2C', '#FF7461'],
    '--color-text-error': ['#C22E1F', '#FF7461'],
    '--color-on-error': ['#FFFFFF', '#07070D'],
    '--color-error-muted': ['#FF746133', '#FF74613D'],
    '--color-on-error-muted': ['#C22E1F', '#FF7461'],
    '--color-border-error': ['#D63E2C', '#FF7461'],

    // Borders.
    '--color-border': ['#1313181F', '#F6F5F91F'],
    '--color-border-emphasized': ['#9AA0AB', '#3A3A48'],

    // Hue tokens, so purple/green/red variants read as Soko violet/mint/tomato.
    '--color-background-purple': ['#5B36D633', '#5B3BFF33'],
    '--color-border-purple': ['#5B36D6', '#5B3BFF'],
    '--color-icon-purple': ['#5B36D6', '#8F7BFF'],
    '--color-text-purple': ['#4A2BB0', '#B3B0FE'],
    '--color-background-green': ['#3BE3A833', '#3BE3A833'],
    '--color-border-green': ['#0B8A5F', '#3BE3A8'],
    '--color-icon-green': ['#0B8A5F', '#3BE3A8'],
    '--color-text-green': ['#0B7A55', '#3BE3A8'],
    '--color-background-red': ['#FF746133', '#FF746133'],
    '--color-border-red': ['#D63E2C', '#FF7461'],
    '--color-icon-red': ['#D63E2C', '#FF7461'],
    '--color-text-red': ['#C22E1F', '#FF7461'],

    // Type — Inter, the board's face.
    '--font-family-body':
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    '--font-family-heading':
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
});
