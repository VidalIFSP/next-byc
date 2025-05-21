'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout, setUserFromStorage } from '@/store/userSlice';
import { RootState } from '@/store/store';
import BottomNavbar from '@/components/BottomNavbar';
import FipeTest from '@/components/fipeTest';

export default function HomePage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleStartToBuild = () => {
    router.push('/build');
  };

  useEffect(() => {
    dispatch(setUserFromStorage());
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [dispatch, isLoggedIn, router]);

  return (
    
    <div className="pb-20">
      <h1>Welcome to the Home Page!</h1>
      <p>This is a protected page for logged-in users only.</p>      

      <div className="my-4">
        <button
          onClick={handleStartToBuild}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Start to Build
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Log Out
        </button>
      </div>

      <BottomNavbar />
      <FipeTest />
    </div>
  );
  
}