import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setUsers, fetchUsers} from "../../store/reducers/usersSlice"
import {Link } from  "react-router-dom"

function Users() {

    // const [ users, setUsers] = useState([]);

    const dispatch = useDispatch()

    const {usersList, isLoading} = useSelector(state => state.users);

    

    useEffect(() => {
        dispatch(fetchUsers())
    },[])
  return (
    <div>
        <nav>
            <Link to={'/users-list'}>
                UsersList on Table
            </Link>
        </nav>
    {/* {console.log(usersList)} */}

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

    </div>
  )
}

export default Users