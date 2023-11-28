import React from "react";

const TableView = ({ tableData }) => {
  return (
    <table className="table table-bordered mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>SurName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData?.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableView;
