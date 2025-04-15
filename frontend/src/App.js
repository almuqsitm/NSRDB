import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:5000/api/solar-data')
    .then(res => {
      if (res.status === 200) {
        setData(res.data);
      } else {
        console.error('Failed to fetch data');
      }
    })
    .catch(err => console.error('API error:', err));
}, []);




  return (
  <div className="App">
    <h1>Solar Radiation Dashboard</h1>
    <table>
      <thead>
        <tr>
          {data && data.length > 0 && Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((val, j) => <td key={j}>{val}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
  
}

export default App;
