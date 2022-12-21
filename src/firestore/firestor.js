// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

import products from "../data/data";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtbxjK2C7MBCBY_2ZCMuc5myaKiB4kzWo",
  authDomain: "informatica-alonso.firebaseapp.com",
  projectId: "informatica-alonso",
  storageBucket: "informatica-alonso.appspot.com",
  messagingSenderId: "831867165226",
  appId: "1:831867165226:web:c9792fb50d7d8334440153",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);


export default async function getItems() {
  const collectionProductsRef = collection(DB, "products");
  const documentsSnapshot = await getDocs(collectionProductsRef);
  const documentsData = documentsSnapshot.docs.map((doc) => {
    let docId = doc.data();
    docId.id = doc.id;
    return docId;
  });

  return documentsData;
}

export async function getSingleItem(idParam) {
  const docRef = doc(DB, "products", idParam);
  const documentsSnapshot = await getDoc(docRef);
  let docId = documentsSnapshot.data();
  docId.id = documentsSnapshot.id;
  return docId;
}

export async function itemCategory(categoryParams){
  const collectionRef = collection(DB, "products")
  const q = query(collectionRef, where("category", "==", categoryParams));  
  const documentsSnapshot = await getDocs(q);
  const documentsData = documentsSnapshot.docs.map ((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };

  });
  return documentsData;
  
}

export async function createOrder (order){
  const collectionRef = collection(DB, "orders");
  const doc = await addDoc(collectionRef, order);
  console.log(doc); 
  return(doc.id);
}






