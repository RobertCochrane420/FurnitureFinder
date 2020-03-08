import css from 'styled-jsx/css';
import theme from '../../theme';

export default css`
  #contents {
    padding: 3px;
    background: ${theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #actions {
    width: 100%;
    display: flex;
  }

  #info {
    width: 100%;
    font-size: 0.8rem;
  }

  #search_results {
    width: 100%;
    color: ${theme.fontColorSecondary}
  }
`;