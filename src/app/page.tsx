'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { login, setUserFromStorage } from '@/store/userSlice';
import { RootState } from '@/store/store';

export default function HomePage() {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogin = () => {
    const mockUser = {
      id: '123',
      name: 'Laidens é autista',
      email: 'user@example.com',
      token: 'mock-jwt-token',
    };
    dispatch(login(mockUser));
    router.push('/home');
  };

  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    dispatch(setUserFromStorage());
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [dispatch, isLoggedIn, router]);

  if (isLoggedIn === null) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <header className="bg-white p-6 shadow-md">
        <div className="container mx-auto flex justify-center">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        {!isLoggedIn ? (
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Welcome to Our App!</h1>
            <p className="text-gray-600 mb-6">Please log in, sign up, or continue as a guest.</p>
            <button
              onClick={handleLogin}
              className="w-full py-2 mb-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Log in
            </button>
            <button
              onClick={handleLogin}
              className="w-full py-2 mb-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Sign up
            </button>
            <button
              onClick={handleLogin}
              className="w-full py-2 mb-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Continue as Guest
            </button>
          </div>
        ) : (
          <p className="text-xl text-gray-700">You are logged in! Redirecting to home...</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
