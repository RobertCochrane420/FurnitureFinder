import Button from "../../../components/Button";
import styles from "./styles";

export default function Filter({
  visible,
  onDone,
}) {

  if (!visible) {
    return null;
  }

  return (
    <div id="filter">
      FILTER
      <Button type="secondary" onClick={onDone}>Done</Button>
      <style jsx>{styles}</style>
    </div>
  );
}