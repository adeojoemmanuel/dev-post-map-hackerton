**step-by-step guide** to **run the code** in a **production environment** after the React app is built. Here's the process:

---

### Step 1: Build the React App

1. **Ensure the App is Ready for Production**

   Before building the app, make sure your environment variables (like the Google Maps API key) are properly set in your `.env` file.

   ```bash
   REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
   ```

2. **Run the Build Command**

   Build the app for production using the following command:

   ```bash
   npm run build
   ```

   This will create a `build/` directory in your project folder containing the production-ready files (HTML, CSS, JavaScript, etc.).

---

### Step 2: Serve the Build Locally (Optional)
1. **Clone git repo**

```
   git clone git@github.com:adeojoemmanuel/dev-post-map-hackerton.git
```

2. **Install a Static Server**

   To preview the production build locally, you can use a simple static server like `serve`:

   Install the `serve` package globally:

   ```bash
   npm install -g serve
   ```

3. **Serve the Build Directory**

   After installation, run the following command to serve the `build/` directory:

   ```bash
   serve -s build
   ```

4. **View the App**

   Open the browser and go to `http://localhost:5000` to see the production version of your React app.

---

### Step 3: Deploy the App to a Web Server

After building the app, you'll want to deploy it to a server for public access. Here are common deployment methods:

#### Option 1: Deploy to **Netlify**

1. **Install the Netlify CLI (Optional)**

   If you want to use Netlify’s command-line interface, install it:

   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy via the CLI**

   Deploy your app by running:

   ```bash
   netlify deploy --dir=build
   ```

   Follow the CLI instructions to configure the deployment.

#### Option 2: Deploy to **Vercel**

1. **Install the Vercel CLI (Optional)**

   If you prefer using the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. **Deploy via the CLI**

   Deploy your app using:

   ```bash
   vercel
   ```

   Vercel will prompt you through the deployment process, including project setup and linking.

#### Option 3: Deploy to **Firebase Hosting**

1. **Install the Firebase CLI**

   Install the Firebase CLI globally:

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**

   Log in using your Google account:

   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**

   Inside your project folder, initialize Firebase:

   ```bash
   firebase init
   ```

   During the initialization, select **Hosting**, and when asked for the public directory, type `build`.

4. **Deploy**

   Deploy the app using:

   ```bash
   firebase deploy
   ```

#### Option 4: Deploy to an **Apache or Nginx Server**

1. **Copy the Build Files**

   After the build is done, copy the contents of the `build/` folder to the web root folder of your server, such as `/var/www/html/` for Apache or Nginx.

2. **Configure Apache or Nginx**

   If needed, configure your server to serve the React app properly (you may need to configure rewrite rules for single-page apps).

---

### Step 4: Test the Live App

Once deployed, you can access the app from the live URL provided by the hosting service (Netlify, Vercel, Firebase, etc.), or directly from the server’s IP/domain if self-hosted.

---

### Summary

To run your React app after building it:
1. **Build** your app using `npm run build`.
2. **Serve** it locally using `serve` or deploy it using **Netlify**, **Vercel**, **Firebase Hosting**, or any other web server.
3. **Access** the production version via the hosting service's live URL or your own web server.

# build locally broken down 

### Serve the Build Locally 

1. **Install a Static Server**

   To preview the production build locally, you can use a simple static server like `serve`:

   Install the `serve` package globally:

   ```bash 
   npm install -g serve
   ```

2. **Serve the Build Directory**

   After installation, run the following command to serve the `build/` directory:

   ```bash
   serve -s build
   ```

3. **View the App**

   Open the browser and go to `http://localhost:5000` to see the production version of your React app.

---