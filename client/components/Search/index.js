import { useState } from 'react'
import styles from './styles';
import Button from '../Button';

export default function Search() {
  const [values, setValues] = useState({
    type: "",
    priceFrom: "0",
    priceTo: "",
  });

  function handleInputChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function handleInputClick(e) {
    e.target.select();
  }

  return (
    <div id="search">
      <div id="form">
        <div className="input_wrapper">
          <label htmlFor="type_input">Type</label>
          <input
            id="type_input"
            name="type"
            value={values.type}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="price_from_input">From</label>
          <div className="input_with_icon_wrapper">
            <span className="input_icon">£</span>
            <input
              id="price_from_input"
              className="input_with_icon"
              name="priceFrom"
              type="number"
              min="0"
              value={values.priceFrom}
              onChange={handleInputChange}
              onClick={handleInputClick}
            />
          </div>
        </div>
        <div className="input_wrapper">
          <label htmlFor="price_to_input">To</label>
          <div className="input_with_icon_wrapper">
            <span className="input_icon">£</span>
            <input
              id="price_to_input"
              className="input_with_icon"
              name="priceTo"
              type="number"
              min="0"
              value={values.priceTo}
              onChange={handleInputChange}
              onClick={handleInputClick}
            />
          </div>
        </div>
      </div>
      <Button>Search</Button>
      <style jsx>{styles}</style>
    </div>
  );
}