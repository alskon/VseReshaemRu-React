import React from 'react';
import Layout from './hoc/Layout/Layout'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import Footer from './components/Footer/Footer';
import AdvContacts from './components/AdvContacts/AdvContacts'

function App() {
  return (
    <Layout>
      <Header/>
      <Main/>
      <AdvContacts />
      <Footer/>      
    </Layout>
  );
}

export default App;
