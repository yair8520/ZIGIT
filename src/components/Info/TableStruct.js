import React from "react";
import Table from "./Table";

function TableStruct({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Score",
        accessor: "score",
        maxWidth: 70,
        minWidth: 50,
        width: 60,
        Cell: (props) => {
          return (
            <div
              style={{
                textAlign: "center",
                backgroundColor:
                  props.value < 70 ? "red" : props.value > 90 ? "green" : null,
              }}
            >
              {props.value}
            </div>
          );
        },
      },
      {
        Header: "Duration In Days",
        accessor: "durationInDays",
        Cell: (props) => {
          return (
            <div
              style={{
                textAlign: "center",
              }}
            >
              {props.value}
            </div>
          );
        },
      },
      {
        Header: "Bugs Count",
        accessor: "bugsCount",
      },
      {
        Header: "Made Dadeline",
        id: "madeDadeline",
        accessor: (a) => a.madeDadeline.toString(),
      },
      {
        Header: "Id",
        accessor: "id",
      },
    ],
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default TableStruct;
