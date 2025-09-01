# YVI Soft Solutions

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-brightgreen.svg)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, responsive business website for YVI Soft Solutions - delivering innovative technology solutions across AI, Web Development, Mobile Apps, Oracle, RPA, and UI/UX design.

## 🚀 Features

- **Modern UI/UX**: Responsive design with Bootstrap 5
- **Smooth Animations**: AOS scroll animations
- **Interactive Components**: Swiper carousel, mobile menu
- **Contact Form**: Real-time validation with Supabase backend
- **Email Integration**: Automated notifications
- **Theme Customization**: 6 color themes
- **Performance Optimized**: Vite build tool
- **SEO Friendly**: Semantic HTML structure

## 🛠️ Technology Stack

### Frontend
- **React** 19.1.0 - UI framework
- **Vite** 7.0.0 - Build tool and development server
- **Bootstrap** 5.3.7 - CSS framework
- **React Bootstrap** 2.10.10 - Bootstrap components for React
- **React Router DOM** 7.6.3 - Client-side routing
- **Swiper** 11.2.10 - Touch slider components
- **AOS** 2.3.4 - Scroll animations
- **Sass** - CSS preprocessor

### Backend
- **Supabase** - Backend as a Service
- **PostgreSQL** - Database management
- **Node.js/Express** - Email notification server
- **Nodemailer** - Email sending library

### Development Tools
- **ESLint** - Code linting and quality
- **Axios** 1.11.0 - HTTP client
- **Vite Plugin React** - React integration

## 📁 Project Structure

```
YviSoft/
├── public/                   # Static assets
│   ├── images/              # Image assets
│   └── videos/              # Video assets
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── About/
│   │   ├── Banner/
│   │   ├── Contact Info & Form/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Services/
│   │   └── ...
│   ├── config/              # Configuration files
│   ├── services/            # Service files (email service)
│   ├── styles/              # CSS and Sass files
│   ├── assets/              # Frontend assets
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── server.js                # Email notification server
├── package.json             # Frontend dependencies
├── package-backend.json     # Backend dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- **Supabase** account (for backend functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yvi-soft-redesign
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install missing dependencies** (if needed)
   ```bash
   npm install aos
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run deploy` | Run deployment helper script |

## 🗄️ Database Setup

### Contact Form Database

The contact form uses Supabase with PostgreSQL to store submissions. First, you'll need to set up a Supabase project and create the required table:

1. Create a Supabase account at [supabase.com](https://supabase.com/)
2. Create a new project
3. Get your project URL and anon key from the project settings
4. Create the contact_messages table:

```sql
CREATE TABLE contact_messages_new (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  company VARCHAR(100),
  phone VARCHAR(20),
  subject VARCHAR(200) DEFAULT 'No Subject',
  message TEXT NOT NULL,
  ip VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

5. Set up environment variables in your `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Configuration

Update Supabase credentials in `src/config/supabase.js` or use environment variables:

```javascript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'
```

## 📧 Email Configuration

### Backend Email Server

The contact form now sends email notifications in addition to storing data in the database. To enable this functionality:

1. **Install backend dependencies**:
   ```bash
   # Rename the backend package file
   mv package-backend.json package.json
   
   # Install backend dependencies
   npm install
   ```

2. **Configure email credentials**:
   Create a `.env` file in the project root:
   ```env
   # Email Configuration
   EMAIL_USER=contact@yvisoft.com
   EMAIL_PASS=your_email_password
   
   # Server Configuration
   PORT=3001
   ```

3. **Start the email server**:
   ```bash
   # Start the email server
   npm run start
   
   # Or for development with auto-restart
   npm run dev
   ```

4. **Configure Vite proxy**:
   Update `vite.config.js` to proxy API requests to the email server:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     server: {
       proxy: {
         '/api': {
           target: 'http://localhost:3001',
           changeOrigin: true,
           secure: false
         }
       }
     }
   })
   ```

### Email Service Options

Popular email services that work well with this setup:
- **GoDaddy SMTP** - Uses smtpout.secureserver.net with port 465
- **SendGrid** - Reliable transactional email service
- **Mailgun** - Feature-rich email platform
- **Resend** - Developer-first email API

For detailed setup instructions, see [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md).

## 🎨 Theme Customization

The project supports 6 built-in color themes:

- **Blue** (default)
- **Green**
- **Red**
- **Orange**
- **Purple**
- **Pink**

Themes are managed via CSS variables in the styles directory.

## 🚀 Deployment

### Production Build

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Set up Supabase**
   - Create Supabase project
   - Create contact_messages table
   - Configure environment variables

3. **Deploy the email server**
   - Deploy the Node.js server to a hosting platform (e.g., Render, Heroku, DigitalOcean)
   - Update the proxy configuration in `vite.config.js` to point to your deployed server

### Hosting Options

- **Frontend**: Vercel, Netlify, GitHub Pages, GoDaddy
- **Backend**: Render, Heroku, DigitalOcean App Platform
- **Database**: Supabase (already configured)

### Deployment Guides

For detailed deployment instructions, see:
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - General deployment instructions
- [GODADDY_DEPLOYMENT_GUIDE.md](GODADDY_DEPLOYMENT_GUIDE.md) - Specific instructions for GoDaddy hosting

You can also use the deployment helper script:
```bash
npm run deploy
```

## 📚 Additional Documentation

- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Detailed deployment instructions
- [GODADDY_DEPLOYMENT_GUIDE.md](GODADDY_DEPLOYMENT_GUIDE.md) - GoDaddy-specific deployment guide
- [SUPABASE_EMAIL_SETUP.md](SUPABASE_EMAIL_SETUP.md) - Alternative Supabase-based email solutions
- [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) - Detailed email server setup guide
- [SUPABASE_MIGRATION_SUMMARY.md](SUPABASE_MIGRATION_SUMMARY.md) - Summary of migration from PHP to Supabase