export function Home(props) {
  const { user } = props;
  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <p>Thank you for visiting our website.</p>
    </div>
  );
}
