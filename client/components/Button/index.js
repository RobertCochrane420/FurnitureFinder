import styles from "./styles";

export default function Button({ 
  children,
  type="primary",
  ...props
}) {
  return (
    <button {...props} className={type}>
      {children}
      <style jsx>{styles}</style>
    </button>
  );
}
