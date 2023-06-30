import { resetServerContext } from "react-beautiful-dnd";
import "../src/styles/style.css";

import { GetServerSideProps } from "next";
import { Provider } from "react-redux";
import { store } from "@/src/store";

function App({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

export const getServerSideProps: GetServerSideProps = async () => {
  resetServerContext();

  return { props: {} };
};
