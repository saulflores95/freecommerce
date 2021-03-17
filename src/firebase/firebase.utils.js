  // web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // var firebaseConfig = {
  //   apiKey: "AIzaSyB5gz88ofZgPcrIwIkKmmVXxEHxs7OVq-A",
  //   authDomain: "freecommerce-db.firebaseapp.com",
  //   databaseURL: "https://freecommerce-db.firebaseio.com",
  //   projectId: "freecommerce-db",
  //   storageBucket: "freecommerce-db.appspot.com",
  //   messagingSenderId: "158157423218",
  //   appId: "1:158157423218:web:424c0621a77661b5b638eb",
  //   measurementId: "G-S6B2YNQL79"
  // };

  var firebaseConfig = {
    apiKey: "AIzaSyAC0Edp5exz7Fia85BbZcjQs7UnKKJbOqY",
    authDomain: "mxship-6df43.firebaseapp.com",
    projectId: "mxship-6df43",
    storageBucket: "mxship-6df43.appspot.com",
    messagingSenderId: "802464087340",
    appId: "1:802464087340:web:4b0d26d3129ab804b38089",
    measurementId: "G-SPS84Y41EN"
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


  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })
    return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
      const { title, items } = doc.data()
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    })

    return transformedCollections.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator
    }, {})
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


