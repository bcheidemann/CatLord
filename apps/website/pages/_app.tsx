import 'preact/debug';
import App, { AppProps, AppContext } from 'next/app';
import '@south-paw/typeface-minecraft';
import './styles.css';
import React from 'react';
import { MainPage } from '../components/main-page';
import '../../../libs/components/src/lib/menu/menu.css';
import '../../../libs/components/src/lib/navbar/navbar.css';
import Head from 'next/head';
import { config } from '@catlord/lib-cms';
import { ClientConfig } from 'next-sanity';
import { SanityConfigProvider } from '../components/SanityConfigProvider';

type Props = AppProps;

function CustomApp({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The official website of the CatLord minecraft server."
        />
      </Head>
      <MainPage>
        <Component {...pageProps} />
      </MainPage>
    </>
  );
}

export default CustomApp;
