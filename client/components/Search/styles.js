import css from 'styled-jsx/css';
import theme from '../../theme';

export default css`
  #search {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
  }

  #form {
    display: flex;
  }

  .input_wrapper {
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
  
  .input_with_icon_wrapper {
    position: relative;
  }

  .input_with_icon {
    padding-left: 23px;
  }

  .input_icon {
    position: absolute;
    left: 7px;
    top: 13px;
    color: black;
    font-size: 24px;
  }
`;