## Project Structure
- `src/components/` - Reusable UI Components
- `src/routes/` - URL Routing Config
- `src/Layout.tsx` - Root of the UI
- `src/index.css` - Root of styling

## How It Works
Every routing follows URL routing config, leveraging React Router Outlet inside the root of the UI. All repetitive style comes from root of styling, leveraged by Tailwind.

## Known Bug and Fixes
- Bahnscrift font only works for windows
- navbar conditional styling is all over the place, not a bug but hard to scale

## Plan 
1. fix performance
2. implement The Blog

## Note
- Navbar maximum width is 1400px, is centered. Other page maximum width should follow maximum navbar.