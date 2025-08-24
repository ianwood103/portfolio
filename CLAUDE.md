# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The project is configured for static export deployment and uses Microsoft Clarity for analytics.

## Common Development Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run preview` - Preview the built static site using serve

### Code Quality
- `npm run lint` - Run ESLint with Next.js rules

## Architecture

### Framework & Build
- **Next.js 15** with App Router architecture
- **Static export** configuration (`output: "export"` in next.config.ts)
- **Turbopack** for fast development builds
- **TypeScript** with strict mode enabled

### Styling
- **Tailwind CSS v4** with PostCSS integration
- Custom CSS variables for brand colors (primary: #2483ff, secondary: #559eff)
- Responsive design with mobile-first approach

### Project Structure
```
app/
├── layout.tsx          # Root layout with Inter font and Microsoft Clarity
├── page.tsx           # Homepage with portfolio content and social links
├── globals.css        # Global styles with Tailwind imports
└── components/        # Social media icon components (SVG-based)
    ├── LinkedInIcon.tsx
    ├── EmailIcon.tsx
    ├── GithubIcon.tsx
    ├── InstagramIcon.tsx
    └── TwitterIcon.tsx
```

### Component Patterns
- Icon components are functional components returning inline SVG elements
- Consistent styling with Tailwind classes including hover states and transitions
- Social links open in new tabs with proper `rel="noopener noreferrer"`

### Key Features
- **Responsive design**: Desktop layout with circular social icons around profile image, mobile layout with horizontal icon row
- **Analytics**: Microsoft Clarity integration in layout.tsx
- **Static assets**: Profile image served from `/public/ian.png`
- **Accessibility**: Proper alt text, semantic HTML structure

### Configuration Files
- `eslint.config.mjs` - ESLint with Next.js and TypeScript rules
- `tsconfig.json` - TypeScript configuration with strict settings
- `postcss.config.mjs` - PostCSS with Tailwind CSS plugin
- `next.config.ts` - Next.js configuration for static export

### Development Notes
- The site is built for static export, so no server-side features
- Uses Next.js Image component with `unoptimized` flag for static export
- Custom font loading with Next.js font optimization (Inter)
- All social media icons are custom SVG components with consistent hover effects