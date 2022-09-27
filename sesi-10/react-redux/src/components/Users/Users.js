import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setUsers} from "../../store/reducers/usersSlice"
import {Link } from  "react-router-dom"

function Users() {

    // const [ users, setUsers] = useState([]);

    const dispatch = useDispatch()

    const {usersList} = useSelector(state => state.users);

    const fetchUsers = async () => {
        try {
            const res = await fetch("https://randomuser.me/api/?results=10");
            const data = await res.json()
            // setUsers(data.results)

            dispatch(setUsers(data.results))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    },[])
  return (
    <div>

    {/* {console.log(usersList)} */}


        {usersList && usersList.map((item) => {
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