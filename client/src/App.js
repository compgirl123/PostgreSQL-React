import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/students')
      .then(async (res) => {
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(errorText || 'Unknown error occurred');
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching items:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Items List</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nom</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.student_id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
