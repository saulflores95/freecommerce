  // web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyB5gz88ofZgPcrIwIkKmmVXxEHxs7OVq-A",
    authDomain: "freecommerce-db.firebaseapp.com",
    databaseURL: "https://freecommerce-db.firebaseio.com",
    projectId: "freecommerce-db",
    storageBucket: "freecommerce-db.appspot.com",
    messagingSenderId: "158157423218",
    appId: "1:158157423218:web:424c0621a77661b5b638eb",
    measurementId: "G-S6B2YNQL79"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user:', error.message)
      }
    }

    return userRef
  }

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export default firebase


