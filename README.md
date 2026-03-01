# RailMatriX - Railway Reservation System

RailMatriX is a frontend railway reservation web app built with HTML, CSS, JavaScript, and Firebase Authentication/Firestore.

It supports user registration/login, train search, class selection, passenger detail entry, ticket download, and a basic admin dashboard.

## Features

- User authentication with Firebase Auth (register/login/logout)
- User profile display in navbar using Firestore user data
- Protected "Book Ticket" CTA visibility based on auth state
- Train search page and multi-train selection UI
- Passenger details workflow with validation
- Booking completion page with downloadable ticket image
- Admin login modal and separate admin dashboard page

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules) 
- Firebase Auth
- Firebase Firestore
- Firebase Hosting

## Project Structure

```text
.
├── public/
│   ├── index.html
│   ├── searchTrain.html
│   ├── bookTrain.html
│   ├── passengerDetails.html
│   ├── downloadTicket.html
│   ├── admin.html
│   ├── admin.js
│   ├── admin.css
│   ├── navbar.css
│   ├── Js/
│   │   ├── firebase.js
│   │   ├── auth.js
│   │   ├── navbarAuth.js
│   │   └── homeAuth.js
│   └── Images/
├── firebase.json
├── .firebaserc
├── package.json
└── README.md
```

## Booking Flow

1. Home (`index.html`) -> user registers/logs in.
2. "Book Ticket" button opens train search (`searchTrain.html`).
3. User selects train class (`bookTrain.html`).
4. User adds passenger details (`passengerDetails.html`).
5. Payment success page shows downloadable ticket (`downloadTicket.html`).

## Firebase Setup

This project currently uses Firebase config directly in:

- `public/Js/firebase.js`

Current Firebase project id in repo config:

- `railmatrix-6487f`

If you want to use your own Firebase project:

1. Create a Firebase project.
2. Enable Authentication (Email/Password).
3. Create Firestore database.
4. Replace `firebaseConfig` values in `public/Js/firebase.js`.

## Run Locally

This is a static site, so you can run it with any static web server.

Option 1: VS Code Live Server

1. Open project in VS Code.
2. Right-click `public/index.html`.
3. Click `Open with Live Server`.

Option 2: Firebase local hosting

```bash
firebase emulators:start --only hosting
```

Option 3: Any static server (example with Node package)

```bash
npx serve public
```

## Deploy (Firebase Hosting)

```bash
firebase login
firebase use railmatrix-6487f
firebase deploy
```

## Admin Access (Current Demo Logic)

- Admin email in modal: `admin@railmatrix.com` (read-only display)
- Admin password in frontend code: `admin123`

This password is client-side and intended only for demo purposes. Move admin auth/authorization to a secure backend for production use.

## Notes

- `node_modules/` is present locally but should not be committed.
- `.env` exists in repo root but is not currently consumed by frontend modules.

