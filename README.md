# YVI Soft Solutions

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-brightgreen.svg)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, responsive business website for YVI Soft Solutions - delivering innovative technology solutions across AI, Web Development, Mobile Apps, Oracle, RPA, and UI/UX design.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19.1.0 and Vite 7.0.0 for optimal performance
- **Responsive Design**: Bootstrap 5.3.7 with custom CSS for all device compatibility
- **Contact Management**: Database-backed contact form with email notifications
- **Multi-theme Support**: 6 built-in color themes (blue, green, red, orange, purple, pink)
- **Smooth Animations**: AOS (Animate On Scroll) integration for enhanced UX
- **Performance Optimized**: Vite build system with Hot Module Replacement (HMR)
- **Interactive Components**: Swiper sliders for testimonials and client showcases
- **Email Integration**: PHPMailer with SMTP support for contact form notifications

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
- **PHP** 8+ - Server-side processing
- **MySQL** - Database management
- **PHPMailer** - Email functionality

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
│   ├── styles/              # CSS and Sass files
│   ├── assets/              # Frontend assets
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── PHPMailer/               # Email library
│   └── src/                 # PHPMailer source files
├── db_save.php              # Backend API endpoint
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- **PHP** 8.0+ (for backend functionality)
- **MySQL** database (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yvi-soft-redesign
   ```

2. **Install dependencies**
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

## 🗄️ Database Setup

### Contact Form Database

The contact form uses a MySQL database to store submissions:

```sql
CREATE TABLE contact_messages (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(200) DEFAULT 'No Subject',
  message TEXT NOT NULL,
  ip VARCHAR(45) DEFAULT NULL,
  user_agent TEXT DEFAULT NULL,
  created_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### Configuration

Update database credentials in `db_save.php`:

```php
$db_config = [
    'host' => 'localhost',
    'username' => 'your_username',
    'password' => 'your_password',
    'database' => 'your_database',
    'port' => 3306
];
```

## 📧 Email Configuration

### SMTP Setup

Update email settings in `db_save.php`:

```php
$smtp_config = [
    'host' => 'smtp.gmail.com',
    'username' => 'your-email@gmail.com',
    'password' => 'your-app-password',
    'to_email' => 'admin@yvisoft.com',
    'to_name' => 'YVI Soft Admin'
];
```

### Gmail Setup

1. Enable 2-Factor Authentication
2. Generate App Password
3. Use App Password in configuration

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

2. **Upload files**
   - Upload `dist/` contents to `/public_html/`
   - Upload `db_save.php` to root directory
   - Upload `PHPMailer/` directory

### GoDaddy Hosting

1. **File Structure**
   ```
   /public_html/
   ├── index.html
   ├── assets/
   ├── db_save.php
   └── PHPMailer/
   ```

2. **Database Setup**
   - Create MySQL database via cPanel
   - Import table structure
   - Update credentials in `db_save.php`

## 🔒 Security Features

- **Input Sanitization**: All form inputs are sanitized using `htmlspecialchars()` and `strip_tags()`
- **SQL Injection Prevention**: Prepared statements for database queries
- **CORS Protection**: Proper cross-origin headers configured
- **Email Validation**: Server-side email format validation
- **Rate Limiting**: Built-in protection against spam submissions

## 📱 Components

### Core Components

- **Header**: Navigation with mobile-responsive menu
- **Banner**: Hero sections with call-to-action
- **About**: Company information and team
- **Services**: AI, Web Dev, Mobile App, Oracle, RPA, UI/UX
- **Approach**: Development methodology
- **Testimonials**: Client feedback with Swiper carousel
- **Clients**: Partner logos and case studies
- **Contact**: Contact form with real-time validation
- **Footer**: Company information and links

### Features

- **Scroll Animations**: AOS integration for smooth scrolling effects
- **Mobile Menu**: Responsive navigation for mobile devices
- **Form Validation**: Client and server-side validation
- **Email Notifications**: Automated email alerts for form submissions
- **Theme Switching**: Dynamic color theme changes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style

- Follow ESLint configuration
- Use functional components with hooks
- Maintain component modularity
- Write descriptive commit messages

### Testing

- Test form functionality thoroughly
- Verify email notifications
- Check responsive design across devices
- Validate database connections

## 🐛 Known Issues

- Large video assets may impact loading performance
- Testing framework not yet configured
- TypeScript integration pending

## 📈 Performance Optimization

- **Vite HMR**: Fast development with hot module replacement
- **Code Splitting**: Automatic code splitting for optimal loading
- **Asset Optimization**: Vite handles CSS and JS minification
- **Image Optimization**: Consider implementing lazy loading

## 📞 Support

**YVI Soft Solutions**
- **Website**: [yvisoft.com](https://yvisoft.com)
- **Email**: info@yvisoft.com
- **Phone**: +91-8317622417
- **Location**: Hyderabad, Telangana, India

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- Bootstrap team for the responsive framework
- All contributors and supporters

---

**Built with ❤️ by YVI Soft Solutions**
