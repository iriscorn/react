import useFetch from "../../hooks/useFetch";

const Users = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(data);
  return (
    <>
    <main className="content">
      <h1>Users</h1>
      {error && <p>{error}</p>}
      {isLoading && <h2>Loading ...</h2>}
      <ul>
        {!!data.length &&
          data.map((user) => <li key={user.id}>{user.username}</li>)}
      </ul>
    </main>
    </>
  );
};
export default Users;
