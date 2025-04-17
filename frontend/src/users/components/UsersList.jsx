import UserItem from "./UserItem";

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div>
                <h2>Пользователи не найдены</h2>
            </div>
        )
    }

    return (
        <ul>
            {props.items.map(user => {
                return <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places} />
            })}

        </ul>
    )

}

export default UsersList;