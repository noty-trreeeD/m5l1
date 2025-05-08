import {userList} from '../API/userList.json'
import {UserCard} from "./UserCard.jsx";
import '../styles/User.css'

export const UserList = () => {
    return (
        <div className='userList'>
            {userList.map((user) => (
                <UserCard key={user.id} name={user.name} age={user.age} city={user.city} active={user.active} />
            ))}
        </div>
    )
}