import React, { useEffect, useState } from 'react';

function Fetch1() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((item) => (
          <li key={item.userId}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch1;