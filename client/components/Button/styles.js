import css from 'styled-jsx/css';
import theme from '../../theme';

export default css`
  button {
    flex: 1;
    padding: 5px;
    margin: 3px;
    background: ${theme.brandColor};
    display: inline-block;
    border: none;
    text-decoration: none;
    color: #ffffff;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
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

  button.secondary {
    background: white;
    color: ${theme.brandColor};
    border: 1px solid ${theme.brandColor};
    border-radius: 5px;
  }
`;