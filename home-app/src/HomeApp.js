import React, { lazy, Suspense } from 'react';
import DataGridBase from './components/DataGridBase';
import DataGridFullname from './components/DataGridFullname';
import './HomeApp.css';

const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('FooterApp/Footer'));

const data1 = {
  "title": "pessoas",
  "type": "DataGridBase",
  "owner": {
      "name": "plataforma",
      "slack-help-channel": "https://gophers.slack.com/archives/C172TMM9V"
  },
  "fields": {
    "title": "pessoas_go",
    "values": [
      { "id": 1, "lastName": 'Snow',        "firstName": 'Jon',       "age": 35 },
      { "id": 2, "lastName": 'Lannister',   "firstName": 'Cersei',    "age": 42 },
      { "id": 3, "lastName": 'Lannister',   "firstName": 'Jaime',     "age": 45 },
      { "id": 4, "lastName": 'Stark',       "firstName": 'Arya',      "age": 16 },
      { "id": 5, "lastName": 'Targaryen',   "firstName": 'Daenerys',  "age": null },
      { "id": 6, "lastName": 'Melisandre',  "firstName": null,        "age": 150 },
      { "id": 7, "lastName": 'Clifford',    "firstName": 'Ferrara',   "age": 44 },
      { "id": 8, "lastName": 'Frances',     "firstName": 'Rossini',   "age": 36 },
      { "id": 9, "lastName": 'Roxie',       "firstName": 'Harvey',    "age": 65 },
    ]
  } 
}

const data2 = {
  "title": "pessoas_clojure",
  "type": "DataGridFullname",
  "owner": {
      "name": "plataforma",
      "slack-help-channel": "https://gophers.slack.com/archives/C172TMM9V"
  },
  "fields": {
    "title": "ID",
    "values": [
      { "id": 1, "lastName": 'Snow',        "firstName": 'Jon',       "age": 35 },
      { "id": 2, "lastName": 'Lannister',   "firstName": 'Cersei',    "age": 42 },
      { "id": 3, "lastName": 'Lannister',   "firstName": 'Jaime',     "age": 45 },
      { "id": 4, "lastName": 'Stark',       "firstName": 'Arya',      "age": 16 },
      { "id": 5, "lastName": 'Targaryen',   "firstName": 'Daenerys',  "age": null },
      { "id": 6, "lastName": 'Melisandre',  "firstName": null,        "age": 150 },
      { "id": 7, "lastName": 'Clifford',    "firstName": 'Ferrara',   "age": 44 },
      { "id": 8, "lastName": 'Frances',     "firstName": 'Rossini',   "age": 36 },
      { "id": 9, "lastName": 'Roxie',       "firstName": 'Harvey',    "age": 65 },
    ]
  }
}

const data3 = {
  "title": "pessoas",
  "type": "DataGridFullname",
  "owner": {
      "name": "plataforma",
      "slack-help-channel": "https://gophers.slack.com/archives/C172TMM9V"
  },
  "fields": {
    "title": "ID",
    "values": [
      { "id": 1, "lastName": 'Snow',        "firstName": 'Jon',       "age": 35 },
      { "id": 2, "lastName": 'Lannister',   "firstName": 'Cersei',    "age": 42 },
      { "id": 3, "lastName": 'Lannister',   "firstName": 'Jaime',     "age": 45 },
      { "id": 4, "lastName": 'Stark',       "firstName": 'Arya',      "age": 16 },
      { "id": 5, "lastName": 'Targaryen',   "firstName": 'Daenerys',  "age": null },
      { "id": 6, "lastName": 'Melisandre',  "firstName": null,        "age": 150 },
      { "id": 7, "lastName": 'Clifford',    "firstName": 'Ferrara',   "age": 44 },
      { "id": 8, "lastName": 'Frances',     "firstName": 'Rossini',   "age": 36 },
      { "id": 9, "lastName": 'Roxie',       "firstName": 'Harvey',    "age": 65 },
    ]
  }
}

const allDatas = [data1, data2, data3]

function a(dt) {
  if (dt.type === 'DataGridBase') {
    return <DataGridBase rows={dt.fields.values} />
  }

  if (dt.type === 'DataGridFullname') {
    return <DataGridFullname rows={dt.fields.values} />
  }

  return null
}

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="Container">

        {
          allDatas.map(a)
        }

      </div>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;