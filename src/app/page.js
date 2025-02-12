import React from "react";

function Home() {
  const date = new Date();
  return (
    <main>
      <h1>Hello Next!</h1>
      <footer>Rendered on {date.toLocaleString()}</footer>
    </main>
  );
}

export default Home;
