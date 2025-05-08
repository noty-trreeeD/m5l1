import defaultPhoto from '../assets/default.jpg'

export const UserCard = (user) => {
    return (
        <div className={`userCard ${user.active ? "active" : "notActive"}`}>
            <h1>{user.name}</h1>
            <h2>Age: {user.age}</h2>
            <img src={user.img ? user.img : defaultPhoto} alt=""/>
            <h3>City: {user.city}</h3>
        </div>
    );
};

