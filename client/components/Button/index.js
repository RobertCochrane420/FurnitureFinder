import styles from "./styles";

export default function Button({ 
  children,
  ...props
}) {
  return (
    <button {...props}>
      {children}
      <style jsx>{styles}</style>
    </button>
  );
}
