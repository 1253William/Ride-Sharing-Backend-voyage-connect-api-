# Ride-Sharing-Backend(voyage-connect)
## voyage-connect-api

Voyage-Connect is a real world simulation of a  modern, scalable Node.js/Express backend API for ride-sharing platforms. Built with MongoDB and JWT authentication.

## 🚀 Features

- **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Riders & Drivers)
  - Secure password hashing

- **Ride Management**
  - Real-time ride booking
  - Dynamic pricing based on demand
  - Comprehensive ride status tracking
  - Ride history and analytics

- **Advanced Features**
  - MongoDB aggregation for analytics
  - API documentation with Swagger
  - Extensible notification system
  - Scalable architecture

## 🛠️ Tech Stack

- Node.js & Express
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Swagger/OpenAPI
- Docker support

## 📦 Installation

1. Clone the repository
```
git clone https://github.com/yourusername/voyage-connect-api.git
cd voyage-connect-api
```

2. Install dependencies
```
npm install
```

3. Set up environment variables
```
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```
npm run dev
```

## 🔧 Configuration

Create a `.env` file in the root directory

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/voyage_connect
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

## 📚 API Documentation

Once the server is running, access the Swagger documentation at
```
http://localhost:3000/api-docs
```

Key endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `POST /api/rides` - Create a new ride
- `PATCH /api/rides/:id/status` - Update ride status
- `GET /api/rides/history` - Get ride history
- `GET /api/analytics/metrics` - Get platform metrics

```

## 🚀 Deployment

1. Build the Docker image
```
docker build -t voyage-connect-api .
```

2. Run the container:
```
docker run -p 3000:3000 voyage-connect-api
```

## 📈 Roadmap for Advanced Features

- [ ] Real-time driver tracking
- [ ] Payment integration
- [ ] Advanced matching algorithm
- [ ] Push notifications
- [ ] Rating system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


