import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        pressstart: 'var(--font-press-start-2p)',
      },
      colors: {
        lightTitle: {
          100: '#B5E2F7',
          200: '#8FD5F3',
          300: '#6AC8EF',
          400: '#44BBEB',
          500: '#5DADE2',
          600: '#359CC2',
          700: '#2E86A7',
          800: '#27718B',
          900: '#205C6F',
        },
        darkBackground: {
          100: '#737579',
          200: '#5C5E63',
          300: '#44464D',
          400: '#2D2F37',
          500: '#1D1E22',
          600: '#1B1C20',
          700: '#18181C',
          800: '#141417',
          900: '#111012',
        },
        lightBackground: {
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FBFBFB',
          600: '#F9F9F9',
          700: '#F7F7F7',
          800: '#F5F5F5',
          900: '#F3F3F3',
        },
        darkDescription: {
          100: '#879BA9',
          200: '#728A9F',
          300: '#5D7894',
          400: '#496789',
          500: '#445964',
          600: '#3A4F5D',
          700: '#314551',
          800: '#283A45',
          900: '#1F303A',
        },
        lightDescription: {
          100: '#CAD0D5',
          200: '#B9C2C8',
          300: '#A8B5BE',
          400: '#97A8B3',
          500: '#A0A4A8',
          600: '#8F959B',
          700: '#7E878F',
          800: '#6D7A84',
          900: '#5C6C78',
        },
        textLight: {
          100: '#F2F2F2',
          200: '#E6E6E6',
          300: '#D9D9D9',
          400: '#CCCCCC',
          500: '#DFDFDF',
          600: '#C9C9C9',
          700: '#B4B4B4',
          800: '#9F9F9F',
          900: '#8A8A8A',
        },
        textDark: {
          100: '#536A7B',
          200: '#475B67',
          300: '#3B4C53',
          400: '#2F3D3F',
          500: '#263138',
          600: '#223033',
          700: '#1F282D',
          800: '#1C2127',
          900: '#181B22',
        },
      },
    },
  },
  plugins: [],
}
export default config
