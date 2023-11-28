import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
//hook para makuha ang data na gikan sa users na naka object sulod sa FakeData.js
import { useSelector, useDispatch } from 'react-redux';
//ad ug bag-ong user / updateUser / deleteUser
import { addUser, updateUsername, deleteUser } from './features/Users';
//add useStateHook
import { useState } from 'react';



function App() {
  //kuhaon ang value sa name ug username gamit onchange!
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  //for update
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();


  //kuhaon ang data
  const userList = useSelector((state) => state.users.value)


  return (
    <div className="App">
    <h1>RDX</h1>
      <div className='addUser'>
        <input type="text" 
          onChange={(x) => {setUsername(x.target.value)}}
          placeholder='Name...' />
        <input type="text" 
          onChange={(e) => {setUsername(e.target.value)}} 
          placeholder='Username...' />
        <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username })) }}>Add User</button>
      </div>

      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input type="text" 
                onChange={(w) => {setNewUsername(w.target.value)}} 
                placeholder='New username' />
                <button 
                onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername})
                ); 
              }}
              >
              Update Username
              </button>
                <button
                onClick={() => { dispatch(deleteUser({ id: user.id})) }}
                >Delete User</button>
            </div>
        
          )
        })}
      </div>
    </div>
  );
}

export default App;
