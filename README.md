# Flow

### create app from template react with vite.

### install UI component:
> yarn add antd @ant-design/icons 

### Others
> yarn add date-fns lodash 


### Config firebase
> sau khi tao project firebase
> Go to "Project settings"
> Cau hinh Your app (android/ios/web): select webapp
> Register app: chat-app.
> sau khi dang ky thanh cong:
``` js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjE7ZmQxY-8mr0Lwa0MxXrROQ8q7-1Tdg",
  authDomain: "chat-app-f3127.firebaseapp.com",
  projectId: "chat-app-f3127",
  storageBucket: "chat-app-f3127.appspot.com",
  messagingSenderId: "226139221314",
  appId: "1:226139221314:web:4b4a3ae5bca09ae179acdb",
  measurementId: "G-91JWPBVJ8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

> create firebase config roi nhung doan code tren vao
> Ta add them firebase/auth -> dung de xac thuc nguoi dung
> Va firebase/firestore ->  dung de luu tru database.

