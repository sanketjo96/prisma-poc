import React from 'react';
import './App.css';
import ButtonAppBar from './features/appbar/appbar';
import DataTable from './components/DataTable';
import Search from './components/search/Search'

const tableConfig = {
  columns: [
    { title: "Adı", field: "name" },
    { title: "Soyadı", field: "surname" },
    { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
    {
      title: "Doğum Yeri",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
    }
  ],
  data: [
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
  ],
  option: {
    search: false
  }
}

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Search></Search>
    </div>
  );
}

export default App;
