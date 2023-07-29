import Buttons from "@/components/Buttons";
import { signOutUser, signInWithGooglePopup } from "@/lib/firebase";

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  return <Buttons onClick={signInWithGoogle}>Sign in with Google</Buttons>;
}

function SignOutButton() {
  return <Buttons onClick={() => signOutUser()}>Sign Out</Buttons>;
}
function UsernameForm() {
  return <>Hey</>;
}
const Enter = () => {
  const user = null;
  const username = null;

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};

export default Enter;
