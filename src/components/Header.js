import React,{useState,useEffect} from 'react'
import './Header.css'
import {auth,provider} from '../firebase'
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice'
import db from '../firebase'





function Header() {
    const[users,setUsers]=useState([])
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("users").onSnapshot(snapshot =>
          setUsers(
            snapshot.docs.map(doc => {
              return {
                id: doc.id,
                data: doc.data()
              };
            })
          )
        );
      }, []);
    

    const logIn = ()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
        db.collection('users').add({
               
            uid:user.uid,
            photo:user.photo,
            email:user.email,
            displayName:user.displayName
            });

    }
    return (
        <div className='header'>
            <h3 className='welcome'>Welcome!<span className='welcome__name'> Your name</span></h3>
            <button onClick={logIn} className='btn purple'>Login</button>
            
        </div>
    )
}

export default Header
