import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Дмитрий',
      image: 'user-1.png',
      places: 3
    },
    {
      id: 'u2',
      name: 'Василий',
      image: 'user-2.png',
      places: 5
    },
    {
      id: 'u3',
      name: 'Степан',
      image: 'user-3.png',
      places: 4
    },
    {
      id: 'u4',
      name: 'Юлия',
      image: 'user-4.png',
      places: 10
    },
  ]
  return (
    <UsersList items={USERS} />
  );
}

export default Users;