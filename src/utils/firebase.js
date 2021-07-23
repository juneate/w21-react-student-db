import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAaKk7yH01SlQOInwDd76ZKHaDURd9GSyY",
  authDomain: "courseplatform-s2021.firebaseapp.com",
  projectId: "courseplatform-s2021",
  storageBucket: "courseplatform-s2021.appspot.com",
  messagingSenderId: "434755143639",
  appId: "1:434755143639:web:082a21c2b5ae9c31846d92"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase