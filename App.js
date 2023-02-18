import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home  from './src/screens/Home';
import Navigation  from './src/navigation/index';

import {CCustom} from './src/components/CCustom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyDzz8bnLCy1wo3-h4K2Rp9dEZTRhCKQ2k0",
  authDomain: "buddyget-97a33.firebaseapp.com",
  projectId: "buddyget-97a33",
  storageBucket: "buddyget-97a33.appspot.com",
  messagingSenderId: "183834222159",
  appId: "1:183834222159:web:b73735e3d2ef77b662943a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

export default function App() {
  return (
    <View style={styles.container}>
        <Home/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    backgroundColor: CCustom.Mint,
  },
});
