import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/manageUsers.css";
import { Toaster } from "react-hot-toast";
import "../styles/editProfile.css";
import "../styles/adminBar.css";


function MyApp({ Component, pageProps }) {
  return (<>
    <Toaster
      position="bottom-center"
      reverseOrder={true}
    />
    <Component {...pageProps} />
  </>
  );
}

export default MyApp;
