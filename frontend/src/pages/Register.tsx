import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

interface Props {
  onClose: () => void;
}

const Register: React.FC<Props> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('https://booking-app-production-554b.up.railway.app/api/auth/register', {
        name,
        email,
        password,
      });

      setSuccess('Registration successful! Please log in.');
      setTimeout(onClose, 1500);
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError?.response?.data?.message || 'Something went wrong. Please try again.';
      setError(errorMessage);
      console.error('Registration error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-400 active:bg-indigo-700 text-white py-2 rounded transition-colors duration-200"
      >
        Register
      </button>
      {error && (
        <div className="text-red-600 text-sm mt-[-12px] -mb-2">
          {error}
        </div>
      )}
      {success && (
        <div className="text-green-600 text-sm mt-[-12px] -mb-2">
          {success}
        </div>
      )}
      <p className="text-sm">
        Already have an account?{' '}
        <button
          type="button"
          className="text-indigo-600 underline"
          onClick={onClose}
        >
          Log in
        </button>
      </p>
    </form>
  );
};

export default Register;
