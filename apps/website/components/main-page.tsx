import { useToggle } from '@catlord/hooks';
import Head from 'next/head';
import React from 'react';
import { IMenuSection, Menu } from '@catlord/components';

const menuSections: IMenuSection[] = [
  {
    id: 'main',
    options: [
      { id: 'home', name: 'Home' },
      { id: 'mods', name: 'Mods' },
      { id: 'map', name: 'Map' },
      { id: 'login', name: 'Login' },
    ],
  },
  {
    id: 'mods',
    options: [
      { id: 'main', name: '< Back' },
      { id: 'catcrafting', name: 'CatCrafting' },
      { id: 'yerawizard', name: 'YerAWizard' },
      { id: 'chestframes', name: 'ChestFrames' },
    ],
  },
];

export const MainPage: React.FC = ({ children }) => {
  const [open, toggle] = useToggle();
  const [activeSectionId, setActiveSectionId] = React.useState('main');

  function onSelectOption(sectionId: string, optionId: string) {
    setActiveSectionId(optionId);
  }

  return (
    <>
      <Head>
        <title>CatLord</title>
      </Head>
      <div className="app">
        <header onClick={() => toggle()}>
          <h1>Welcome to website!</h1>
        </header>
        <main>{children}</main>
        <Menu
          menuSections={menuSections}
          activeSectionId={activeSectionId}
          open={open}
          onRequestClose={toggle}
          onSelectOption={onSelectOption}
          onClosed={() => setActiveSectionId('main')}
        />
      </div>
    </>
  );
};
