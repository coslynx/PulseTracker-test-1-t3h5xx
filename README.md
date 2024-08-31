<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
FitTrack
</h1>
<h4 align="center">A web application designed to empower fitness enthusiasts to effortlessly track their fitness goals, monitor their progress, and share their achievements with friends.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="">
  <img src="https://img.shields.io/badge/Frontend-React,_Javascript,_Html,_Css-red" alt="">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="">
  <img src="https://img.shields.io/badge/Database-PostgreSQL-black" alt="">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/FitTrack-MVP?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/FitTrack-MVP?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/FitTrack-MVP?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>


## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The repository contains a Minimum Viable Product (MVP) called "FitTrack" that provides a comprehensive solution for fitness goal tracking using the following tech stack: Next.js, React, JavaScript, HTML, CSS, Node.js, and PostgreSQL. 

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🔐 | **User Authentication**   | Securely create and manage user accounts with email and password authentication or utilize social logins for seamless account creation. |
| 🎯 | **Goal Setting**       | Define personalized fitness goals with clear objectives, timelines, and tracking metrics.                                      |
| 📈 | **Progress Tracking**    | Track user progress against set goals using visually engaging dashboards, graphs, and reports that offer insights into individual progress. |
| 🤝 | **Social Sharing**     | Share progress, achievements, and motivational messages with friends and a supportive community.                                 |
| 🎨 | **Customization**      | Personalize the experience with custom themes, settings, and preferences.                                                 |
| 🌐 | **Accessibility**     | Optimized user experience across various devices and platforms, including smartphones, tablets, and desktops.                    |
| 🔌 | **Integrations**       | Seamlessly integrate with popular fitness trackers and devices like Fitbit, Garmin, and Apple Health.                     |
| 📊 | **Analytics**         | Provide users with insightful analytics that offer valuable data about their progress and performance.                       |
| ⚡️ | **Performance**      | Fast loading times and seamless user interactions for a smooth and enjoyable user experience.                             |
| 🔒 | **Security**         | Prioritize user data security by implementing secure user authentication, data encryption, and industry-standard security best practices. | 
| 🔄 | **Scalability**       | Designed to be scalable, accommodating a growing user base and new features without compromising performance.                      |
| 👨‍🎨 | **User-Centric Experience** |  A user-friendly interface with intuitive navigation and a mobile-first approach.                                                |


## 📂 Structure
```text
└─ components
   ├─ Button.tsx
   ├─ Header.tsx
   ├─ Layout.tsx
   ├─ GoalInput.tsx
   ├─ ProgressChart.tsx
   └─ SocialShareButton.tsx
└─ pages
   ├─ api
   │   ├─ auth.ts
   │   ├─ goals.ts
   │   └─ progress.ts
   ├─ _app.tsx
   ├─ index.tsx
   ├─ dashboard.tsx
   └─ login.tsx
└─ styles
   └─ global.css
└─ utils
   ├─ helpers.ts
   ├─ api.ts
   ├─ auth.ts
   └─ validation.ts
└─ config
   └─ next-auth.config.ts
└─ middleware
   └─ authentication.ts
└─ .env
└─ package.json
└─ README.md
└─ tailwind.config.ts
└─ tsconfig.json
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/coslynx/FitTrack-MVP.git`
2. Navigate to the MVP directory:
   - `cd FitTrack-MVP`
3. Install dependencies:
   - `npm install`

## 🏗️ Usage
### 🏃‍♂️ Running the MVP
1. Start the development server:
   - `npm start`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in 'config.js' or '.env'.

### 📚 Examples
- 📝 **Example 1**: How to set a fitness goal.
- 📝 **Example 2**: How to track progress through the dashboard.
- 📝 **Example 3**: How to share your achievements with friends.

## 🌐 Hosting
### 🚀 Deployment Instructions

#### Vercel
1. Login to Vercel.
2. Select "New Project".
3. Import the project from Git by providing the repository URL.
4. Deploy the application.

#### Netlify
1. Login to Netlify.
2. Click "New site from Git".
3. Choose GitHub as the source.
4. Select the repository.
5. Deploy the application.

#### GitHub Pages
1. Configure the GitHub Pages settings in the repository.
2. Push the changes to the repository.
3. Access the deployed application through the generated GitHub Pages URL.

### 🔑 Environment Variables
- `DB_HOST`: Database host
- `DB_USER`: Database user
- `DB_PASS`: Database password

## 📜 API Documentation
### 🔍 Endpoints
- **GET /api/auth**: Handles user authentication actions (signup, login, logout).
- **GET /api/goals**: Manages user fitness goals (create, update, delete, retrieve).
- **GET /api/progress**: Retrieves user progress data for visualization.

### 🔒 Authentication
Use JWT tokens for authentication.

### 📝 Examples
- `curl -X GET http://localhost:3000/api/auth`

## 📜 License
This MVP is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).

## 👥 Authors
- **Author Name** - [CosLynx.com](https://coslynx.com)
- **Creator Name** - [CosLynxAI](https://github.com/coslynx)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
<img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
<img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
</div>