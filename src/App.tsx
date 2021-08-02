import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { DataRepoImpl } from './data/DataRepoImpl';
import { DataRepo } from './data/DataRepo';
import { Sections } from './Sections';

function App() {
  const dataRepo: DataRepo = new DataRepoImpl()
  return (
    <div className="col" style={{alignItems: "center", minWidth: "100%", maxWidth: "100%"}}>
      <Header dataRepo={dataRepo} />
      <Sections dataRepo={dataRepo} />
    </div>
  );
}

export default App;
