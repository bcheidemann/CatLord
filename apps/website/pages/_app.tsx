import 'preact/debug';
import { AppProps } from 'next/app';
import '@south-paw/typeface-minecraft';
import './styles.css';
import React from 'react';
import { MainPage, PageParameters } from '../components/MainPage';
import '../../../libs/components/src/lib/menu/menu.css';
import '../../../libs/components/src/lib/navbar/navbar.css';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

type Props = AppProps;

function CustomApp({ Component, pageProps }: Props) {
  const parameters = Component['parameters'] as PageParameters;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The official website of the CatLord minecraft server."
        />
      </Head>
      <MainPage {...parameters}>
        <Component {...pageProps} />
      </MainPage>
    </>
  );
}

export default CustomApp;
