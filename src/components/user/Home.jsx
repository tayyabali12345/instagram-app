import { useLocation } from 'react-router-dom';

export function Home(props) {
  const location = useLocation();
  const { signedUser, functionality } = location.state;

  return (
    <div>
      {(() => {
        if (signedUser === "false" && functionality === "signup") {
          return <h1>This Email is already in use</h1>;
        } else {
          return (
            <>
              <h1>Welcome</h1>
              <p>Thank you for visiting our website.</p>
            </>
          );
        }
      })()}
  </div>
  );
}
