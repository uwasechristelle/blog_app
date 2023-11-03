import "./Home.css";
import Post from "../postp/Post";
import { Link } from "react-router-dom";
import { Heropage } from "../topbar/Heropage";

export default function Home() {
  return (
    <section>
      <Heropage title="Home" />
      <Post />
    </section>
  );
}
