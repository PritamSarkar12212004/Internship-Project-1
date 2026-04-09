🚀 Project Goal

React Native CLI app with:

NativeWind (Tailwind styling)
React Native Paper (modern UI)
React Navigation (Stack)
Toast messages
Orientation control
SVG assets
MMKV storage
Dynamic app icon change

Importent Packege

npm install nativewind
npm install react-native-paper
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
npm install react-native-toast-message
npm install react-native-orientation-locker
npm install react-native-svg
npm install react-native-mmkv
npm install react-native-change-icon

Folder Structure
src/
│
├── assets/
│ ├── icons/
│ ├── images/
│ └── svg/
│
├── components/ # Reusable UI components
│
├── screens/ # All screens
│ ├── Auth/
│ └── Home/
│
├── navigation/ # Navigation setup
│ └── StackNavigation.tsx
│
├── providers/ # All global providers
│ ├── PaperProvider.tsx
│ ├── NavigationProvider.tsx
│ └── ToastProvider.tsx
│
├── services/ # MMKV, API, utils
│ └── storage.ts
│
├── hooks/
│
├── utils/
│
└── App.tsx
