import { globalStyles } from "../../theme";
import Heading from "../../components/Heading"
import styles from "./styles";
import Button from "../../components/Button";

export default function Search() {

  return (
    <div> 
      <Heading />
      <div id="page">
        <div id="actions">
          <Button type="secondary">Filter</Button>
          <Button type="secondary">Sort</Button>
        </div>
        <div id="info">
          <span>121 results</span>
        </div>
        <div id="search_results"></div>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </div>
  );
}
