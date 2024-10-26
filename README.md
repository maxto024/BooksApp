# BookApp

BookApp is a React Native application that displays a list of books with their titles, authors, and cover images. The app uses Redux for state management, Redux-Saga for handling asynchronous actions, TypeScript for static type checking, and Jest for testing. It’s optimized for performance and scalability with best practices applied throughout the codebase.

## Features

- Display a list of books with titles, authors, and cover images
- Fetch data from a REST API using Redux-Saga
- Optimized `FlatList` for performance
- Cross-platform compatibility (iOS and Android)
- Full testing coverage with Jest and React Native Testing Library

## Getting Started

### Prerequisites

- Node.js
- React Native CLI
- Android Studio and Xcode (for iOS)
- CocoaPods (for iOS)

### Installation

1. Clone the repository:
   - git clone https://github.com/yourusername/BookApp.git
   - cd BookApp

2. Install dependencies:
   - npm install
   - cd ios
   - pod install
   - cd ..

3. Start the application:
   - For Android:
     - npx react-native run-android
   - For iOS:
     - npx react-native run-ios

4. Run tests:
   - npm test

## Project Structure

Here’s a breakdown of the main project structure to help you understand the file organization and purpose of each folder.


### Detailed Explanation of Key Folders and Files

#### `src/`

This is the main source folder containing all app code.

- **`api/`**: Contains API-related code
  - **`bookApi.ts`**: Defines the function for fetching book data from an external API. It uses Axios for making HTTP requests

- **`components/`**: Contains reusable UI components
  - **`BookCard.tsx`**: A functional component responsible for displaying individual book details, including the cover image, title, and author

- **`screens/`**: Contains screen components, each representing a different view or screen in the app
  - **`BookListScreen.tsx`**: Displays a list of books using a `FlatList` component. It connects to the Redux store to fetch and render book data and handles loading and error states

- **`store/`**: Contains Redux-related files
  - **`bookSlice.ts`**: Defines the `bookSlice`, which includes state, actions, and reducers for managing book data
  - **`bookSaga.ts`**: Contains the `bookSaga`, which handles asynchronous actions for fetching book data and dispatching relevant Redux actions on success or failure
  - **`store.ts`**: Configures and exports the Redux store, applying `redux-saga` middleware for handling side effects

- **`types/`**: Holds TypeScript type definitions
  - **`book.ts`**: Defines the `Book` interface for representing book data
  - **`index.ts`**: Centralizes all types for easy imports

- **`utils/`**: Contains utility files or constants
  - **`constants.ts`**: Stores constant values, such as the API URL

- **`App.tsx`**: The root component of the app, which sets up the Redux Provider and renders the main `BookListScreen`

#### `__tests__/`

This folder contains test files, with tests organized to match the structure of the `src` folder for clarity.

- **`api/`**: Contains tests for API functions
  - **`bookApi.test.ts`**: Tests the `fetchBooks` API function for successful and failed fetch scenarios

- **`components/`**: Contains component tests
  - **`BookCard.test.tsx`**: Tests the `BookCard` component, verifying that it renders the title, author, and cover image

- **`screens/`**: Contains screen component tests
  - **`BookListScreen.test.tsx`**: Tests the `BookListScreen` component, covering loading, error, and data rendering states, and ensuring that the fetchBooks action is dispatched

- **`store/`**: Contains tests for Redux slice and saga
  - **`bookSlice.test.ts`**: Tests the `bookSlice` reducers to ensure state updates correctly
  - **`bookSaga.test.ts`**: Tests the `bookSaga` to confirm that it correctly handles API calls and dispatches success or failure actions

#### Root Files

- **`babel.config.js`**: Babel configuration file for transforming code
- **`jest.config.js`**: Jest configuration file for setting up the test environment and specifying custom transformations
- **`package.json`**: Lists dependencies, scripts, and metadata for the project
- **`tsconfig.json`**: TypeScript configuration file for setting up type checking and compiler options
- **`README.md`**: This file, providing an overview of the project

## Usage

1. **Start the App**: Run `npx react-native run-android` for Android or `npx react-native run-ios` for iOS to start the app in the respective emulator
2. **Testing**: Run `npm test` to execute all tests in the `__tests__` folder. This includes tests for API, Redux, and components
3. **Adding New Features**:
   - Place new screens in the `src/screens/` folder
   - Create additional components in `src/components/`
   - If new actions or state management are required, add new slices in `src/store/`
   - Update types in `src/types/` as needed

## Performance Optimization

- `FlatList` is optimized for handling large data sets by setting props like `initialNumToRender`, `maxToRenderPerBatch`, `windowSize`, and `removeClippedSubviews`
- Images are managed carefully to avoid memory issues on iOS and Android

