import React from 'react';

const TableComponent = ({ data }) => {
  return (
    <div className="travel-table">
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.location}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;