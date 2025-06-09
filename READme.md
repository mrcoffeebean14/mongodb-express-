 Mini WhatsApp - Chat App Clone
A simple WhatsApp-style chat web application built using Node.js, Express, MongoDB, and EJS templating engine. This project demonstrates basic CRUD operations, dynamic routing, form handling, and front-end rendering for a messaging interface.

🚀 Features
View all chat messages

Create a new message (sender, receiver, content)

View individual chat messages with timestamp

Edit a message

Delete a message

Responsive layout with basic CSS styling

RESTful routing using method-override

🛠️ Tech Stack
Backend: Node.js, Express.js

Frontend: EJS (Embedded JavaScript)

Database: MongoDB with Mongoose ODM

Styling: CSS (custom and responsive)

Middleware: method-override, body-parser

📂 Project Structure
php
Copy
Edit
├── model/
│   └── chats.js           # Mongoose schema for chat messages
├── views/
│   ├── chats.ejs          # List view of all chats
│   ├── msg.ejs            # Single chat view
│   ├── new.ejs            # Form to create new message
│   └── edit.ejs           # Edit existing message
├── public/
│   └── styles.css         # CSS for styling pages
├── app.js                 # Main Express server file
└── README.md              # Project description




🧑‍💻 How to Run Locally
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/mini-whatsapp.git
cd mini-whatsapp
Install dependencies

bash
Copy
Edit
npm install
Start MongoDB (make sure MongoDB is running locally)

Run the app

bash
Copy
Edit
node app.js
Open http://localhost:3000/chats in your browser 🎉

📸 Screenshots
Add screenshots here showing:

Chat list page

Message detail

Edit message form

Create message page

📌 Future Improvements
Add user authentication

Real-time messaging with Socket.io

UI upgrade with Bootstrap or Tailwind

Mobile-first responsive design

Image/file sharing support

📃 License
This project is licensed under the MIT License.

