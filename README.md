## Project Structure
- `src/components/` - Reusable UI Components
- `src/routes/` - URL Routing Config
- `src/Layout.tsx` - Root of the UI
- `src/index.css` - Root of styling

## How It Works
Every routing follows URL routing config, leveraging React Router Outlet inside the root of the UI. All repetitive style comes from root of styling, leveraged by Tailwind.

## Known Bug and Fixes
- Bahnscrift font only works for windows
- not responsive at the moment
- idcard physics is very buggy
- animated underline in navigation bar is stuttery sometimes
- couldn't properly implement navigation background because scroll detection is quirky

## Plan 
- Halted all navigation bar and scroll detection implementation
- focus on implementing content and responsiveness