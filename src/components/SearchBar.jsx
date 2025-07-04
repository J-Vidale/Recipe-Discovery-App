import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (q.trim()) onSearch(q.trim());
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
}
