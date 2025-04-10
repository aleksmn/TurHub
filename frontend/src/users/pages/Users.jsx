import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
          id: 'u1',
          name: 'Robert Hawkins',
          image:
            'https://randomuser.me/api/portraits/men/81.jpg',
          places: 3
        }
      ];
    return ( 
        <UsersList items={USERS}/>
     );
}
 
export default Users;