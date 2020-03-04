import theme from "../../theme";

export default function Heading() {
  return (
    <header>
      <h1>fitmyfittings.com</h1>
      <span>LOGIN</span>
      <style jsx>{`
        header {
          padding: 5px 15px;
          background: ${theme.brandColor};
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h1 {
          margin: 5px;
        }
      `}</style>
    </header>
  );
}