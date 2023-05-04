/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts}"],
    theme: {
        extend: {
            colors: {
                "theme-primary": "var(--primary-color)",
            },
            fontFamily: {
                roboto: ["ROBOTO", 'sans-serif']
            }
        },
    },
    plugins: [],
}