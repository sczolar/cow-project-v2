export default function Noa() {
  return (
    <>
      <div className="negotiate-container">
          <form>
              <h1>negotiate form</h1>
              <div className="sell-input">
                <label htmlFor="name">name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="sell-input">
                <label htmlFor="price"> negotiate price</label>
                <input type="number" id="price" name="price" required />
              </div>
              <div className="sell-input">
                <label htmlFor="phonenum"> phone no</label>
                <input type="number" id="phonenum" name="phonenum" required />
              </div>
              <div className="sell-input">
                <label htmlFor="adress">address</label>
                <textarea type="text" id="address" name="address" required />
              </div>
              <input type="submit" />
          </form>
      </div>
    </>
  );
}
