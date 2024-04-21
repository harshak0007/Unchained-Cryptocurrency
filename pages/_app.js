import "../styles/globals.css";

import { ERC20Provider } from "../context/unchainedToken";
import Navbar from "../components/Navbar/Navbar";
const MyApp = ({ Component, pageProps }) => (
  <ERC20Provider>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </ERC20Provider>
);

export default MyApp;
