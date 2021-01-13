import { DUMMY_DATA } from "./DUMMY_DATA";
import "./App.css";
import DataTable from "react-data-table-component";

const json = JSON.parse(DUMMY_DATA);

const columns = [
  {
    name: "Хэрэглэгчийн дугаар",
    selector: "userid",
  },
  {
    name: "Даваа",
    selector: "monday",
  },
  {
    name: "Мягмар",
    selector: "tuesday",
  },
  {
    name: "Лхагва",
    selector: "wednesday",
  },
  {
    name: "Пүрэв",
    selector: "thursday",
  },
  {
    name: "Баасан",
    selector: "friday",
  },
  {
    name: "Бямба",
    selector: "saturday",
  },
  {
    name: "Ням",
    selector: "sunday",
  },
];

function App() {
  let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  let data = json.map((user) => {
    let userData = Object.entries(user)[0];
    return Object.assign(
      { userid: userData[0] },
      ...userData[1].map((date, i) => {
        return { [days[i]]: date.time };
      })
    );
  });
  return (
      <div>
      <DataTable
        title='Schedule'
        pagination
        paginationRowsPerPageOptions={[10, 25, 50]}
        columns={columns}
        data={data}
      />
      </div>
  );
}

export default App;
