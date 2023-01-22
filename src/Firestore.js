
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "./firebase-config";

const Firestore = () => {
  const [user, setUser] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const userCollectionRef = collection(db, "users");

  // This logic is for creating a document in fireabse
  const createUser = async () => {
    await addDoc(userCollectionRef,{name: newName,age: Number(newAge)});
  };

//   This logic is for updating an existing document
  const updateUser = async (id,age) => {
        const userDoc =  doc(db,"users",id);
        const newField = {age: age+1};
        await updateDoc( userDoc  ,newField)
  }

//      This is for deleting a user
  const deleteUser = async (id) => {
        const userDoc = doc(db,"users",id);
        await deleteDoc(userDoc);
  }

  // This logic is for reading from firebase
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="name"
      />
      <input
        type="number"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
        placeholder="age"
      />
      <button onClick={createUser}>Create User</button>
      {user.map((eachPerson) => {
        return (
          <>
            <div>
              <h1> Name:- {eachPerson.name} </h1>
              <h1> Age:- {eachPerson.age} </h1>
            </div>
            <button onClick={updateUser(eachPerson.id,eachPerson.age)}>Increase Age</button>
            {/* This is deleting logic */}
            <button onClick={() => {deleteUser(eachPerson.id)} }>Delete</button>
          </>
        );
      })}
    </>
  );
};

export default Firestore;
