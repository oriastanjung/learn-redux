import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UsersListComponent from '../components/UsersListComponent'
import {useSelector} from "react-redux";


function UsersList() {
  const navigate = useNavigate();
  const {isSuccess} = useSelector(state => state.login);

  useEffect(() => {
    if(!isSuccess){
      navigate('/login')
    }
  },[isSuccess])
  return (
    <div>
      <Link to={'/'}>Home</Link>
        <UsersListComponent />
    </div>
  )
}

export default UsersList