import React, { useEffect, useState } from "react";

// render list from JSON response to URL
// <APIList url="https://www.dallasopendata.com/resource/f29b-eiwd.json" />
const APIList = ({ url }) => {
  const [records, setRecords] = useState([]);

  // Async get data via API
  const getData = async () => {
    try {
      // get data
      const res = await fetch(url);

      // process response
      if (res.ok) {
        const json = await res.json();
        setRecords(json);
      } else {
        setError(new Error(res.status + " " + res.statusText));
      }
    } catch (err) {
      setError(
        new Error(
          "The events API did not return any data. Check your privacy tools (such as Privacy Badger) and ad blockers (such as uBlock Origin)."
        )
      );
    }
  };

  // pass empty array to useEffect so we only
  // process once when mounting the component.
  useEffect(() => {
    getData();
  }, []); // empty array

  return (
    <div>
      <h1>Open Data List</h1>
      <NoKeyList records={records} />
    </div>
  );
};

// render list with keys
const List = ({ records }) => (
  <ul>
    {records.map(record => (
      <li key={record.docid}>
        Activity: {record.activity}, Amount: {record.chksubtot}, Year:{" "}
        {record.fy}, Vendor: {record.vendor}
      </li>
    ))}
    ;
  </ul>
);

// If there is no record id (key) you can use the index
// as the key but this is not recommended.
const NoKeyList = ({ records }) => (
  <ul>
    {records.map((record, index) => (
      <li key={index}>
        Department: {record.department}, Activity: {record.activity}, Amount:
        {record.chksubtot}, Year: {record.fy}, Vendor: {record.vendor}
      </li>
    ))}
  </ul>
);

export default APIList;
