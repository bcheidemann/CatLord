import '../../storybook/setup';
import { useToggle } from '@catlord/hooks';
import { Story, Meta } from '@storybook/react';
import { Menu, MenuProps } from './menu';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import { IMenuSection } from './menu.types';
import './menu.css';
import { CustomViewports } from '../../storybook/config';

export default {
  component: Menu,
  title: 'Menu',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    viewport: {
      viewports: {...INITIAL_VIEWPORTS},
    },
  },
} as Meta;

const TemplateComponent = (props: MenuProps) => {
  const [open, toggle] = useToggle();
  const [activeSectionId, setActiveSectionId] = React.useState('main');

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

  function onSelectOption(sectionId: string, optionId: string) {
    setActiveSectionId(optionId);
  }

  return (
    <>
      <img
        src={'https://i.redd.it/c3uhsgo1vx541.jpg'}
        width={'100%'}
        height={'auto'}
        alt={'Background'}
      />
      <button onClick={() => toggle()}>Test</button>
      <Menu
        {...props}
        menuSections={menuSections}
        activeSectionId={activeSectionId}
        open={open}
        onRequestClose={toggle}
        onSelectOption={onSelectOption}
        onClosed={() => setActiveSectionId('main')}
      />
    </>
  );
};

const Template: Story<MenuProps> = (args) => <TemplateComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const MobileLarge = Template.bind({});
MobileLarge.args = {};
MobileLarge.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  },
};

export const MobileSmall = Template.bind({});
MobileSmall.args = {};
MobileSmall.parameters = {
  viewport: {
    defaultViewport: 'iphone5'
  },
};
