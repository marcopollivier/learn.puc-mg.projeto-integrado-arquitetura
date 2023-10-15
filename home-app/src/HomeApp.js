import axios from 'axios';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import './HomeApp.css';
import DataGridBase from './components/DataGridBase';
import DataGridFullname from './components/DataGridFullname';


const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('FooterApp/Footer'));

function App() {

  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result1 = await axios.get('http://localhost:8080/pessoas');
        setData1(result1.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);
  
  const allDatas = [data1]
  
  function handleComponent(dt) {
    if (dt.type === 'DataGridBase') {
      return <DataGridBase rows={dt.fields.values} />
    }
  
    if (dt.type === 'DataGridFullname') {
      return <DataGridFullname rows={dt.fields.values} />
    }
  
    return null
  }

  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="Container">

        {
          allDatas.map(handleComponent)
        }

      </div>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;