
# Smart Retail Platform

## Overview

This project is a smart retail platform designed to enhance the shopping experience by providing personalized product recommendations, an AI-powered virtual chatbot, and a virtual try-on feature. Developed as part of a team for the Walmart Hackathon, the platform leverages cutting-edge technologies to meet the needs of modern retail.

## Features


https://github.com/user-attachments/assets/0ab90008-3b84-487f-955f-5f80e7d1d59b


### 1. Personalized Product Recommendations
- **Technology**: Python
- **Description**: The platform uses machine learning algorithms to analyze user preferences and recommend products tailored to each user's tastes.

### 2. AI-Powered Virtual Chatbot
- **Technology**: AI/ML
- **Description**: A chatbot that responds to user queries in real-time, offering product information, assistance with navigation, and more. It enhances customer interaction and support.

### 3. Virtual Try-On
- **Technology**: Augmented Reality (AR)
- **Description**: Users can virtually try on products, such as clothing or accessories, to see how they would look in real life, improving the online shopping experience.

### 4. Frontend
- **Technology**: React
- **Description**: A responsive and user-friendly interface built with React, providing seamless interaction and easy navigation through the platform.

### 5. Backend
- **Technology**: Node.js, Express.js
- **Description**: A robust backend built with Node.js and Express.js, handling user data, product information, and API integrations.

### 6. Database
- **Technology**: MongoDB
- **Description**: MongoDB is used as the database to store and manage user data, product information, and other relevant data securely and efficiently.

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- Python

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/smart-retail-platform.git
   cd smart-retail-platform
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set Up Environment Variables**
   - Create a `.env` file in the root directory and add the necessary environment variables.
   - Example:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_uri
     EMAIL_SERVICE_API_KEY=your_email_service_api_key
     ```

5. **Run the Backend**
   ```bash
   cd backend
   npm start
   ```

6. **Run the Frontend**
   ```bash
   cd ../frontend
   npm start
   ```

