import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchUsers} from "../../store/reducers/usersSlice"


function UsersListComponent() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.usersList);

    const doFetchUsers = () => {
        dispatch(fetchUsers())
    }


  return (
    <div className='container'>
        <h1>Users data</h1>
        <button onClick={doFetchUsers}>Fetch data </button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {   
                    allUsers.map((user) => (
                        <tr key={user.login.uuid}>
                            <td>
                                {user.name.first} {user.name.last}
                            </td>
                            <td>
                                {user.login.username}
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UsersListComponent