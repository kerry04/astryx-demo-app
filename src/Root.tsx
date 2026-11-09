import {useState} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {sokoTheme} from './soko-theme';
import App from './App';

/**
 * App root: holds the light/dark mode state above the Astryx Theme provider.
 * SokoResult is dark by default, so the demo starts dark.
 */
export default function Root() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  return (
    <Theme theme={sokoTheme} mode={mode}>
      <App
        mode={mode}
        onToggleMode={() => setMode(m => (m === 'dark' ? 'light' : 'dark'))}
      />
    </Theme>
  );
}
