# Shopipi - Full Stack E-Commerce Web App (MERN Stack)

Shopipi is a full-stack e-commerce web application built using the **MERN stack** (MongoDB, Express, React, Node.js). The app allows users to manage products in an online store, including adding, updating, deleting, and displaying products with details such as product name, price, and image.

## Features

- **CRUD Operations:** Add, edit, delete, and view products.
- **Product Details:** Each product has a name, price, and image.
- **Responsive Design:** Fully responsive front-end using React and TailwindCSS.
- **Backend:** RESTful API using Express.js to handle requests for CRUD operations.
- **Database:** MongoDB to store product data.

## Technologies Used

- **Frontend:**
  - React.js
  - TailwindCSS
  - React Router
  - React Toastify (for notifications)
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - dotenv (for environment variables)
- **Others:**
  - fetch (for HTTP requests)
  - flowbite-react (for modal components)
  - Zustand (for state management)

## Setup and Installation

### Prerequisites

- **Node.js** installed (LTS version recommended).
- **MongoDB** instance running (locally or using a cloud service like MongoDB Atlas).

### Clone the Repository

```bash
git clone https://github.com/jasgigli/shopipi.git
cd shopipi
```

### Backend Setup

1. Go to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and add the following environment variables:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

   The backend server will be running on `http://localhost:5000`.

### Frontend Setup

1. Go to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the React app (for production):

   ```bash
   npm run build
   ```

4. Start the React app:

   ```bash
   npm start
   ```

   The frontend will be running on `http://localhost:3000`.

## Usage

1. **Adding a Product:**

   - Navigate to the "Add Product" page.
   - Fill out the product details (Name, Price, Image URL).
   - Click "Add Product" to add it to the database.

2. **Editing a Product:**

   - Click the "Edit" button next to any product.
   - Update the product's name, price, or image.
   - Click "Save" to update the product in the database.

3. **Deleting a Product:**

   - Click the "Delete" button next to the product you want to remove.
   - The product will be deleted from the database.

4. **Viewing Products:**
   - The home page displays a list of all the products in the store.
   - Each product shows its name, price, and image.

## File Structure

```
shopipi/
│
├── client/                  # React frontend
│   ├── public/              # Public files (index.html)
│   ├── src/                 # React components, services
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   └── App.js           # Main React component
│   └── package.json         # React project dependencies
│
├── server/                  # Express backend
│   ├── config/              # Database connection
│   ├── models/              # Mongoose models (Product.js)
│   ├── routes/              # Express routes (product.route.js)
│   ├── server.js            # Main server file
│   └── .env                 # Environment variables
│
└── README.md                # This file
```

## Development

To contribute or modify the app, clone the repository, and set up the backend and frontend separately.

1. For local development, ensure MongoDB is running and the backend server (`npm run dev`) is listening on a port.
2. Start the frontend (`npm start`) for local development.
3. Make sure to push your changes to the appropriate branch.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React.js** - A JavaScript library for building user interfaces.
- **TailwindCSS** - A utility-first CSS framework for styling.
- **MongoDB** - NoSQL database for storing product data.
- **Express.js** - Fast, unopinionated, minimalist web framework for Node.js.

---

Email: overview.jjj@gmail.com
