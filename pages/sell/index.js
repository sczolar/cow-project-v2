import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
  display: "none",
});

export default function Sell() {
  return (
    <>
      <div className="sell-container">
        <form>
          <h2>sell your cow &#128004;</h2>
          <TextField
            className="sell-input"
            variant="standard"
            label="cow name"
          />
          <TextField
            className="sell-input"
            variant="standard"
            label="detail describe"
          />
          <TextField className="sell-input" variant="standard" label="list" />
          <TextField className="sell-input" variant="standard" label="price" />
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </form>
      </div>
    </>
  );
}
