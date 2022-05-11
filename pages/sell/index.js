export default function Sell() {
  const onChange = async (formData) => {
    console.log(formData)

    const response = await fetch('/api/sell', {
      formData,
      method: "POST",
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    })
      .then(res => res.json());

    console.log('response', response.data);
  };
  return (
    <>
      <div className="sell-container">
        <form encType="multipart/form-data" method="POST" action="/api/sell">
          <label htmlFor="name">name</label>
          <input type="text" id="name" name="name"/>
          <label htmlFor="price">price</label>
          <input type="number" id="price" name="price"/>
          <label htmlFor="detail">detail</label>
          <input type="text" id= name="detail"/>
          <label htmlFor="name">name</label>
          <input type="text" name="dlist"/>
          <input
            type="file"
            name="sellcow"
            label="Upload Single File"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}
