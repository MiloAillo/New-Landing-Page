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
1. fix wide screen bad layout
2. fix performance
3. implement The Blog