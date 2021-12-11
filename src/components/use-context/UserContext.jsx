import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = (props)=>{
       const [users,setUsers] = useState([
           {id:1, name:'Mh Akash', position:'Front-End Developer', salary:"20000"},
       ]);
       return(
           <UserContext.Provider value={[users,setUsers]}>
               {props.children}
           </UserContext.Provider>

       )
}