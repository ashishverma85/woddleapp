# WoddleApp - React Native Kids Tracker

A React Native application for tracking kids' daily activities including weight, diaper changes, feeding, and sleep patterns. Features a swipeable carousel interface for multiple children.

## 📱 Features

- **Multi-Child Support**: Swipeable carousel to track multiple children
- **Activity Tracking**: Monitor weight, diaper changes, feeding, and sleep
- **Modern UI**: Clean, intuitive interface with custom fonts and styling
- **Cross-Platform**: Runs on both iOS and Android
- **E2E Testing**: Comprehensive Detox testing suite

## 🛠 Tech Stack

- **React Native**: 0.81.1
- **React**: 19.1.0
- **Node.js**: >=22
- **TypeScript**: 5.8.3
- **Detox**: 20.41.1 (E2E Testing)
- **Jest**: 29.7.0 (Unit Testing)

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

### Required Software
- **Node.js**: >=22 (Recommended: Latest LTS version)
- **npm**: Comes with Node.js
- **React Native CLI**: `npm install -g @react-native-community/cli`
- **Java Development Kit (JDK)**: 11 or higher
- **Android Studio**: Latest version
- **Xcode**: Latest version (macOS only)

### Android Setup
- **Android SDK**: API level 24+
- **Android Emulator**: Pixel 8a (or compatible device)
- **Environment Variables**:
  ```bash
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/tools
  export PATH=$PATH:$ANDROID_HOME/tools/bin
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

### iOS Setup (macOS only)
- **Xcode**: Latest version from App Store
- **CocoaPods**: `sudo gem install cocoapods`
- **iOS Simulator**: iPhone 14 or compatible

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd woddleapp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. iOS Setup (macOS only)
```bash
cd ios
pod install
cd ..
```

### 4. Start Metro Bundler
```bash
npm start
```

### 5. Run the App

#### Android
```bash
npm run android
```

#### iOS (macOS only)
```bash
npm run ios
```

## 📦 Building for Production

### Android APK Build
```bash
# Debug APK
cd android
./gradlew assembleDebug
# APK will be generated at: android/app/build/outputs/apk/debug/app-debug.apk

# Release APK (requires signing)
./gradlew assembleRelease
# APK will be generated at: android/app/build/outputs/apk/release/app-release.apk
```

### iOS Build (macOS only)
```bash
# Build for iOS Simulator
npx react-native run-ios --configuration Release

# Build for device (requires Apple Developer account)
# Open ios/woddleapp.xcworkspace in Xcode and archive
```

## 🧪 Testing

This project includes comprehensive end-to-end testing with Detox.

### E2E Tests with Detox

#### Prerequisites for E2E Testing
- Android emulator running (Pixel_8a_new)
- App built and installed on emulator

#### Build for Testing
```bash
# Android
npm run e2e:build:android

# iOS (macOS only)
npm run e2e:build:ios
```

#### Run E2E Tests
```bash
# Android
npm run e2e:test:android

# iOS (macOS only)
npm run e2e:test:ios
```

#### E2E Test Details
The test suite includes:
- **Kids Carousel Test**: Verifies first kid's name visibility, swipes to next kid, and verifies second kid's name
- **TestIDs**: Uses `kidName-0`, `kidName-1`, and `kidsCarousel` for reliable element selection
- **Synchronization**: Disabled to prevent React Native idling resource crashes

#### Debug E2E Tests
```bash
# Run with verbose output
ANDROID_SDK_ROOT=$HOME/Library/Android/sdk detox test --configuration android.emu.debug --verbose

# Run with visual mode (see test execution)
ANDROID_SDK_ROOT=$HOME/Library/Android/sdk detox test --configuration android.emu.debug --headless false

# Run specific test file
ANDROID_SDK_ROOT=$HOME/Library/Android/sdk detox test --configuration android.emu.debug e2e/firstTest.test.js
```

## 📁 Project Structure

```
woddleapp/
├── android/                 # Android-specific code
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/       # Main Android code
│   │   │   └── androidTest/ # Detox instrumentation tests
│   │   └── build.gradle    # Android build configuration
│   └── build.gradle        # Root Android build file
├── ios/                    # iOS-specific code
│   ├── childapp/
│   └── Podfile
├── e2e/                    # End-to-end tests
│   ├── firstTest.test.js   # Main Detox test
│   └── jest.config.js      # Jest configuration for E2E
├── assets/                 # Images and fonts
├── App.js                  # Main application component
├── App.tsx                 # TypeScript app component
├── package.json            # Dependencies and scripts
├── .detoxrc.js            # Detox configuration
└── README.md              # This file
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start Metro bundler |
| `npm run android` | Run on Android device/emulator |
| `npm run ios` | Run on iOS simulator (macOS only) |
| `npm run lint` | Run ESLint |
| `npm run e2e:build:android` | Build Android app for E2E testing |
| `npm run e2e:build:ios` | Build iOS app for E2E testing |
| `npm run e2e:test:android` | Run Android E2E tests |
| `npm run e2e:test:ios` | Run iOS E2E tests |

## 🐛 Troubleshooting

### Common Issues

#### Android Build Issues
```bash
# Clean and rebuild
cd android
./gradlew clean
cd ..
npm run android
```

#### Metro Bundler Issues
```bash
# Clear Metro cache
npx react-native start --reset-cache
```

#### Detox Test Issues
```bash
# Clean Detox cache
detox clean-framework-cache
detox build-framework-cache

# Rebuild test APK
npm run e2e:build:android
```

#### Watchman Issues
```bash
# Reset Watchman
watchman watch-del '/path/to/childapp'
watchman watch-project '/path/to/childapp'
```

### Environment Issues
- Ensure `ANDROID_SDK_ROOT` is set correctly
- Verify emulator is running before E2E tests
- Check that all dependencies are installed

## 📱 App Features

### Kids Management
- **Christian Bowen**: 1y 2m old
- **Aanya Kapoor**: 11m old

### Activity Tracking
- **Weight**: Track in lbs and oz
- **Diaper**: Type (Pee/Poop) and size
- **Feeding**: Type and amount
- **Sleep**: Duration tracking

### UI Components
- Swipeable carousel for multiple kids
- Color-coded activity cards
- Modern typography with custom fonts
- Responsive design for different screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review the test logs
3. Ensure all prerequisites are met
4. Create an issue with detailed error information

---

**Happy Testing! 🎉**