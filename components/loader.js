import Loader from "../public/loader.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="loader">
      <div>
        <Image alt="loading..." src={Loader} width="100" height="100" />
      </div>
    </div>
  );
}
