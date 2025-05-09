'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout, setUserFromStorage } from '@/store/userSlice';
import { RootState } from '@/store/store';

export default function HomePage() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const router = useRouter();

  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(setUserFromStorage());
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [dispatch, isLoggedIn, router]);

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a protected page for logged-in users only.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
