// import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/nav";
import { Card1 } from "./components/card";
import s1 from "./images/series1.jfif";
import s2 from "./images/moneyheist.jfif";
import s3 from "./images/khakee.jfif";
import s4 from "./images/kgf.jfif";
import s5 from "./images/lovesick.jfif";
import s6 from "./images/dark.jfif";

function App() {
  return (
    <div className="App">
      <Nav />
      <Card1 img={s2} title="Money Heist" text="Original Content" link="" />
      <Card1 img={s3} title="Khakee:TBC" text="Original Content" link="" />
      <Card1 img={s4} title="K.G.F. 2" text="Original Content" link="" />
      <Card1 img={s5} title="Love Sick" text="Original Content" link="" />
      <Card1 img={s6} title="Dark" text="Original Content" link="" />
      <Card1 img={s1} title="The Glory" text="Original Content" link="" />
      <Card1 img={s6} title="Dark" text="Original Content" link="" />
      <Card1 img={s1} title="The Glory" text="Original Content" link="" />
    </div>
  );
}

export default App;
