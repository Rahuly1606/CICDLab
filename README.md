# 🚗 Car Rental Application

Full-stack car rental management system with Spring Boot backend and React frontend, deployed using Docker.

---

## 📋 Project Overview

A modern web application for managing car rentals with user authentication, built with enterprise-grade technologies and containerized for easy deployment.

---

## 🛠️ Technology Stack

### **Backend**
- **Framework:** Spring Boot 3.4.10
- **Language:** Java 21
- **Build Tool:** Maven 3.9
- **Database:** MySQL 8.0
- **ORM:** Spring Data JPA (Hibernate)
- **Security:** Spring Security + JWT Authentication
- **JWT Library:** JJWT 0.11.5

### **Frontend**
- **Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Language:** JavaScript (ES6+)
- **Routing:** React Router DOM 7.9.4
- **HTTP Client:** Axios 1.12.2
- **Styling:** CSS3
- **Linting:** ESLint 9.36.0

### **DevOps & Deployment**
- **Containerization:** Docker
- **Orchestration:** Docker Compose
- **Web Server:** Nginx (Alpine)
- **Base Images:** 
  - Node.js 18 Alpine (build stage)
  - Nginx Alpine (frontend serve)
  - Eclipse Temurin 21 JRE Alpine (backend)
  - Maven 3.9 Eclipse Temurin 21 Alpine (backend build)
  - MySQL 8.0

---

## 📦 Project Structure

```
Lab/
├── carrental-backend/          # Spring Boot REST API
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/klu/carrental/
│   │   │   │   ├── controller/      # REST Controllers
│   │   │   │   ├── entity/          # JPA Entities
│   │   │   │   ├── repository/      # Data Access Layer
│   │   │   │   ├── security/        # JWT & Security Config
│   │   │   │   └── service/         # Business Logic
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── Dockerfile
│   └── pom.xml
│
├── carrental-frontend/         # React SPA
│   ├── src/
│   │   ├── components/         # Reusable Components
│   │   ├── pages/              # Page Components
│   │   ├── config/             # API Configuration
│   │   └── assets/             # Static Assets
│   ├── public/
│   ├── Dockerfile
│   ├── nginx.conf              # Nginx Configuration
│   ├── docker-compose.yml
│   ├── vite.config.js
│   └── package.json
│
└── docker-compose.yml          # Full Stack Orchestration
```

---

## 🔧 Key Features

### **Authentication & Security**
- JWT-based authentication
- Spring Security integration
- Password encryption
- Token-based session management

### **Frontend Features**
- Single Page Application (SPA)
- Responsive design
- Client-side routing
- Centralized API configuration
- Environment-based configuration

### **Backend Features**
- RESTful API design
- JPA/Hibernate ORM
- MySQL database integration
- CORS enabled
- Exception handling

### **Deployment Features**
- Multi-stage Docker builds
- Nginx reverse proxy ready
- Gzip compression
- Static asset caching
- Health check endpoints
- Container orchestration with Docker Compose

---

## 🚀 Quick Start

### **Prerequisites**
- Docker Desktop (Windows)
- Docker Compose
- Git

### **Deploy Full Stack**
```powershell
# Clone repository
git clone https://github.com/Rahuly1606/CICDLab.git
cd CICDLab

# Start all services
docker-compose up -d --build

# Check status
docker-compose ps
```

### **Access Application**
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8081
- **Database:** localhost:3306

---

## 🐳 Docker Services

| Service | Container | Port | Description |
|---------|-----------|------|-------------|
| **MySQL** | carrental-mysql | 3306 | Database server |
| **Backend** | carrental-backend | 8081 | Spring Boot API |
| **Frontend** | carrental-frontend | 80→3000 | React + Nginx |

---

## 📝 Configuration

### **Database Configuration**
- **Database Name:** carrental
- **Username:** root
- **Password:** Rahul@1606
- **Port:** 3306

### **Backend Configuration**
- **Server Port:** 8081
- **JPA:** Hibernate with auto-update DDL
- **SQL Logging:** Enabled

### **Frontend Configuration**
- **API Base URL:** Configurable via `.env.production`
- **Build Output:** `dist/`
- **Dev Server:** Vite (port 5173)

---

## 🔐 Environment Variables

### **Frontend (.env.production)**
```env
VITE_API_BASE_URL=http://localhost:8081
```

### **Backend (application.properties)**
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/carrental
spring.datasource.username=root
spring.datasource.password=Rahul@1606
server.port=8081
```

---

## 🛠️ Development Commands

### **Frontend Development**
```powershell
cd carrental-frontend
npm install
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### **Backend Development**
```powershell
cd carrental-backend
./mvnw clean install      # Build project
./mvnw spring-boot:run    # Run application
```

### **Docker Commands**
```powershell
docker-compose up -d --build    # Build and start
docker-compose down             # Stop all services
docker-compose logs -f          # View logs
docker-compose ps               # Check status
docker-compose restart backend  # Restart service
```

---

## 📊 Build Optimization

### **Frontend**
- Multi-stage Docker build
- Production optimized bundle
- Minification with esbuild
- Nginx static file serving
- Gzip compression enabled
- Long-term asset caching (1 year)

### **Backend**
- Multi-stage Docker build
- Maven dependency caching
- Minimal JRE runtime image
- Health check ready

---

## 🌐 API Endpoints

### **Authentication**
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration

*(Add more endpoints as they are implemented)*

---

## 📦 Dependencies Summary

### **Backend Core**
- spring-boot-starter-web
- spring-boot-starter-data-jpa
- spring-boot-starter-security
- mysql-connector-j
- jjwt (API, Impl, Jackson)

### **Frontend Core**
- react, react-dom
- react-router-dom
- axios
- vite
- @vitejs/plugin-react

---

## 👥 Repository

- **GitHub:** [Rahuly1606/CICDLab](https://github.com/Rahuly1606/CICDLab)
- **Branch:** master

---

## 📄 License

*(Add your license here)*

---

## 🤝 Contributing

*(Add contribution guidelines here)*

---

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ using Spring Boot, React, and Docker**
