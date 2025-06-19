export async function generateMetadata() {
    return {
      title: "Sign Up on AI Generated Images",
      description: "Sign up to create an account and access AI-generated images",
      robots: "index, follow"
    };
  }

  import SignUpComponent from "./signup";

  export default function SignUp() {
    return <SignUpComponent />;
  }