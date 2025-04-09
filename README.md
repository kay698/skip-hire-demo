# 🛠️ Skip Hire Demo

This is a React + TypeScript web demo for a skip hire service interface. It was built entirely from scratch based on a provided UI design link, with thoughtful improvements made to enhance usability, responsiveness, and code organization.

## 🧠 My Approach

I was given a url as reference and no starter codebase. I analyzed the design, broke it down into components, and implemented the layout and logic from the ground up.

The main goal was to replicate the skip selection screen and ensure a smooth, modern user experience — while making creative decisions around animations, responsiveness, and styling to elevate the final output.

## 🚀 Tech Stack

1. React

2. TypeScript

3. Styled Components

4. GSAP (GreenSock)

5. Axios

6. React Icons

## ✨ Features

1. Skip Selection Interface for 4 to 12-yard skips with pricing and conditions

2. Responsive Layout built with Flexbox and media queries

3. Animated Transitions using GSAP for smooth UI motion

4. Styled Components for scoped, maintainable styling, and to also showcase my skillset in building optimized components from scratch

5. Axios Setup to allow easy backend integration

6. Reusable Components (like SkipCard) for a cleaner structure

7. Conditional Elements like "Private Property Only" badges based on road access

## 🔧 Modifications & Improvements

1. Used TypeScript for type safety and better development experience

2. Introduced GSAP animations to bring visual life to components

3. Built a responsive layout to ensure optimal display on all screen sizes

4. Created a SkipCard component to handle the layout and logic for each skip

5. Organized code into logical folders like components, pages, and utils

6. Made changes to font-family, colors and layout sizing to improve the overall appeal

7. Implemented loader state and no data state on the cards section for better functionality

---

```
📁 Folder Structure
src/
├── assets/ # Images and visuals
├── components/ # Reusable UI components (e.g., SkipCard, button, Loader)
├── pages/ # Main page views
├── utils/ # Helper functions
├── App.tsx # Main app layout
└── main.tsx # Entry point
```

## 🛠️ Getting Started

To run the project locally:

```
git clone https://github.com/kay698/skip-hire-demo.git
cd skip-hire-demo
yarn
yarn start
```
