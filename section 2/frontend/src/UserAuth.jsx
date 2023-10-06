import React, { useState } from 'react'
import Swal from 'sweetalert2';
import useAppContext from './AppContext';

const UserAuth = ({children}) => {
    //  const {currentUser} = useAppContext();
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

     if ( currentUser !== null){
        return children;
     }else{
        Swal.fire({
            icon:'error',
            title: 'Permission Denied',
            text : 'You need to login first'
        });
        return <navigate to ="/login"/>
     }
}

export default UserAuth;