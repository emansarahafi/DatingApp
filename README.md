# DatingApp

A React Native dating application built with **Expo** during the Mobile Software Development (CS325) course at MedTech. This app features user profiles, matchmaking capabilities, and a modern mobile interface with dark mode support.

> **Note**: This project is built using **Expo**, a framework that simplifies React Native development with managed workflows, easy setup, and cross-platform compatibility.

## 🚀 Features

- **User Authentication**: Sign-in functionality
- **Profile Browsing**: Browse all available user profiles
- **Top 10 Matches**: View curated list of top matches
- **User Characteristics**: Display detailed user attributes and preferences
- **Navigation**:
  - Tab navigation for quick access
  - Drawer navigation for menu options
- **Dark Mode**: Toggle between light and dark themes
- **Responsive UI**: Built with React Native Elements and Paper for a polished interface

## 🛠️ Tech Stack

- **Framework**: React Native with **Expo SDK ~50.0.2**
- **Build Tool**: Expo (managed workflow)
- **Navigation**: React Navigation (Native Stack, Bottom Tabs, Drawer)
- **UI Libraries**:
  - React Native Elements (@rneui)
  - React Native Paper
- **HTTP Client**: Axios
- **Data Generation**: Faker.js for dummy data
- **State Management**: React Hooks
- **Additional**: React Native Modal, Reanimated, Gesture Handler

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for macOS) or Android Studio (for Android development)

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/emansarahafi/DatingApp.git
cd DatingApp
```

2. Install dependencies:

```bash
npm install
```

## 🎮 Running the App

This app uses **Expo** for development and testing.

Start the Expo development server:

```bash
npm start
# or
expo start
```

Run on specific platforms:

```bash
# iOS (requires macOS)
npm run ios
# or
expo start --ios

# Android (requires Android Studio/emulator)
npm run android
# or
expo start --android

# Web browser
npm run web
# or
expo start --web
```

### Using Expo Go App

You can also run the app on your physical device:

1. Install **Expo Go** from the App Store (iOS) or Google Play Store (Android)
2. Run `npm start` or `expo start`
3. Scan the QR code with your device's camera (iOS) or Expo Go app (Android)

## 📁 Project Structure

```
DatingApp/
├── App.js                          # Main application entry
├── components/
│   ├── DrawNavigation.js           # Drawer navigation component
│   ├── Form.js                     # Form component
│   ├── User.js                     # User component
│   ├── all-profiles/
│   │   ├── AllProfilesMain.js     # Main profiles view
│   │   └── ListProfiles.js        # Profile list component
│   ├── characteristics/
│   │   └── AllCharacteristics.js  # User characteristics display
│   ├── header-footer/
│   │   ├── Footer.js              # Footer component
│   │   └── Header.js              # Header component
│   ├── nav/
│   │   └── TabNavigation.js       # Tab navigation component
│   ├── sign-in/
│   │   └── SignIn.js              # Sign-in screen
│   └── top-10/
│       ├── ListUsers.js           # User list component
│       └── Top10Main.js           # Top 10 matches view
├── assets/                         # Images and other assets
└── package.json                    # Project dependencies

```

## 🎨 Features Overview

### Sign In

User authentication screen to access the dating app.

### All Profiles

Browse through all available user profiles with detailed information.

### Top 10 Matches

Curated list of the top 10 recommended matches based on compatibility.

### User Characteristics

View detailed user attributes, interests, and preferences.

### Dark Mode

Toggle between light and dark themes for comfortable viewing in any lighting condition.

## 📱 Navigation Structure

The app uses a combination of navigation patterns:

- **Stack Navigation**: For screen transitions (Sign In → Main App)
- **Drawer Navigation**: For accessing different sections
- **Tab Navigation**: For quick switching between main features

## 🧪 Development

This project was created as part of the Mobile Software Development (CS325) course at MedTech. It demonstrates:

- React Native fundamentals with Expo
- Expo managed workflow and SDK features
- Navigation patterns
- State management
- API integration
- UI/UX best practices
- Theme implementation

### Why Expo?

This project uses **Expo** because it provides:

- **Quick Setup**: No need for Xcode or Android Studio configuration
- **Easy Testing**: Test on physical devices via Expo Go app
- **Cross-Platform**: Build for iOS, Android, and Web from a single codebase
- **Built-in APIs**: Access to camera, location, notifications, and more
- **Hot Reloading**: See changes instantly during development
- **Simplified Deployment**: Easy build and deployment process

## 📄 License

This project is for educational purposes as part of a Master's degree course.

## 🙏 Acknowledgments

- MedTech - Mobile Software Development (CS325) course
- Faker.js for generating dummy user data
- React Native community for excellent libraries and tools
