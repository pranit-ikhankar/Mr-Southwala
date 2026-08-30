<div align="center">

# 🍛 MR. SOUTHWALA
**Where South Indian Soul Meets Street Food Swagger**

*Bold flavors. Zero apologies. A fast, modern restaurant landing page and digital menu built with React, Vite, Tailwind CSS, and Framer Motion.*

<br/>

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-FFD028?style=for-the-badge)](LICENSE)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design & Aesthetic](#-design--aesthetic)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Dev Server](#running-the-dev-server)
  - [Building for Production](#building-for-production)
- [Customization Guide](#-customization-guide)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Mr. Southwala** is a vibrant, mobile-first web application designed for a modern South Indian fusion street-food restaurant. It combines high-octane street aesthetics with smooth user interactions, interactive menus, signature spotlights, visual gallery, customer reviews, and location details.

---

## ✨ Key Features

- **🚀 Parallax Hero Experience**: Dynamic scroll-linked animations powered by Framer Motion with brand punchlines and prominent call-to-actions.
- **⚡ Infinite Animated Marquee**: High-energy continuous ticker showcasing brand vibe and culinary identity.
- **🍽️ Interactive Categorized Menu**: Fast tab-switching menu categorized into *Starters*, *Bowls*, *Wraps & Rolls*, and *Beverages* with spice tags, descriptions, and dynamic pricing.
- **🔥 Must-Try Signature Dishes**: Card showcases for flagship fusion items (*The Southwala Special*, *Fusion Thali*, *Street Platter*) with image hover zoom effects.
- **📸 Visual Food Gallery**: Interactive grid highlighting street ambiance, culinary craft, and customer vibes.
- **💬 Customer Reviews**: Clean testimonial section featuring authentic visitor feedback.
- **📍 Location & Contact Hub**: Clear operating hours, store address in Koramangala, direct phone/email contact, and Google Maps direction links.
- **📱 Fully Responsive & Glassmorphism Navbar**: Sticky header that blurs on scroll with smooth mobile drawer navigation.

---

## 🎨 Design & Aesthetic

The application is built on a dark, street-industrial color palette featuring:

| Color | Hex | Role |
|---|---|---|
| **Background** | `#050505` | Deep Obsidian Base |
| **Surface** | `#121212` | Elevated Card Containers |
| **Primary** | `#FFD028` | Street Yellow Accent |
| **Secondary** | `#0F392B` | Deep Evergreen |
| **Flame Accent** | `#F94C10` | Badges & Hot Tags |
| **Text Primary** | `#EDEDED` | Crisp Readable Headers |

### Typography
- **Headings**: [`Anton`](https://fonts.google.com/specimen/Anton) for bold, punchy statement headers.
- **Accents & Tags**: [`Permanent Marker`](https://fonts.google.com/specimen/Permanent+Marker) for street graffiti vibe.
- **Body & UI**: [`Outfit`](https://fonts.google.com/specimen/Outfit) for clean, readable modern geometric typography.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS animations and design tokens
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
Mr-Southwala/
├── App.css               # Component & animation styling (cards, gallery, skew buttons)
├── App.jsx               # Main application component & sections
├── index.css             # Design tokens, fonts, Tailwind directives, & custom utilities
├── index.html            # Application entry HTML
├── main.jsx              # React root entrypoint
├── package.json          # Project dependencies & scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite build tool configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. Clone or navigate to the repository:
   ```bash
   git clone https://github.com/your-username/Mr-Southwala.git
   cd Mr-Southwala
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Dev Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to the local URL (usually `http://localhost:5173`).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Customization Guide

### 1. Update Menu & Pricing
Menu categories and items are configured in `App.jsx`:
```javascript
const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Masala Fries", price: "₹149", desc: "Crispy fries with house spice blend", popular: true },
      // Add or modify items here
    ]
  },
  // ...
];
```

### 2. Update Signature Dishes & Gallery
You can replace image URLs and dish descriptions in `signatureDishes` and `galleryImages` inside `App.jsx`.

### 3. Update Contact & Location
Edit the address, phone number, working hours, or Google Maps link in the `LocationSection` and `Footer` components in `App.jsx`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

<br/>

<div align="center">
  <sub>Crafted with ❤️ for street food lovers by <b>Mr. Southwala</b></sub>
</div>
