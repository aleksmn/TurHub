const UserItem = props => {
    return (
        <li className="user-item">
            <div className="user-item__content">
                <div className="user-item__image">
                    <img src={props.image} alt={props.name} />
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