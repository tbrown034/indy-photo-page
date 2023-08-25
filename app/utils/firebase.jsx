import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3qB7VBLAS2VCTvxzaigTcBMqve-ciTpw",
  authDomain: "indyphotopage.firebaseapp.com",
  projectId: "indyphotopage",
  storageBucket: "indyphotopage.appspot.com",
  messagingSenderId: "560974810748",
  appId: "1:560974810748:web:5c6cba104772315eea83f9",
  measurementId: "G-BBXCNEVN7B",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const storage = getStorage();
export const imagesRef = ref(storage, "images"); // Point to 'images' folder
