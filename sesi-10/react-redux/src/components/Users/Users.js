import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setUsers, fetchUsers} from "../../store/reducers/usersSlice"
import {Link, useNavigate } from  "react-router-dom"
import Navbar from '../Navbar/Navbar'

function Users() {
    const navigate = useNavigate();
    // const [ users, setUsers] = useState([]);

    const dispatch = useDispatch()

    const {usersList, isLoading} = useSelector(state => state.users);
    const {isSuccess} = useSelector(state => state.login)
    

    useEffect(() => {
        dispatch(fetchUsers())
    },[])
  return (
    <div>
        <Navbar />
    {/* {console.log(usersList)} */}
    {
        isSuccess ? (
        <>
        {isLoading && <h1>Loading Data</h1>}
        {!isLoading && usersList.map((item) => {
            return (
                <div> 
                    {/* {console.log(usersList)} */}
                    <h1>
                        <Link to={`/users/${item.login.uuid}`}>
                        {item.name.first}
                        </Link>
                    </h1>
                </div>
            );
        })}
        </>
        
        ) : (
            navigate('/login')
        )
    }

    </div>
  )
}

export default Users