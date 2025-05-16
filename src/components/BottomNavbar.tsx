'use client';
import Link from 'next/link';

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-4 shadow-md">
      <Link href="/settings" className="text-blue-600 font-semibold">
        Settings
      </Link>
      <Link href="/my-builds" className="text-blue-600 font-semibold">
        My Builds
      </Link>
    </nav>
  );
}
