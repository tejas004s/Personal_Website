function Header() {
  return (
    <header style={{
      backgroundColor: '#00CED1',
      color: '#FFFFFF',
      padding: '1.5rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Tejas S</h1>
      <p style={{ marginTop: '0.5rem', fontSize: '1.125rem' }}>
        Bengaluru, Karnataka | +91-9008923966 | tejashowda004@gmail.com
      </p>
      <div style={{ marginTop: '0.5rem' }}>
        <a href="https://leetcode.com/u/tejashowda004/" target="_blank" rel="noopener noreferrer" style={{ color: '#B0E0E6', margin: '0 0.5rem' }}>LeetCode</a>
        <a href="https://github.com/TEJAS" target="_blank" rel="noopener noreferrer" style={{ color: '#B0E0E6', margin: '0 0.5rem' }}>GitHub</a>
      </div>
    </header>
  );
}

export default Header;