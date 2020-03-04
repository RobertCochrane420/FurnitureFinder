import { useState } from 'react'
import Router from 'next/router'
import styles from './styles';
import Button from '../Button';

export default function Search() {
  const [values, setValues] = useState({
    type: "",
    priceFrom: "0",
    priceTo: "",
    height: "0",
    width: "0",
    depth: "0",
    color: "",
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

  function handleSearch() {
    console.log('search');
    Router.push('/search');
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
          <label htmlFor="price_from_input">From (£)</label>
          <input
            id="price_from_input"
            name="priceFrom"
            type="number"
            min="0"
            value={values.priceFrom}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="price_to_input">To (£)</label>
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
        <div className="input_wrapper">
          <label htmlFor="height_input">Height</label>
          <input
            id="height_input"
            name="height"
            value={values.height}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="width_input">Width</label>
          <input
            id="width_input"
            name="width"
            value={values.width}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="depth_input">Depth</label>
          <input
            id="depth_input"
            name="depth"
            value={values.depth}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="color_input">Colour</label>
          <input
            id="color_input"
            name="color"
            value={values.color}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
        </div>
      </div>
      <Button onClick={handleSearch}>Search</Button>
      <style jsx>{styles}</style>
    </div>
  );
}