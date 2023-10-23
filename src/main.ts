import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from "firebase/app";
import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyU3JSSu_lXDcESrCs_JnyMJ1PC8AxVgc",
  authDomain: "movil-print.firebaseapp.com",
  projectId: "movil-print",
  storageBucket: "movil-print.appspot.com",
  messagingSenderId: "199161654274",
  appId: "1:199161654274:web:05671ee6cc95183df9cb1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app
