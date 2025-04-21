
import Avatar from '../../shared/components/UIElements/Avatar';
import './UserItem.css';

const UserItem = props => {
    return (
        <li className="user-item">
            <div className="user-item__content">
                <div className="user-item__image">
                    <Avatar image={props.image} alt={props.name}/>
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <p>Локаций: {props.placeCount}</p>
                </div>
            </div>
        </li>
    );
}

export default UserItem;