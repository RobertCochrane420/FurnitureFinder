import css from 'styled-jsx/css';
import theme from '../../theme';

export default css`
  button {
    display: inline-block;
    border: none;
    padding: 10px;
    margin: 0;
    text-decoration: none;
    background: ${theme.brandColor};
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover,
  button:focus {
    background: ${theme.brandColorDark};
    outline: none;
  }
`;