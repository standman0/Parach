import localFont from 'next/font/local';

export const cabinetGrotesk = localFont({
  src: [
    {
      path: '../public/TTF/CabinetGrotesk-Variable.ttf',
      weight: '100 900',
      style: 'normal',
    }
  ],
  variable: '--font-cabinet-grotesk',
  display: 'swap',
});