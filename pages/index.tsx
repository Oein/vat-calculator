import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  let [data, setData] = useState("");

  const divByThree = (num: number) => {
    let str = Math.floor(num).toString();
    let out: string[] = [];
    console.log(str);
    for (let i = str.length % 3; i < str.length; i += 3) {
      console.log("i", i);
      let a = str.charAt(i);
      let b = str.charAt(i + 1);
      let c = str.charAt(i + 2);

      console.log(a, b, c);

      out = [...out, `${a}${b}${c}`];
    }
    if (str.length % 3) {
      out = [str.substr(0, str.length % 3), ...out];
    }
    return out.join(",");
  };

  return (
    <div className="container">
      <div className={styles.x}>
        <div className={styles.y}>
          <input
            placeholder="판매가액"
            type="number"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button
            onClick={(e) => {
              setData("");
              e.preventDefault();
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <h1>공급가액</h1>
      <h2>
        <span
          style={{
            color: "red",
          }}
        >
          {divByThree(parseInt(data) / 1.1)}
        </span>
        원
      </h2>
      <h1>부가세액</h1>
      <h2>
        <span
          style={{
            color: "red",
          }}
        >
          {divByThree(parseInt(data) / 11)}
        </span>
        원
      </h2>
    </div>
  );
}
