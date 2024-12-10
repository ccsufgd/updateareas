import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/home'); // Redirect to home after successful login
    } catch (err) {
      setError('Failed to log in with Google.');
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded-lg bg-white p-6 text-center shadow-lg">
        <h2 className="mb-4 text-2xl">Realize seu Login</h2>
        {error && <p className="mb-2 text-sm text-red-500">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          Realize seu Login
        </button>
      </div>
    </div>
  );
}

export default Login;
