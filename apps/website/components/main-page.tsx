import { useToggle } from '@catlord/hooks';
import Head from 'next/head';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IMenuSection, Menu, NavBar } from '@catlord/components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactComponent as DownIcon } from '../public/down-icon.svg';

const menuSections = (): IMenuSection[] => [
  {
    id: 'main',
    options: [
      { id: 'home', name: 'Home', data: '/' },
      { id: 'mods', name: 'Mods' },
      { id: 'map', name: 'Map', data: '/map' },
      { id: 'login', name: 'Login', data: '/login' },
    ],
  },
  {
    id: 'mods',
    options: [
      { id: 'main', name: '< Back' },
      { id: 'catcrafting', name: 'CatCrafting', data: '/mods/catcrafting' },
      { id: 'yerawizard', name: 'YerAWizard', data: '/mods/yerawizard' },
      { id: 'chestframes', name: 'ChestFrames', data: '/mods/chestframes' },
    ],
  },
];

const bodyElement = globalThis.window?.document.body;

export const MainPage: React.FC = ({ children }) => {
  const [open, toggle] = useToggle();
  const [activeSectionId, setActiveSectionId] = useState('main');
  const router = useRouter();

  function onSelectOption(sectionId: string, optionId: string, route: string) {
    if (route) {
      router.push(route);
      toggle();
    } else {
      setActiveSectionId(optionId);
    }
  }

  return (
    <>
      <Head>
        <title>CatLord</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <NavBar>
          <NavBar.Section.Left>
            <Image
              src={'/logo.png'}
              height={32}
              width={32}
              alt={'CatLord Logo'}
            />
            <h1 style={{ marginLeft: 10 }}>CatLord MC</h1>
          </NavBar.Section.Left>
          <NavBar.Section.Right>
            <NavBar.Button
              onClick={() => toggle()}
              icon={<DownIcon width={32} height={32} />}
            >
              Menu
            </NavBar.Button>
          </NavBar.Section.Right>
        </NavBar>
        <main>{children}</main>
        {bodyElement && ReactDOM.createPortal(
          <Menu
            menuSections={menuSections()}
            activeSectionId={activeSectionId}
            open={open}
            onRequestClose={toggle}
            onSelectOption={onSelectOption}
            onClosed={() => setActiveSectionId('main')}
          />,
          bodyElement,
        )}
      </div>
    </>
  );
};
