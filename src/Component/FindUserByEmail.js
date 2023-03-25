import React, { useState } from 'react';
import axios from 'axios';

function FindUserByEmail() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8080/api/users/${email}`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div>
      <h2>Find User by Email</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Find</button>
      </form>
      {user && (
        <div>
          <h3>User Details</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
        </div>
      )}
    </div>
  );
}

export default FindUserByEmail;
