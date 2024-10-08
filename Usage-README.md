
# **CityScape 3D**

## **Overview**
**CityScape 3D** was inspiration for CityScape stemmed from the desire to create a virtual tool that merges immersive 3D environments with practical, real-world applications. With the growing importance of smart city infrastructure, emergency management, and virtual tourism, we saw an opportunity to build a platform that combines these elements in a single, photorealistic, 3D map interface.

Additionally, the project is inspired by the critical need for emergency centers to have detailed satellite views of natural disaster areas, which can greatly aid in real-time disaster management and emergency response. By providing emergency teams with accurate and up-to-date visual information, CityScape can help optimize relief efforts and improve situational awareness during crises like floods, wildfires, or earthquakes.


## **Features**
- Photorealistic 3D map rendering with dynamic lighting and atmospheric effects.
- Virtual tours of landmarks and properties with VR integration.
- Augmented reality navigation with real-time route planning.
- Real-time traffic, weather, and city infrastructure updates.
- AI-driven place suggestions based on user preferences.
- Explore landmarks, national parks, and cities in immersive 3D.

---

## **Tech Stack**
- **React** with **TypeScript**
- **Google Maps Platform** for 3D map integration
- **WebGL** for rendering photorealistic effects
- **AR.js** for augmented reality features
- **Three.js** for VR and 3D rendering
- **API integration** for real-time data (traffic, weather, etc.)

---

## **Getting Started**

### **Prerequisites**
To run this project locally, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (package manager)

### **Google Maps API Key**
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Enable the **Google Maps JavaScript API**.
3. Create a new API key for your project.
4. Add your API key in the `.env` file under the key `REACT_APP_GOOGLE_MAPS_API_KEY`.

---

## **Installation and Running the Project**

### **1. Clone the repository**
```bash
git clone https://github.com/your-username/cityscape-3d.git
```

### **2. Navigate into the project directory**
```bash
cd cityscape-3d
```

### **3. Install dependencies**
Using **npm**:
```bash
npm install
```
Or, using **yarn**:
```bash
yarn install
```

### **4. Set up the environment variables**
Create a `.env` file in the root directory and add your Google Maps API key:
```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### **5. Start the development server**
To run the app locally, use the following command:
```bash
npm start
```
Or, using **yarn**:
```bash
yarn start
```

### **6. Access the app**
Once the development server starts, the app will be accessible at:
```
http://localhost:3000
```

---

## **Build for Production**
To create an optimized production build, run:
```bash
npm run build
```
Or, using **yarn**:
```bash
yarn build
```
The build files will be generated in the `build` directory.

---

## **Folder Structure**
```
cityscape-3d/
│
├── public/
│   ├── index.html
│   ├── assets/              # Images, icons, etc.
│   └── ...
│
├── src/
│   ├── components/          # React components
│   ├── hooks/               # Custom hooks
│   ├── pages/               # Application pages
│   ├── services/            # External API services
│   ├── styles/              # Global and component-specific styles
│   ├── utils/               # Helper functions
│   ├── App.tsx              # Main application component
│   └── index.tsx            # Entry point for the app
│
├── .env                     # Environment variables
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation
└── ...
```

---

## **Troubleshooting**

- If the 3D maps don’t load, make sure that your **Google Maps API key** is correctly set in the `.env` file.
- If you encounter any CORS issues with API requests, ensure that your API allows requests from `localhost:3000` during development.

---

## **Contributing**
If you'd like to contribute to **CityScape 3D**, feel free to create a pull request or report any issues.

---

## **License**
This project is licensed under the MIT License.

---

## **Step up: Clone  the Project**
Step up: Clone  the Project

- git clone <repository-url>
- cd /path-to-your-project-directory
- npm install
- copy .env.example into .env
- npm start
- http://localhost:3000 on browser


Step 2: Test the Application
```npm run build```

Step 8: Build for Production (Optional)
``` npm run build ```


