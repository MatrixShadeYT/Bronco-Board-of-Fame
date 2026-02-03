# Bronco Board of Fame

## Overview

A static web application for Blackfoot High School's "Bronco Board of Fame" - a sports hall of fame display website. The application showcases various athletic programs including Baseball, Basketball, Cross Country, Football, Golf, Soccer, Softball, Tennis, Track, Volleyball, and Wrestling through a simple tab-based navigation system.

The site is designed to run in fullscreen kiosk mode, likely intended for display on a dedicated screen or digital signage within the school.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure vanilla HTML/CSS/JavaScript** - No frameworks or build tools
- **Single-page application pattern** - All content sections exist in the DOM; JavaScript toggles visibility based on navigation clicks
- **Kiosk mode design** - Automatically requests fullscreen on first user interaction

### Navigation System
- Tab-based navigation with sports categories
- Sections are shown/hidden via `display: block/none` CSS manipulation
- Navigation handled by `change()` function that matches nav link text to section IDs

### Layout Structure
- Fixed header with school logo and title
- Horizontal navigation bar below header
- Main content area with sections for each sport
- Responsive sizing using `vw` (viewport width) units throughout

### Static File Serving
- Uses `serve` npm package for local development server
- No build process required - direct file serving

## External Dependencies

### NPM Packages
| Package | Purpose |
|---------|---------|
| `serve` | Static file server for local development |

### Assets
- `logo.png` - School logo displayed in header
- `style.css` - All styling
- `script.js` - Navigation and fullscreen logic

### External Services
- None - fully self-contained static site with no external APIs, databases, or third-party integrations