import css from 'styled-jsx/css';
import theme from '../../theme';

export default css`
  #search_result {
    margin: 5px;
    padding: 10px;
    border: 1px solid ${theme.brandColor};
    border-radius: 5px;
    background: white;
  }

  h2 {
    margin: 0px 0px 5px 0px;
  }

  #price {
    font-size: 1.3rem;
  }
`;