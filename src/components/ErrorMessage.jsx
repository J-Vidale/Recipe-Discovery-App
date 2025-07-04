export default function ErrorMessage({ error }) {
  return <div style={{ color: 'red' }}>Error: {error.message}</div>;
}
