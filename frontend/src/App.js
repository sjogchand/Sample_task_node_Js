import AppRouter from "./config/router";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Modal from "react-modal";
Modal.setAppElement("#root");



function App() {


  return (
    <HelmetProvider>
      <Helmet>
        <title>Milenium Haus </title>
        <meta
          name="keywords"
          content="nft, crypto, looks-yummy-token, looks yummy token"
        />
        <meta
          name="description"
          content="Looks Yummy Token"
        />
      </Helmet>
      <AppRouter />
    </HelmetProvider>
  )
}

export default App;
