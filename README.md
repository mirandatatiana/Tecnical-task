# Project: AI Searching

An AI-powered search application that dynamically queries and displays resources (Books, Papers, Articles), with features to save items and fact-check credibility. Utilizes Material UI icons, Tailwind CSS, and AI-driven search logic.

---

## 🚀 Features

- **Responsive Layout**  
  - Mobile: Collapsible navigation overlay  
  - Tablet/Desktop: Persistent sidebar navigation  
- **AI Search**  
  - Real-time filtering of resources via AI-driven logic  
- **Resource Listing**  
  - Displays **Title**, **Type**, **Year**, **Author**, **Source**  
- **Preview Modal**  
  - Opens details of the first resource in a centered overlay  
- **Save Action**  
  - Toggle bookmark icon (outline ↔ filled) and “Save” ↔ “Saved” text  
- **Fact-Check Action**  
  - Reveal credibility status (`High`, `Medium`, `Low`) on click
 
Improvements
- Add drop-shadows, hover transitions, and subtle filters to cards, buttons, and the modal for depth.
- Introduce customizable color palettes and dark mode support via Tailwind’s dark: variants.
- Animate icon transforms and modal entry/exit with Framer Motion for smoother feedback.

---

## 🔧 Prerequisites

- **Node.js** ≥ 14  
- npm or yarn  
- Next.js App Router (or React setup supporting client components)  

---

## ⚙️ Installation

```bash
# 1. Clone repository
git clone https://github.com/mirandatatiana/Tecnical-task.git
cd resource-results-task

# 2. Install dependencies
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material tailwindcss postcss autoprefixer
# or
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material tailwindcss postcss autoprefixer

# 3. Initialize Tailwind CSS
npx tailwindcss init -p

# 4. Configure Tailwind in tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: []
}
```
## ▶️ Usage
```bash
# Start development server
npm run dev
# or
yarn dev
```

1.	Open your browser at http://localhost:3000
2.	Use the search input to filter resources
3.	Click Save to toggle bookmark state
4.	Click Fact Check to reveal credibility
5.	On mobile, tap the menu icon to open navigation
6.	Click Preview to view the first-resource modal

🤝 Contributing
	1.	Fork the repo
	2.	Create a branch: git checkout -b feature/my-feature
	3.	Commit changes: git commit -m "Add feature"
	4.	Push: git push origin feature/my-feature
	5.	Open a Pull Request
