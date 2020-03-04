import styles from "./styles";

export default function Button({ 
  children,
}) {
  return (
    <button>
      {children}
      <style jsx>{styles}</style>
    </button>
  );
}
