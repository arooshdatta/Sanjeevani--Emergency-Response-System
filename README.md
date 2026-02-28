# Sanjeevani - Health Emergency Response System

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/yourusername/sanjeevani)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Node](https://img.shields.io/badge/Node-18+-success)](https://nodejs.org)

A modern, full-stack health emergency response platform with real-time SOS alerts, medical guidance, and emergency responder coordination.

## 🚀 Quick Start

Get up and running in 5 minutes:

```bash
# Clone repository
git clone https://github.com/yourusername/sanjeevani.git
cd sanjeevani

# Install and start
npm run setup
npm run dev
```

Open `http://localhost:5173` in your browser.

**[→ Detailed setup instructions →](./readme/SETUP_INSTRUCTIONS.md)**

## 📁 Project Structure

```
sanjeevani/
├── frontend/          React + Vite application
├── backend/           Supabase serverless functions
├── readme/            Complete documentation
└── .gitignore         Git configuration
```

Only 3 main folders + documentation = clean, organized repository! ✨

## 📚 Documentation

Read the docs in the `readme/` folder:

| Document | Purpose |
|----------|---------|
| **[QUICKSTART.md](./readme/QUICKSTART.md)** | 5-minute quick start |
| **[SETUP_INSTRUCTIONS.md](./readme/SETUP_INSTRUCTIONS.md)** | Complete setup guide |
| **[FRONTEND_SETUP.md](./readme/FRONTEND_SETUP.md)** | Frontend development |
| **[BACKEND_SETUP.md](./readme/BACKEND_SETUP.md)** | Backend configuration |
| **[DEPLOYMENT.md](./readme/DEPLOYMENT.md)** | Deploy to production |
| **[STRUCTURE.md](./readme/STRUCTURE.md)** | Project structure details |
| **[GITHUB_SETUP.md](./readme/GITHUB_SETUP.md)** | GitHub repository setup |
| **[CONTRIBUTING.md](./readme/CONTRIBUTING.md)** | How to contribute |
| **[README.md](./readme/README.md)** | Full documentation |

## ✨ Features

- 🆘 **Emergency SOS Alerts** - One-tap emergency notifications
- 📍 **Location Sharing** - Real-time location tracking
- 🏥 **Medical Assistance** - AI-powered health guidance
- 📊 **Health Monitoring** - Real-time health metrics
- 🚑 **Responder Coordination** - Emergency responder network
- 📱 **Real-time Notifications** - Instant alerts and updates
- 🌐 **Multi-language Support** - Support for multiple languages
- 🎨 **Dark/Light Mode** - Theme switching
- 📈 **Dashboard Analytics** - Performance tracking

## 🛠 Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **React Query** - Data management
- **React Router** - Navigation

### Backend
- **Supabase** - Backend as a Service
- **PostgreSQL** - Database
- **Edge Functions** - Serverless compute
- **Real-time** - WebSocket updates

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sanjeevani.git
   cd sanjeevani
   ```

2. **Install dependencies**
   ```bash
   npm run setup
   ```

3. **Create environment file** (`frontend/.env`)
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
   Get these from [Supabase Dashboard](https://supabase.com)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Visit `http://localhost:5173`

## 📝 Available Scripts

### Root Level
```bash
npm run setup              # Install all dependencies
npm run dev                # Start frontend dev server
npm run build              # Build frontend for production
npm run frontend:lint      # Lint frontend code
npm run frontend:test      # Run frontend tests
npm run backend:start      # Start Supabase locally
npm run backend:stop       # Stop Supabase
```

### Frontend
```bash
cd frontend
npm run dev                # Start dev server
npm run build              # Build for production
npm run preview            # Preview production build
npm run test               # Run tests
npm run test:watch         # Watch mode testing
npm run lint               # Lint code
```

## 🎯 Project Layout

```
sanjeevani/
├── frontend/                      # React Application
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── pages/                # Page components
│   │   ├── hooks/                # Custom hooks
│   │   ├── lib/                  # Utilities
│   │   ├── types/                # Type definitions
│   │   └── App.tsx               # Root component
│   ├── package.json              # Frontend dependencies
│   ├── vite.config.ts            # Build configuration
│   └── .env                      # Environment variables
│
├── backend/                       # Backend Services
│   └── supabase/                 # Supabase configuration
│       ├── functions/            # Serverless functions
│       ├── migrations/           # Database migrations
│       └── config.toml           # Supabase config
│
├── readme/                        # Documentation
│   ├── README.md                 # Full documentation
│   ├── QUICKSTART.md             # Quick start guide
│   ├── SETUP_INSTRUCTIONS.md     # Setup guide
│   ├── FRONTEND_SETUP.md         # Frontend guide
│   ├── BACKEND_SETUP.md          # Backend guide
│   ├── DEPLOYMENT.md             # Deployment guide
│   ├── STRUCTURE.md              # Structure details
│   ├── GITHUB_SETUP.md           # GitHub setup
│   └── CONTRIBUTING.md           # Contribution guide
│
├── .gitignore                     # Git configuration
└── package.json                   # Root package.json
```

## 🔐 Environment Variables

Create `frontend/.env`:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**Never commit `.env` files!** They're in `.gitignore`.

## 🚢 Deployment

The application is designed to deploy separately:

### Frontend Deployment
- Vercel, Netlify, or AWS Amplify
- See [DEPLOYMENT.md](./readme/DEPLOYMENT.md) for details

### Backend Deployment
- Supabase manages backend automatically
- Deploy functions with `supabase functions deploy`

### Full Instructions
See [DEPLOYMENT.md](./readme/DEPLOYMENT.md) for complete deployment guide.

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test
npm run test:watch       # Watch mode
```

Tests use Vitest and are located in `src/test/`

## 📖 Documentation

Full documentation is in the `readme/` folder:

- **[Full README](./readme/README.md)** - Complete project overview
- **[Setup Instructions](./readme/SETUP_INSTRUCTIONS.md)** - Detailed setup
- **[Quick Start](./readme/QUICKSTART.md)** - 5-minute guide
- **[Structure Guide](./readme/STRUCTURE.md)** - Project structure
- **[Deployment Guide](./readme/DEPLOYMENT.md)** - How to deploy
- **[Contributing Guide](./readme/CONTRIBUTING.md)** - How to contribute

## 🐛 Troubleshooting

### Common Issues

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Module errors after cloning?**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Supabase credentials not working?**
- Verify `.env` file is in `frontend/` directory
- Check credentials from Supabase dashboard
- Restart dev server after creating `.env`

See [SETUP_INSTRUCTIONS.md](./readme/SETUP_INSTRUCTIONS.md#troubleshooting) for more.

## 🤝 Contributing

We welcome contributions! 

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit (`git commit -m 'feat: Add AmazingFeature'`)
5. Push (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

See [CONTRIBUTING.md](./readme/CONTRIBUTING.md) for detailed guidelines.

## 📋 Development Workflow

### Creating a New Feature

1. Create branch: `git checkout -b feature/xyz`
2. Make changes in `frontend/src/`
3. Run tests: `npm run frontend:test`
4. Lint code: `npm run frontend:lint`
5. Commit and push to GitHub
6. Create pull request

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Tailwind CSS for styling
- Write descriptive commit messages

## 📱 Responsive Design

The application is fully responsive:
- Desktop (1920px and above)
- Tablet (768px to 1919px)
- Mobile (below 768px)

## ♿ Accessibility

Built with accessibility in mind:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## 🔒 Security

- No secrets in code
- Environment variables for sensitive data
- Supabase handles authentication
- Row-level security on database
- HTTPS enforced

## 📊 Performance

- Vite for fast builds
- Code splitting automatic
- Image optimization
- Caching strategies
- Lazy loading

## 📈 Monitoring

Setup monitoring:
- Sentry for error tracking
- Google Analytics for user behavior
- Custom logging in functions

See [DEPLOYMENT.md](./readme/DEPLOYMENT.md#monitoring--logging)

## 🆘 Getting Help

1. **Check documentation** - See `readme/` folder
2. **Search issues** - Look for similar problems
3. **Create an issue** - Provide detailed description
4. **Contact team** - Reach out directly

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👥 Contributors

- [@yourusername](https://github.com/yourusername) - Creator

See [CONTRIBUTING.md](./readme/CONTRIBUTING.md) to contribute!

## 🙏 Acknowledgments

- React community
- Tailwind CSS team
- Supabase team
- All contributors

## 📞 Contact

- GitHub Issues: [Create Issue](../../issues)
- GitHub Discussions: [Start Discussion](../../discussions)
- Email: [your-email@example.com]

---

### Quick Links

- **[Setup in 5 Minutes](./readme/QUICKSTART.md)**
- **[Full Setup Guide](./readme/SETUP_INSTRUCTIONS.md)**
- **[Deployment Guide](./readme/DEPLOYMENT.md)**
- **[GitHub Setup](./readme/GITHUB_SETUP.md)**
- **[Contributing Guide](./readme/CONTRIBUTING.md)**
- **[Full Documentation](./readme/README.md)**

---

**Made with ❤️ for emergency response and health assistance**

Last Updated: February 2026
