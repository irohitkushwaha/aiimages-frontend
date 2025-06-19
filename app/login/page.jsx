export async function generateMetadata() {
    return {
      title: "Login on AI Generated Images",
      description: "Login to your account to access AI-generated images",
      robots: "index, follow"
    };
  }

  import LoginComponent from "./login";

  export default function Login() {
    return <LoginComponent />;
  }
