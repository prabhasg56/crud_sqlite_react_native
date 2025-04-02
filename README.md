# React Native CRUD App (Offline Storage with SQLite & Redux)

## 📌 Project Overview
This is a simple **React Native** application that demonstrates:
- **Offline data storage** using SQLite (`react-native-sqlite-storage` and `@react-native-async-storage/async-storage`).
- **State management** using Redux.
- **CRUD operations** (Create, Read, Update, Delete).
- **Offline functionality** (the app works without an internet connection).

## 🚀 Features
- **Data Listing Screen** → Displays a list of stored items.
- **Add / Edit Item Screen** → Allows users to add and update items.
- **Delete Item** → Users can remove an item permanently.
- **Offline Storage** → Uses SQLite for storing and retrieving data offline.
- **Redux State Management** → Manages app state effectively.

---

## 📥 Installation Guide
### Prerequisites:
- **Node.js** (v18 or later)
- **React Native CLI** (Installed globally)
- **Android Studio** (For running the app on a device/emulator)

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/prabhasg56/crud_sqlite_react_native.git
cd crud_sqlite_react_native
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Install SQLite Package (if not installed)
```sh
npm install react-native-sqlite-storage
```

### 4️⃣ Link Dependencies (For iOS only)
```sh
cd ios && pod install
```

### 5️⃣ Run the Application
#### For Android:
After successfully installing, the app will be installed on your emulator or physical device. Simply open the application:
```sh
npx react-native run-android
```

#### For iOS:
May not work due to missing icons/permissions/functionality:
```sh
npx react-native run-ios
```


### Note For iOS Devices
- Some elements, such as icons, may not work properly because they are not configured correctly.

### Android SDK Configuration Issue
If you are facing Android SDK configuration issues, follow these steps:

#### Step 1: Locate the Android Folder
Open your terminal or file explorer and navigate to the `android` folder inside your project directory:
```sh
cd android
```

#### Step 2: Create the `local.properties` File
If the `local.properties` file does not exist, create it manually inside the `android` folder.

#### Step 3: Add Your SDK Directory
Open the `local.properties` file in a text editor and add the following line, replacing `/Users/test/Library/Android/sdk` with your actual Android SDK path:
```sh
sdk.dir=/Users/YOUR_USERNAME/Library/Android/sdk  # macOS
sdk.dir=C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk  # Windows
```
For Linux users, the path is typically:
```sh
sdk.dir=/home/YOUR_USERNAME/Android/Sdk
```

#### Step 4: Save and Close
Save the file and close the editor. Now, you should be able to build and run your React Native project without SDK-related errors.

### Troubleshooting

- If you encounter build issues, try clearing the cache:
  ```sh
  npx react-native start --reset-cache
  ```
- If dependencies are not installed properly, try:
  ```sh
  rm -rf node_modules && npm install
  ```

---

## 🛠 Tech Stack
- **React Native CLI** - Framework for building mobile applications.
- **Redux ToolKit** - State management for handling app state.
- **SQLite** (`react-native-sqlite-storage`) - Local database for offline storage.
- **React Navigation (Stack and Bottom Navigations)** - For screen navigation.

---

## 📌 Project Structure
```
📦 react-native-crud-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┣ 📂 database  # SQLite database functions
 ┃ ┣ 📂 redux  # Redux actions & reducers
 ┃ ┣ 📂 screens  # App screens (ItemsScreen, Add/Edit, etc.)
 ┃ ┗ 📂 utils  # Utility functions
 ┣ 📜 App.js  # Entry point
 ┣ 📜 package.json
 ┣ 📜 README.md  # Documentation
```

---

## ❗ Known Limitations & Assumptions
- The app does **not sync data to a remote server** (Only local SQLite storage).
- Designed as a **demo project** (can be extended for production use).

---

## 📞 Support
For any issues or suggestions, feel free to reach out at **prabhask856@gmail.com**.

Happy Coding! 🚀

