import { LoginSocialFacebook } from "reactjs-social-login";
import CustomFacebookButton from "./FBLoginbtn";
// import { FacebookLoginButton } from "react-social-login-buttons";

function FacebookLogin() {
  return (
    <LoginSocialFacebook
      appId={process.env.APP_ID}
      onResolve={(resolve) => {
        console.log(resolve);
      }}
      onReject={(error) => {
        console.log(error);
      }}
    >
      <CustomFacebookButton />
    </LoginSocialFacebook>
  );
}
export default FacebookLogin;
