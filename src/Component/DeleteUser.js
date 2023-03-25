import React, { useState } from 'react';
import axios from 'axios';

function DeleteUser() {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8080/api/users/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteUser;
