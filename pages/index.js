import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  useEffect(() => {
    if(location.pathname === "/"){
      router.push('/home')
    }
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}
