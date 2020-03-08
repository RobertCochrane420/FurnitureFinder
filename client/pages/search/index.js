import { useState } from 'react';
import { globalStyles } from "../../theme";
import Heading from "../../components/Heading"
import styles from "./styles";
import Button from "../../components/Button";
import SearchResult from "../../components/SearchResult";
import Filter from './Filter';

const results = [
  {
    name: 'Paris Grey 2 door Wardrobe',
    desc: 'This is a very fancy chair',
    dimensions: {
      width: '3000',
      height: '3001',
      depth: '3002',
      units: 'mm',
    },
    price: {
      amount: '1000',
      symbol: '£',
    }
  },
  {
    name: 'Poverty Chair',
    desc: 'This is a very poverty chair',
    dimensions: {
      width: '30',
      height: '31',
      depth: '32',
      units: 'mm',
    },
    price: {
      amount: '1',
      symbol: '£',
    }
  },
];

export default function Search() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <div> 
        <Heading />
        <div id="contents">
          <div id="actions">
            <Button type="secondary" onClick={() => setShowFilter(true)}>Filter</Button>
            <Button type="secondary">Sort</Button>
          </div>
          <div id="info">
            <span>121 results</span>
          </div>
          <div id="search_results">
            {results.map(result => <SearchResult key={result.name} {...result} />)}
          </div>
        </div>
        <style jsx>{styles}</style>
        <style jsx global>{globalStyles}</style>
      </div>
      <Filter 
        visible={showFilter} 
        onDone={() => setShowFilter(false)}
      />
    </>
  );
}
