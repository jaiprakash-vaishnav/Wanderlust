# 🌍 Wanderlust

A travel-themed web application built with Node.js, Express, MongoDB, and EJS. Wanderlust helps users explore destinations, view details, and search for places with a responsive and dynamic interface.

🔗 [Live Demo](https://wanderlust-sooty.vercel.app)

---

## 📦 Features

- 🗺️ Explore travel destinations
- 🔍 Search functionality
- 📱 Responsive design
- 🧩 Modular architecture with MVC pattern
- ☁️ Cloudinary integration for image hosting
- ☁️  MongoDB Atlas for Cloud database
---

## 🚀 Getting Started

Follow these steps to run Wanderlust locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/jaiprakash-vaishnav/Wanderlust.git
cd Wanderlust
```
### 2️⃣ Install Dependencie
```
npm install
```

###3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add the following 
```.env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

MAP_TOKEN=your_mapbox_api_token

ATLASDB_URL=your_cloud_db_url

SECRET=your_random_secret_xyz
```

###4️⃣ Start MongoDB
Ensure MongoDB is running locally or provide a remote connection string in your app.
###5️⃣ Run the Application
```
node app.js
```

🔗 [Visit in your browser.](http://localhost:3000).

###🖼️ Icons & UI
- 🌍 Travel theme
- 🔍 Search bar
- 🏞️ Destination cards
- 📱 Mobile-friendly layou

###🛠️ Technologies Used
- Node.js
- Express
- MongoDB
- EJS
- Cloudinary
- Bootstrap (optional)



