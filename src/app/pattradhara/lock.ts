import localFont from "next/font/local";

export const lockFont = localFont({
    src: [
      {
        path: '../../../public/fonts/Lock.ttf',
        weight: '400',
        style: 'normal',
      },
    ],
    display: 'swap',
  });