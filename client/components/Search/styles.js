import css from 'styled-jsx/css';
import theme from '../../theme';

export default css`
  #search {
    max-width: 900px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
  }

  #form {
    display: flex;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .input_wrapper {
    width: 205px;
    margin: 10px;
    display: flex;
    flex-direction: column;
  }
  
  input {
    margin: 7px 0px;
    padding: 7px;
    font-size: 18px;
    outline-color: ${theme.brandColor} 
  }
`;