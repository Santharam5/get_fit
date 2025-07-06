# 🏋️‍♂️ GetFit

A fitness tracking web application where users can sign up, log in, Find Their BMI calculator and equiment details. Built with React frontend, Java + Spring boot backend, and MySQL cloud database.

---

## 🔗 Live Demo

- **Frontend:** [View Here](https://get-fit-git-main-santharam-bs-projects.vercel.app/)
- **Backend API:** [API Endpoint](https://getfit-backend-vso9.onrender.com)

⚠️ **Note:** Backend is hosted on Render free plan and may sleep after inactivity. Please wait for a one or two minutes when first loading.

---

## 🛠️ Tech Stack

- **Frontend:** React, CSS, Bootstrap
- **Backend:** Java , Spring boot
- **Database:** MySQL (Cloud hosted on Railway)
- **Hosting:** Render (backend), Vercel (frontend)

---

## ✨ Features

- User signup and login
- View product details
- View equipments details
- BMI calculator
- Admin panel to view user data 

---

## ⚙️ Installation & Setup

### 🔹 Backend

1. Clone the backend repository:

    ```bash
    git clone https://github.com/Santharam5/getfit_backend.git
    cd getfit_backend
    ```

2. Build the project using Maven or your IDE:

    ```bash
    ./mvnw clean install
    ```
    or use your IDE to build the project.

3. Configure your `application.properties` file with database details:

    ```
    spring.datasource.url=jdbc:mysql://your_db_host:3306/your_db_name
    spring.datasource.username=your_db_user
    spring.datasource.password=your_db_password
    server.port=5000
    ```

4. Start the backend server:

      ```bash
    ./mvnw spring-boot:run
    ```

    or run the main class `GetfitApplication.java` in your IDE.

5. The backend runs on `http://localhost:5000` (default).

---

### 🔹 Frontend

1. Clone the frontend repository:

    ```bash
    git clone https://github.com/Santharam5/getfit.git
    cd getfit
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure API endpoint:

   - In your frontend code (e.g., `api.js` or component files), ensure the backend URL is set correctly, for example:

    ```js
    const apiBaseUrl = "https://getfit-backend-vso9.onrender.com";
    ```

4. Start the React development server:

    ```bash
    npm start
    ```

5. The frontend runs on `http://localhost:3000`.

---

## 💾 Database

- **MySQL** hosted on Railway.
- Import `schema.sql` to create necessary tables.
- Update `.env` in the backend with your database credentials.
- Example tables:
  - `users` for authentication
  - `goals` for fitness goals

---



## 🚀 Future Improvements


- Email verification on signup
- Profile picture uploads with cloud storage

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact 👋

- **Name:** Santharam B
- **LinkedIn:** [Santharam LinkedIn](https://www.linkedin.com/in/santha-ram-b4a894263/)
- **Email:** santharam141@gmail.com

---
## Have A Nice Day 😊❣️

