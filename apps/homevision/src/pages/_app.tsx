import { AppProps } from 'next/app';
import Head from 'next/head';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/Layout';



function CustomApp({ Component, pageProps }: AppProps) {

  const validateEnvSettings = () => {
    if (!process.env.NEXT_PUBLIC_BASE_API_ENDPOINT) {
      throw new Error('Invalid NEXT_PUBLIC_BASE_API_ENDPOINT value')
    }
  }

  validateEnvSettings()

  return (
    <>
      <Head>
        <title>Welcome to HomeVision!</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;
