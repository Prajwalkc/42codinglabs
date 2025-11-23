# 42 Coding Labs - Neon Purple Website

A modern, immersive neon purple website design for 42 Coding Labs. Built with Next.js 14 and Tailwind CSS.

## 🎨 Design Features

- **Dark futuristic background** (#0a0a0f)
- **Neon purple glow effects** on headings, borders, and buttons
- **Minimal, clean layout** with controlled glow effects
- **Responsive design** for all screen sizes
- **Smooth animations** with subtle fade-up effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
├── app/
│   ├── globals.css       # Global styles and neon utilities
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main landing page
├── components/
│   ├── NeonButton.tsx    # Reusable neon button component
│   ├── NeonCard.tsx      # Glowing card component
│   ├── NeonHeading.tsx   # Neon text heading component
│   ├── NeonGrid.tsx      # Grid background component
│   └── ParticleBackground.tsx  # Animated particle background
└── tailwind.config.js    # Tailwind configuration with neon utilities
```

## 🎯 Sections

1. **Hero Section** - Large "42" with "Coding Labs" subtitle and CTA button
2. **About Section** - Company description with neon divider
3. **Services Section** - Four service cards with icons
4. **Projects Section** - Minimal project links with neon hover effects
5. **Contact Section** - Contact form with neon-outlined inputs
6. **Footer** - Simple footer with neon line divider

## 🛠 Custom Tailwind Utilities

The project includes custom Tailwind utilities for neon effects:

- `neon-text` - Purple glowing text
- `neon-text-strong` - Stronger purple glow
- `neon-border` - Purple glowing border
- `shadow-neon-sm/md/lg/xl` - Various neon shadow intensities
- `glow-on-hover` - Hover glow effect

## 📝 Customization

To customize colors, edit `tailwind.config.js`:

```js
colors: {
  'neon-purple': {
    DEFAULT: '#a855f7',
    light: '#b26fff',
    dark: '#9b5eff',
  },
}
```

## 🚢 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is private and proprietary to 42 Coding Labs.


