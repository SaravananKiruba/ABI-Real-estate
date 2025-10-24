export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Brand Colors
        brand: {
          coral: '#D97D55',      // Primary accent - warm coral
          cream: '#F4E9D7',      // Light background - warm cream
          sage: '#B8C4A9',       // Secondary - soft sage green
          teal: '#6FA4AF',       // Tertiary - calm teal
        },
        // Legacy colors (kept for backward compatibility)
        primary: '#6FA4AF',      // Using teal as primary
        secondary: '#D97D55',    // Using coral as secondary
        accent: '#B8C4A9',       // Using sage as accent
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(111, 164, 175, 0.15)',
        'elegant-hover': '0 8px 30px rgba(217, 125, 85, 0.25)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6FA4AF 0%, #B8C4A9 100%)',
        'gradient-warm': 'linear-gradient(135deg, #D97D55 0%, #F4E9D7 100%)',
        'gradient-cool': 'linear-gradient(135deg, #6FA4AF 0%, #F4E9D7 100%)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
