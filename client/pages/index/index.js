import Heading from "../../components/Heading"
import Search from "../../components/Search";
import styles, { body } from "./styles";

export default function Index() {
  return (
    <div>
      <Heading />
      <div id="main_banner" style={{backgroundImage: "url(/download.webp)", backgroundSize: "cover"}}>
        <Search />
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{body}</style>
    </div>
  );
}