# Moonex - Trusted Multi-Chain DEX

This project is a pixel-perfect recreation of the Moonex Figma design, built with Next.js 16, TailwindCSS, and Framer Motion. It also includes a dynamic Crypto Data page fetching real-time market data from the CoinCap API.

## 🚀 Tech Stack & Decisions

- **Next.js 16 (App Router):** Chosen for its robust routing, server-side rendering capabilities, and performance optimizations or cache hit.
- **TailwindCSS v4:** Used for rapid, utility-first styling to ensure responsiveness and exact design matching.
- **Framer Motion:** Integrated for smooth, complex animations (like the hero section and mobile menu) that enhance user experience.
- **Lucide React & React Icons:** Used for lightweight, customizable icons.
- **CoinGecko API:** Selected for the "Crypto Data" page as a reliable, free public API for real-time cryptocurrency data without requiring an API key.

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd plutus-assign
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the app.
   Navigate to [http://localhost:3000/crypto-data](http://localhost:3000/crypto-data) to see the API integration.

## 📦 Build for Production

To create a production build:

```bash
pnpm build
pnpm start
```

## Trade-offs & Future Improvements

- **Asset Optimization:** Some assets (like the large footer logo group) are currently SVGs or PNGs. In a production environment, these could be further optimized or converted to code-based SVGs for better performance.
- **API Rate Limiting:** The CoinGecko API is free but has rate limits. For a high-traffic production app, we would implement server-side caching (e.g., using Redis or Next.js `unstable_cache`) to reduce API calls.
- **Design Fidelity:** While we aimed for pixel-perfection, some minor spacing or font rendering differences may exist across browsers.
- **Type Safety:** We used TypeScript for type safety. Further improvements could include stricter type checks and Zod validation for API responses.

