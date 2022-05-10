export default async function Logincheck(value, dispatch, router) {
  try {
    dispatch({ type: "loading" });
    const user = await fetch("/api/token").then((res) => res.json());
    if (user.success) {
      dispatch({ type: "login", value: user.data.username });
    } else {
      dispatch({type:"error",value:user.message})
      router.push('/login')
    }
  } catch (error) {
    dispatch({ type: "error", value: error.message });
  }
}
