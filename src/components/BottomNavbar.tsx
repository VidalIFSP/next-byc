'use client';
import Link from 'next/link';

export default function BottomNavbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '16px',
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Link
        href="/dashboard"
        style={{
          color: '#2563eb',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Home
      </Link>
      <Link
        href="/shoplist"
        style={{
          color: '#2563eb',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Lista de Compras
      </Link>
    </nav>
  );
}
