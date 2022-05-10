import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../pages/_app"

export default function Home(props) {
  const {value} = useContext(Context)
  const router = useRouter();
  useEffect(() => {
    if (location.pathname === "/" && !value.error ) {
      router.push('/home')
    }
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}
