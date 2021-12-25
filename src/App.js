import React,{useEffect} from 'react';
import Header from './components/Header';
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {selectUser, login, logout} from './features/userSlice'
import {auth} from './firebase'

import Sidebar from './components/SideBar/Sidebar';
import Title from './components/Title/Title';
import Cards from './components/Cards/Cards';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        //user is logged in
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName

        }))

      }else{
        //user is logged out
        dispatch(logout())

      }
    })

  }, [])
  

  return (
    <div className="app">
     
          <Header />

          <div className='main__body'>
            <Sidebar />
            <div className='content'>
           <Title />
            <Cards />
          </div>

       
    
      </div>
      
    
    
    </div>
  );
}

export default App;
