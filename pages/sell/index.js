export default function Sell() {
  const onChange = async (formData) => {
    console.log(formData)

    const response = await fetch('/api/sell', {
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
        <form>
          <input
            type="file"
            name="sellcow"
            label="Upload Single File"
            onChange={onChange}
          />
        </form>
      </div>
    </>
  );
}
