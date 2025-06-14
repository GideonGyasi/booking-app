import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  onSuccess: (user: { name: string }) => void;
  onSwitchToRegister: () => void;
}

const Login: React.FC<Props> = ({ onSuccess, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('https://booking-app-production-554b.up.railway.app/api/auth/login', {
        email,
        password
      });

      const user = res.data.user;
      onSuccess(user);
    } catch (err) {
      setError('Incorrect email or password. Please try again.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-400 active:bg-indigo-700 text-white py-2 rounded transition-colors duration-200"
      >
        Log In
      </button>
      {error && (
        <div className="text-red-600 text-sm mt-[-12px] -mb-2">
          {error}
        </div>
      )}
      <p className="text-sm">
        Don’t have an account?{' '}
        <button
          type="button"
          className="text-indigo-600 underline"
          onClick={onSwitchToRegister}
        >
          Register
        </button>
      </p>
    </form>
  );
};

export default Login;
