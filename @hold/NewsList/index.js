import React from 'react';
import data from '../NewsList/news.json';
import NewsItem from '../NewsItem';
import LeadNewsItem from '../../components/LeadNewsItem';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
let firstItem = data.shift();

const NewsList = () => (
  <>
    <LeadNewsItem item={firstItem} />
    <h1 className="display-6 mb-2 mt-4">All Stories</h1>
    <hr />
    {data.map((item, index) => (
      <NewsItem item={item} index={index} key={index} />
    ))}
  </>
);

export default NewsList;
