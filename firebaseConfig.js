import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBvaqtjaCj6bz7bbfA67fbhJp4tFGxE3-w",
  authDomain: "fitness-app-4446e.firebaseapp.com",
  projectId: "fitness-app-4446e",
  storageBucket: "fitness-app-4446e.firebasestorage.app",
  messagingSenderId: "878652752290",
  appId: "1:878652752290:web:39c2cac8de4b3d419f32fb"
};

export const testapp = initializeApp(firebaseConfig);
export const auth = getAuth(testapp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});