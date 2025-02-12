import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";
import BlurButton from "../components/BlurButton";
import HitCounter from "../components/HitCounter";

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{" "}
        <BlurButton className={"censored"}>{<HitCounter />}</BlurButton>.
      </p>
    </main>
  );
}

export default Home;
