# Sculpt Designs

A modern and responsive website built with React + Vite, featuring smooth animations and a sleek design.

## 🚀 Live Demo

[Visit Sculpt Designs](https://rupin-desai.github.io/sculpt-dev/)

## ✨ Features

- Modern UI/UX design
- Smooth animations using Framer Motion
- Fully responsive layout
- Custom styling with Tailwind CSS
- Font Awesome icons integration
- Custom typography with Redex Pro font

## 🛠️ Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Font Awesome
- Redex Pro font
- GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rupin-desai/sculpt-dev.git
cd sculpt-dev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

### Tailwind CSS Setup
Tailwind CSS is already configured in the project. You can customize the configuration in `tailwind.config.js`.

### Font Setup
1. Import Redex Pro font in your `index.css`:
```css
@font-face {
  font-family: 'Redex Pro';
  src: url('./assets/fonts/RedexPro.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
```

### Font Awesome Setup
1. Install Font Awesome packages:
```bash
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/react-fontawesome
```

### Framer Motion Setup
Framer Motion is already installed. Import animations as needed:
```javascript
import { motion } from 'framer-motion'
```

## 🚀 Deployment

To deploy to GitHub Pages:

1. Add the homepage field to your `package.json`:
```json
{
  "homepage": "https://rupin-desai.github.io/sculpt-dev/"
}
```

2. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy the application:
```bash
npm run deploy
```

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👤 Author

Rupin Desai - [GitHub Profile](https://github.com/rupin-desai)
