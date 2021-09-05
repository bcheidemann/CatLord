import { AppProps } from 'next/app';
import '@south-paw/typeface-minecraft';
import './styles.css';
import React from 'react';
import { MainPage } from '../components/main-page';
import '../../../libs/components/src/lib/menu/menu.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <MainPage>
      <Component {...pageProps} />
    </MainPage>
  );
}

export default CustomApp;
