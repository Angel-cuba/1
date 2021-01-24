import React, {useState} from 'react';
import User from './componentes/User';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './componentes/AddUserForm';
import EditUserForm from './componentes/EditUserForm'


function App() {

  const usersData = [
    // 
    
    
  ]

 //state
const [users, setUsers] = useState(usersData)

//Agregar nuevos usuarios
 const addUser = (user) => {
 //Esta función genera nuevos id a los usuarios
   user.id = uuidv4()
   setUsers([
     ...users,
     user
   ])
 }
 //Funcion de eliminar ususario
 const deleteUser = (id) => {
  console.log(id);
                    
   //P ara eliminar hay filtar el array y puedo hacer una cte
   const arraySetUserFiltrado = users.filter(user => user.id !== id);

  setUsers(arraySetUserFiltrado)
 }

 //Editar usuario
 const [Edit, setEdit] = useState(false)


 const [currentUser, setcurrentUser] = useState({
   id: null,
   name: '',
   username: ''
 })

 const editRow = (user) =>{
   setEdit(true);
   setcurrentUser({
     id: user.id,
     name: user.name,
     username: user.username
   })
 }

 const updateUser = (id, updateUser)=>{
   setEdit(false);

   setUsers(users.map(user=> (user.id === id ? updateUser : user)))
 }


  return (
   <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

{
  
   Edit ? (
  <div>
        <h1>Edit user</h1>
        <EditUserForm 
          currentUser={currentUser}
          updateUser= {updateUser}
        />
        
  </div>
  ) : (
    <div>
     <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
    </div>
  )
}

      
         
        </div>
        <div className="flex-large">
          <h2>View all users</h2>
          <User 
          users={users} 
          deleteUser={deleteUser} 
          
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
