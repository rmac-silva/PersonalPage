import { useState } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Links({ isDark, isUnlit }) {
  const lightMode = {
    background: '#ffffff',
    textDefault: '#000000',
    textHover: '#2c2c2c',
    paperBg: 'rgba(245, 245, 245, 0.7)',
    svgPath1: '#c49ef3',
    svgPath2: '#dcaff7',
    svgPath3: '#eeb58f',
    svgPath4: '#f8ceb6',
  };

  const unlitMode = {
        background: '#2b2b2b',
        textDefault: '#0c0c0c',
        textHover: '#e2914e',
        paperBg: 'transparent',
        svgPath1: '#6b3fa0',
        svgPath2: '#8b5fbf',
        svgPath3: '#9d6b2f',
        svgPath4: '#b8895f',
    }

  const darkMode = {
    background: '#1a1a1a',
    textDefault: '#ffffff',
    textHover: '#ffcfa8',
    paperBg: 'rgba(30, 30, 30, 0.7)',
    svgPath1: '#6b3fa0',
    svgPath2: '#8b5fbf',
    svgPath3: '#9d6b2f',
    svgPath4: '#b8895f',
  };

  const colors = isDark ? darkMode : isUnlit ? unlitMode : lightMode;
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = (linkId) => ({
    fontWeight: 700,
    display: 'inline-block',
    textDecorationThickness: '0px',
    color: hoveredLink === linkId ? colors.textHover : colors.textDefault,
    transform: hoveredLink === linkId ? 'translateY(-4px)' : 'translateY(0)',
    transition: 'all 0.2s ease',
  });

  const iconStyle = {
    fontSize: '2rem',
    color: colors.textDefault, // keep icon color consistent with current theme
    transition: 'color 0.2s ease',
  };

  return (
    <div className="flex flex-row flex-wrap mt-15 text-4xl space-x-20" style={{ color: colors.textDefault }}>
      <div className="flex flex-row leading-relaxed whitespace-pre-wrap transition-all duration-200 ease-in-out">
        Github{'   '}
        <a
          href="https://github.com/rmac-silva/"
          style={linkStyle('github')}
          onMouseEnter={() => setHoveredLink('github')}
          onMouseLeave={() => setHoveredLink(null)}
          aria-label="Go to my github page"
        >
          rmac-silva
        </a>
        <ArrowOutwardIcon className="ml-1 mt-1" style={iconStyle} />
      </div>

      <div className="flex flex-row leading-relaxed whitespace-pre-wrap transition-all duration-200 ease-in-out">
        LinkedIn{'   '}
        <a
          href="https://www.linkedin.com/in/ricardo-silva-a1479739a/"
          style={linkStyle('linkedin')}
          onMouseEnter={() => setHoveredLink('linkedin')}
          onMouseLeave={() => setHoveredLink(null)}
          aria-label="Go to my linkedin page"
        >
          @rmac-silva
        </a>
        <ArrowOutwardIcon className="ml-1 mt-1" style={iconStyle} />
      </div>

      <div className="flex flex-row leading-relaxed whitespace-pre-wrap transition-all duration-200 ease-in-out">
        Leave a tip{'   '}
        <a
          href="https://ko-fi.com/rmacsilva"
          style={linkStyle('kofi')}
          onMouseEnter={() => setHoveredLink('kofi')}
          onMouseLeave={() => setHoveredLink(null)}
          aria-label="Go to my Ko-fi page"
        >
          ko-fi/rmac-silva
        </a>
        <ArrowOutwardIcon className="ml-1 mt-1" style={iconStyle} />
      </div>

      <div className="flex flex-row leading-relaxed whitespace-pre-wrap transition-all duration-200 ease-in-out">
        Discord{'   '}
        <a
          href="https://discord.com/users/249619725682868224"
          style={linkStyle('discord')}
          onMouseEnter={() => setHoveredLink('discord')}
          onMouseLeave={() => setHoveredLink(null)}
          aria-label="Contact me on Discord"
        >
          @gilbio
        </a>
        <ArrowOutwardIcon className="ml-1 mt-1" style={iconStyle} />
      </div>
    </div>
  );
}