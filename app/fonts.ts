import localFont from 'next/font/local';

export const studioFeixenSans = localFont({
  src: [

    {
      path: '../public/TTF/StudioFeixenSansRegular-latin-v2.woff2',
      weight: '100 900',
      style: 'normal',
    }
  ],
  variable: '--font-studio-feixen-sans',
  display: 'swap',
});

