// components/Footer.tsx
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        padding: '16px',
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '14px',
            color: '#4b5563', // Cinza médio (equivalente a text-gray-600)
          }}
        >
          Footer content goes here.
        </p>
      </div>
    </footer>
  );
}

  