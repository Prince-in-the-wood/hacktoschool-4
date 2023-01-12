import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/AuthAPI';

const SignInCard = () => {
  const [data, setData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(data);
      window.location = '/';
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={data.username}
            required
          ></input>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          ></input>
          <input type="submit" value="Submit"></input>
          {error && <div>{error}</div>}
        </form>
      </div>
    </>
  );
};

export default SignInCard;
