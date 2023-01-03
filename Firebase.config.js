import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDrzCe7rL7CY_PiBDheYIAsriDx3EqsDmQ',
  authDomain: 'francisgolfer-eb65d.firebaseapp.com',
  projectId: 'francisgolfer-eb65d',
  storageBucket: 'francisgolfer-eb65d.appspot.com',
  messagingSenderId: '110849362811',
  appId: '1:110849362811:web:c120e46d76ba937106cbde',
  measurementId: 'G-HL3CTMQKFN',
};

const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
