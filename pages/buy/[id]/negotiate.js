import { useState, useContext } from "react"
import { Context } from "../../../pages/_app"
import Router from "next/router"
import Loader from "../../../components/loader"


export default function Noa() {
  const router = Router.useRouter();
  const { value, dispatch } = useContext(Context);
  const [from, setfrom] = useState({ name: "", price: "", phonenum: "", address: "" });
  const loginhandler = (e) => {
    // dispatch({ type: "clear" })
    setfrom({ ...from, [e.target.name]: e.target.value });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "loading" })
    const id = location.search.split("=")
    const data = await fetch("/api/negotiate", {
      method: "POST",
      body: JSON.stringify({ from, id: id[1] })
    }).then(res => res.json())
    if (data.success) {
      router.push('/buy/'+id[1])
    }
  }

  if (value.loading) { return <loader /> }
  return (
    <>
      <div className="negotiate-container">
        <form onSubmit={submithandler}>
          <h1>negotiate form</h1>
          <div className="sell-input">
            <label htmlFor="name">name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={from.name}
              onChange={loginhandler}
              required
            />
          </div>
          <div className="sell-input">
            <label htmlFor="price"> negotiate price</label>
            <input
              type="number"
              id="price"
              name="price"
              required
              value={from.price}
              onChange={loginhandler}
            />
          </div>
          <div className="sell-input">
            <label htmlFor="phonenum"> phone no</label>
            <input
              type="number"
              id="phonenum"
              name="phonenum"
              value={from.phonenum}
              onChange={loginhandler}
              required
            />
          </div>
          <div className="sell-input">
            <label htmlFor="adress">address</label>
            <textarea
              type="text"
              id="address"
              name="address"
              value={from.address}
              onChange={loginhandler}
              required
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
