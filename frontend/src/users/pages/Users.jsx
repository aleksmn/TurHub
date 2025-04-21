import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Дмитрий',
            image: 'https://randomuser.me/api/portraits/men/81.jpg',
            places: 3
        },
        {
            id: 'u2',
            name: 'Василий',
            image: 'https://randomuser.me/api/portraits/men/82.jpg',
            places: 5
        },
        {
            id: 'u3',
            name: 'Степан',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            places: 4
        },
        {
            id: 'u4',
            name: 'Юлия',
            image: 'https://randomuser.me/api/portraits/women/84.jpg',
            places: 10
        },
    ]


    return ( 
        // Компонент список пользователей
        <UsersList items={USERS}/>
    );
}
 
export default Users;