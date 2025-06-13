# Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Mantine UI. This portfolio showcases my projects, skills, and professional experience in an elegant and interactive way.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Project showcase with detailed descriptions
- Contact form with email integration
- Interactive components using Mantine UI
- Dark/Light mode support
- Firebase integration for data management

## Technologies Used

- React 18
- TypeScript
- Mantine UI (@mantine/core, @mantine/hooks, @mantine/carousel)
- Firebase
- EmailJS for contact form
- React Router for navigation
- PostCSS for styling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/alamahmed/portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── resources/     # Static resources and assets
├── App.tsx        # Main application component
├── api.tsx        # API and Firebase configuration
└── index.tsx      # Application entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App



## Contact

For any questions or suggestions, please feel free to reach out through the contact form on the website or directly via email.
