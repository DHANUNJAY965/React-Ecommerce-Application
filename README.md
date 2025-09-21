# React E-commerce Application

A full-stack e-commerce web application built with React.js frontend and Node.js/Express.js backend, featuring product management, shopping cart functionality, and admin panel capabilities.

## 🚀 Features

### Customer Features
- **Product Catalog**: Browse products with category filtering and search functionality
- **Product Details**: View detailed product information with images
- **Shopping Cart**: Add/remove products with real-time cart updates
- **Search**: Search products by title, description, or category
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

### Admin Features
- **Admin Authentication**: Secure login/signup system with JWT tokens
- **Product Management**: 
  - Add new products with image upload
  - Edit existing products
  - Delete products
  - View all products in a data table
- **Image Upload**: Cloudinary integration for product images
- **Admin Panel**: Modern UI with Material-UI components

## 🛠️ Tech Stack

### Frontend
- **React.js** (v18.2.0) - UI framework
- **React Router DOM** (v6.20.0) - Client-side routing
- **Tailwind CSS** (v3.3.5) - Utility-first CSS framework
- **Material-UI** - Admin panel components
- **Axios** (v1.6.2) - HTTP client for API calls
- **Redux Toolkit** (v2.0.0) - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v4.19.2) - Web framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** (v9.0.2) - Authentication tokens
- **Cloudinary** (v2.2.0) - Image storage and management
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **Express File Upload** (v1.5.0) - File handling

### Additional Tools
- **Zod** (v3.23.8) - Schema validation
- **Dotenv** (v16.4.5) - Environment variables

## 📁 Project Structure

```
React-Ecommerce-Application/
├── src/
│   ├── Admin Panel/           # Admin dashboard components
│   │   └── AdminPanel.jsx
│   ├── Product/               # Product-related components
│   │   ├── Cart/             # Shopping cart functionality
│   │   ├── products/         # Product listing
│   │   └── Singprod/         # Single product view
│   ├── Sections/             # UI sections
│   │   ├── Body/             # Homepage body
│   │   ├── Footer/           # Site footer
│   │   ├── Header/           # Navigation header
│   │   ├── Login/            # Authentication components
│   │   ├── Prodsec/          # Product section
│   │   └── WebsiDescrip/     # Website description
│   ├── Server/               # Backend server
│   │   ├── Database/         # Database configuration
│   │   ├── MiddleWares/      # Authentication & file upload
│   │   ├── Models/           # Database models
│   │   └── Routes/           # API endpoints
│   ├── App.js                # Main application component
│   └── index.js              # Application entry point
├── public/                   # Static assets
└── package.json              # Frontend dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account (for image storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd React-Ecommerce-Application
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd src/Server
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the `src/Server` directory with the following variables:
   ```env
   DB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CloudName=your_cloudinary_cloud_name
   Api_Key=your_cloudinary_api_key
   Api_Secret=your_cloudinary_api_secret
   PORT=3004
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd src/Server
   node index.js
   ```
   The server will run on `http://localhost:3004`

2. **Start the frontend application**
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`

## 📡 API Endpoints

### Product Endpoints
- `GET /api/v1/products` - Get all products
- `GET /api/v1/products/:id` - Get single product by ID
- `POST /api/v1/UploadtoDb` - Add new product (Admin only)
- `PUT /api/v1/product/update` - Update product (Admin only)
- `DELETE /api/v1/product/delete` - Delete product (Admin only)

### Authentication Endpoints
- `POST /api/v1/Admin/signin` - Admin login
- `POST /api/v1/Admin/signup` - Admin registration

## 🗄️ Database Models

### Product Model
```javascript
{
  title: String (required),
  price: Number (required),
  description: String (required),
  category: String (required),
  ImageUrl: String (required)
}
```

### Admin Model
```javascript
{
  Email: String (required, unique),
  password: String (required),
  username: String (required)
}
```

## 🎨 UI Components

### Main Pages
- **Home Page**: Product catalog with search and filtering
- **Product Detail**: Individual product information
- **Shopping Cart**: Cart management with total calculation
- **Admin Panel**: Product management interface

### Key Features
- Responsive design for all screen sizes
- Real-time search functionality
- Category-based product filtering
- Shopping cart with local storage persistence
- Image upload with Cloudinary integration
- Toast notifications for user feedback

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for admin authentication:
- Secure login/signup system
- Protected admin routes
- Token-based session management
- Automatic logout functionality

## 🛒 Shopping Cart

- Add/remove products from cart
- Local storage persistence
- Real-time cart count updates
- Total price calculation
- Checkout functionality (UI ready)

## 📱 Responsive Design

Built with Tailwind CSS for:
- Mobile-first approach
- Consistent styling
- Fast development
- Utility-first CSS classes

## 🚀 Deployment

The application is configured for deployment on platforms like:
- **Frontend**: Vercel, Netlify
- **Backend**: Vercel, Heroku, Railway
- **Database**: MongoDB Atlas
- **Images**: Cloudinary

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🐛 Known Issues

- Some merge conflicts in the main App.js file need resolution
- Package.json has merge conflict markers that need cleanup
- Cart total calculation could be optimized

## 🔮 Future Enhancements

- User authentication for customers
- Payment gateway integration
- Order management system
- Product reviews and ratings
- Wishlist functionality
- Email notifications
- Advanced search filters
- Product variants (size, color, etc.)

## 📞 Support

For support or questions, please open an issue in the repository.

---

**Note**: This is a full-stack e-commerce application demonstrating modern web development practices with React, Node.js, and MongoDB integration.