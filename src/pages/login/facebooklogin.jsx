import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

function FacebookLogin() {
  return (
    <LoginSocialFacebook
      appId="999248617755408"
      onResolve={(resolve) => {
        console.log(resolve);
      }}
      onReject={(error) => {
        console.log(error);
      }}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  );
}
export default FacebookLogin;
