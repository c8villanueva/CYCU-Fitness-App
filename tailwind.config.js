/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["app\_layout.tsx", "app\index.tsx", "app\**\*.tsx", "app\**\*.ts", "app\**\*.js", "app\**\*.jsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}