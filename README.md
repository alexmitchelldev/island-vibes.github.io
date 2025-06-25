# Island Vibes - Caribbean Restaurant Website

A beautiful, responsive website for Island Vibes Caribbean restaurant featuring authentic Jamaican cuisine.

## Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layout for tablets and desktops
- **Modern UI/UX**: Clean, vibrant design using Caribbean-inspired colors
- **Interactive Navigation**: Mobile hamburger menu with smooth animations
- **Contact Form**: Functional contact form with validation
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML

## Color Scheme

- **Primary**: #ffeb32 (Vibrant Yellow)
- **Secondary**: #89ba31 (Fresh Green)
- **Black**: #000000
- **White**: #ffffff
- **Highlights**: Lighter opacity versions for subtle effects

## Typography

- **Primary Font**: [Outfit](https://fonts.google.com/specimen/Outfit) from Google Fonts
- **Weights**: 300, 400, 500, 600, 700

## Pages

### 1. Home Page (`index.html`)
- Hero section with call-to-action buttons
- Mission and Vision statements
- Feature highlights
- Restaurant overview

### 2. Menu Page (`menu.html`)
- Complete menu with authentic Caribbean dishes
- Organized by categories (Main Dishes, Sides, Appetizers, Beverages, Desserts)
- Pricing and descriptions for each item

### 3. Contact Page (`contact.html`)
- Contact information and hours
- Interactive contact form
- Map placeholder (ready for integration)
- Multiple contact methods

### 4. Book Page (`book.html`)
- Integrated TableAgent booking system via iframe
- Booking information and tips
- Alternative contact methods for booking assistance
- Responsive iframe design for all devices

## File Structure

```
island-vibes/
├── index.html          # Homepage
├── menu.html           # Menu page
├── contact.html        # Contact page
├── book.html           # Booking page with TableAgent iframe
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Setup Instructions

1. **Local Development**:
   - Clone or download the files
   - Open `index.html` in a web browser
   - No build process required - pure HTML, CSS, and JavaScript

2. **Web Hosting**:
   - Upload all files to your web server
   - Ensure `index.html` is in the root directory
   - No server-side dependencies required

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Table Booking System
The booking page (`book.html`) integrates with TableAgent using an iframe. The booking system is fully functional and includes:
- Responsive iframe that works on all devices
- Booking tips and information for customers
- Alternative contact methods for booking assistance
- Professional styling that matches the site design

### Adding Online Ordering
Replace the "Order Online" button functionality with your chosen online ordering platform.

### Contact Form Integration
The contact form currently shows success messages. To make it functional:
1. Add a backend endpoint to handle form submissions
2. Update the form action in `contact.html`
3. Modify the JavaScript in `script.js` to actually submit data

### Map Integration
Replace the map placeholder in `contact.html` with:
- Google Maps embed
- Mapbox integration
- Other mapping service of choice

## Performance Features

- **Optimized Images**: Using Unsplash CDN for hero image with proper sizing
- **Font Loading**: Preconnect to Google Fonts for faster loading
- **CSS Organization**: Mobile-first approach with efficient media queries
- **JavaScript**: Vanilla JS with no external dependencies

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Reduced motion support

## Technical Notes

- **Responsive Breakpoints**:
  - Mobile: < 769px
  - Tablet: 769px - 1023px
  - Desktop: 1024px - 1199px
  - Large Desktop: ≥ 1200px

- **CSS Features Used**:
  - CSS Grid and Flexbox
  - CSS Custom Properties (for consistent colors)
  - CSS Animations and Transitions
  - CSS Media Queries

- **JavaScript Features**:
  - ES6+ syntax
  - DOM manipulation
  - Event handling
  - Form validation
  - Intersection Observer API

## Future Enhancements

- [ ] Add image gallery
- [x] Integrate real booking system (TableAgent)
- [ ] Add blog section
- [ ] Implement online ordering
- [ ] Add customer reviews section
- [ ] Social media integration
- [ ] Multi-language support

## License

This website template is created for Island Vibes restaurant. Modify as needed for your specific requirements.

## Support

For technical support or customization requests, please contact the development team.