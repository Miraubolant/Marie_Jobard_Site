import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
  darkMode: false, // Disabled dark mode
  content: [
    './resources/js/**/*.{ts,tsx,js,jsx}',
    './resources/views/**/*.edge',
    './app/**/*.{ts,js}', // Include backend files that might use Tailwind classes
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        '11.5': '2.85rem', // Positive spacing
        '-11.5': '-2.85rem', // Negative spacing
      },
      colors: {
        // Custom pastel colors for Marie Jobard - Palette claire
        terracotta: '#b68d7f', // Bordeaux doux/taupe rosé
        'terracotta-dark': '#9a736a', // Bordeaux plus foncé pour hover
        cream: '#faf8f5', // Crème très clair
        'cream-dark': '#f5f2ed', // Crème légèrement plus foncé
        'pastel-peach': '#f9e5d9', // Pêche très clair
        'pastel-rose': '#f2e1e4', // Rose très doux
        'pastel-blue': '#e8f1f5', // Bleu très clair
        'pastel-green': '#e8f0e8', // Vert menthe très doux
        'pastel-lavender': '#ebe7f0', // Lavande très clair

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        sidebar: {
          'DEFAULT': 'hsl(var(--sidebar-background))',
          'foreground': 'hsl(var(--sidebar-foreground))',
          'primary': 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          'accent': 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          'border': 'hsl(var(--sidebar-border))',
          'ring': 'hsl(var(--sidebar-ring))',
        },
      },
      fontFamily: {
        sans: ['Dosis', ...defaultTheme.fontFamily.sans],
        serif: ['Faustina', ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(0.9)' },
          '70%': { transform: 'scale(1.05)' },
        },
      },
      screens: {
        xs: '475px', // Additional small screen breakpoint
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
