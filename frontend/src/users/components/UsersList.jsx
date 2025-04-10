import UserItem from './UserItem';
import './UsersList.css';


const UsersList = props => {

    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>Пользователи не найдены</h2>
            </div>
        );
    }

    return (
        <ul>
            {props.items.map(user => {
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.name}
                    placeCount={user.places}
                />;
            })}
        </ul>
    );

}

export default UsersList;