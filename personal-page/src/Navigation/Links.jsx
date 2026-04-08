import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

export default function Links({ isDark, isUnlit }) {
  const lightMode = {
    background: '#ffffff',
    textDefault: '#000000',
    textHover: '#2b2b2b',
  };

  const unlitMode = {
    background: '#0f0f0f',
    textDefault: '#ffffff',
    textHover: '#f3f3f3',
  };

  const darkMode = {
    background: '#101010',
    textDefault: '#ffffff',
    textHover: '#f3f3f3',
  };

  const colors = isDark ? darkMode : isUnlit ? unlitMode : lightMode;
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = (linkId) => ({
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
    color: hoveredLink === linkId ? colors.textHover : colors.textDefault,
    transform: hoveredLink === linkId ? 'translateY(-1px)' : 'translateY(0)',
    transition: 'all 0.2s ease',
  });

  const iconContainerStyle = (linkId) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.8rem',
    height: '1.8rem',
    color: hoveredLink === linkId ? colors.textHover : colors.textDefault,
    transition: 'all 0.2s ease',
    flexShrink: 0,
  });

  const iconStyle = {
    fontSize: '1.2rem',
    transition: 'color 0.2s ease',
  };

  const links = [
    {
      id: 'github',
      label: 'Github',
      href: 'https://github.com/rmac-silva/',
      display: 'Github',
      ariaLabel: 'Go to my GitHub page',
      icon: GitHubIcon,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ricardo-silva-a1479739a/',
      display: 'LinkedIn',
      ariaLabel: 'Go to my LinkedIn page',
      icon: LinkedInIcon,
    },
    {
      id: 'email',
      label: 'Email Me',
      href: 'mailto:rmac.silva@campus.fct.unl.pt',
      display: 'Email Me',
      ariaLabel: 'Send me an email',
      icon: EmailIcon,
    },
    {
      id: 'discord',
      label: 'Discord',
      href: 'https://discord.com/users/249619725682868224',
      display: 'Discord',
      ariaLabel: 'Go to my Discord profile',
      icon: (props) => <i className="fa-brands fa-discord" style={{ ...props.style, color: 'inherit' }}></i>,
    },
    {
      id: 'kofi',
      label: 'Ko-fi',
      href: 'https://ko-fi.com/rmacsilva',
      display: 'ko-fi.com/rmacsilva',
      ariaLabel: 'Go to my Ko-fi page',
      icon: LocalCafeIcon,
    },
  ];

  return (
    <footer
      className="mt-auto w-full self-stretch"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-y-4 gap-x-6 md:gap-x-10 lg:gap-x-14">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.id}
                href={link.href}
                style={linkStyle(link.id)}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                onTouchStart={() => setHoveredLink(link.id)}
                onTouchEnd={() => setHoveredLink(null)}
                aria-label={link.ariaLabel}
                className="min-w-0 px-1 py-1 text-sm sm:text-[0.9rem] md:text-[0.95rem]"
                onFocus={() => setHoveredLink(link.id)}
                onBlur={() => setHoveredLink(null)}
                title={link.display}
              >
                <div style={iconContainerStyle(link.id)}>
                  <Icon style={iconStyle} />
                </div>

                <div className="flex min-w-0 flex-col leading-tight">
                  <span className="truncate font-medium">
                    {link.display}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}