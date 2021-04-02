import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';

const firebaseInit = () => {
  firebase.initializeApp(firebaseConfig);
}

export default firebaseInit;