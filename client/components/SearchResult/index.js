import styles from "./styles";

export default function SearchResult({
  name,
  price,
}) {

  return (
    <div id="search_result">
      <h2>{name}</h2>
      <span id="price">{price.symbol}{price.amount}</span>
      <style jsx>{styles}</style>
    </div>
  );
}
