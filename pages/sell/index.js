import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function Sell() {
  const onChange = async (formData) => {
    console.log(formData);

    const response = await fetch("/api/sell", {
      formData,
      method: "POST",
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    }).then((res) => res.json());

    console.log("response", response.data);
  };

  const [listbox, setlistbox] = useState([1, 1]);
  const newlist = (e) => {
    e.preventDefault();
    setlistbox((a) => [...a, 1]);
  };

  const [page, setpage] = useState(1);
  const pagecountinc = (e) => {
    e.preventDefault();
    if (page === 3) {
      return;
    }
    setpage((a) => a + 1);
  };
  const pagecountdec = (e) => {
    e.preventDefault();
    if (page === 1) {
      return;
    }
    setpage((a) => a + -1);
  };
  console.log(listbox, page);
  return (
    <>
      <div className="sell-container">
        <form encType="multipart/form-data" method="POST" action="/api/sell">
          <h1>sell your cow</h1>
          <div className="sell-content">
            <div className={page === 1 ? "active" : "unactive"}>
              <div className="sell-input">
                <label htmlFor="name">name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="sell-input">
                <label htmlFor="price">price</label>
                <input type="number" id="price" name="price" required />
              </div>
              <div className="sell-input">
                <label htmlFor="detail">detail</label>
                <textarea type="text" id="detail" name="detail" required />
              </div>
            </div>
          </div>
          <div className="sell-content">
            <div className={page === 2 ? "active" : "unactive"}>
              <div className="sell-input">
                <label htmlFor="dlist">list of known things</label>
                <button className="list-add" onClick={newlist}>
                  Add more
                </button>
                {listbox.map((a, i) => (
                  <input
                    className="list-add-inc"
                    type="text"
                    id="dlist"
                    name="dlist"
                    key={i}
                    required
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="sell-content">
            <div className={page === 3 ? "active" : "unactive"}>
              <div className="sell-input upload">
                <label htmlFor="sellcow">
                  upload image <CloudUploadIcon />
                </label>
                <input
                  type="file"
                  name="sellcow"
                  id="sellcow"
                  label="Upload Single File"
                  required
                  style={{ display: "none" }}
                />
                <input type="submit" value="submit" />
              </div>
            </div>
          </div>
          <div className="page-handler">
            <button
              className={page == 1 ? "unactive" : "active"}
              onClick={pagecountdec}
            >
              previous
            </button>
            <button
              className={page == 3 ? "unactive" : "active"}
              onClick={pagecountinc}
            >
              next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
