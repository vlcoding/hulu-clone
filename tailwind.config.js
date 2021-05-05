module.exports = {
    mode: "jit",
    // Remove unused styles in production
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
