import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Article from './component/Article/Article';
import Section from './component/Article/Section';
import Sosial from './component/Article/Sosial';
import Discover from './component/Article/Discover';
import Footer from './component/Footer/Footer';
import FooterCopyright from './component/Footer/FooterCopyright';




function App() {
  return (
    <>
      <Navbar></Navbar>
      <Article></Article>
      <Section></Section>
      <Sosial></Sosial>
      <Discover></Discover>
      <Footer></Footer>
      <FooterCopyright></FooterCopyright>
    </>
  );
}

export default App;
