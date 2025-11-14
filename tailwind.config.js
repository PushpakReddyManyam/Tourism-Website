module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trust and depth for primary actions
        primary: {
          DEFAULT: "#0891B2", // cyan-600
          50: "#ECFEFF", // cyan-50
          100: "#CFFAFE", // cyan-100
          200: "#A5F3FC", // cyan-200
          300: "#67E8F9", // cyan-300
          400: "#22D3EE", // cyan-400
          500: "#06B6D4", // cyan-500
          600: "#0891B2", // cyan-600
          700: "#0E7490", // cyan-700
          800: "#155E75", // cyan-800
          900: "#164E63", // cyan-900
        },
        // Secondary Colors - Premium accent for special experiences
        secondary: {
          DEFAULT: "#7C3AED", // violet-600
          50: "#F5F3FF", // violet-50
          100: "#EDE9FE", // violet-100
          200: "#DDD6FE", // violet-200
          300: "#C4B5FD", // violet-300
          400: "#A78BFA", // violet-400
          500: "#8B5CF6", // violet-500
          600: "#7C3AED", // violet-600
          700: "#6D28D9", // violet-700
          800: "#5B21B6", // violet-800
          900: "#4C1D95", // violet-900
        },
        // Accent Colors - Emotional highlights and inspiration moments
        accent: {
          DEFAULT: "#EC4899", // pink-500
          50: "#FDF2F8", // pink-50
          100: "#FCE7F3", // pink-100
          200: "#FBCFE8", // pink-200
          300: "#F9A8D4", // pink-300
          400: "#F472B6", // pink-400
          500: "#EC4899", // pink-500
          600: "#DB2777", // pink-600
          700: "#BE185D", // pink-700
          800: "#9D174D", // pink-800
          900: "#831843", // pink-900
        },
        // Background Colors
        background: "#FFFFFF", // white - Clean canvas for content focus
        surface: "#F8FAFC", // slate-50 - Subtle card elevation and sections
        
        // Text Colors
        text: {
          primary: "#0F172A", // slate-900 - Maximum readability for body content
          secondary: "#64748B", // slate-500 - Clear hierarchy without harsh contrast
        },
        
        // Status Colors
        success: "#059669", // emerald-600 - Booking confirmations and positive feedback
        warning: "#D97706", // amber-600 - Travel advisories and important notices
        error: "#DC2626", // red-600 - Form validation with helpful guidance
        
        // Neutral Colors
        neutral: {
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      backgroundImage: {
        'gradient-wanderlust-ocean': 'linear-gradient(135deg, #0891B2 0%, #7C3AED 100%)',
        'gradient-wanderlust-sunset': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
        'gradient-hero-overlay': 'linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}