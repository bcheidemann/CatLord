// NOTE: MUST SERVE THE PUBLIC DIR IN APPS/WEBSITE
// FOR DEEPSLATE TEXTURE WHEN RUNNING STORYBOOK

import '../../storybook/setup';
import { Story, Meta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import './navbar.css';
import { INavBarProps, NavBar } from './navbar';

export default {
  component: NavBar,
  title: 'NavBar',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<INavBarProps> = (args) => (
  <>
    <NavBar {...args} />
    {Array.from({ length: 100 }).map((v, i) => (
      <h2>Text {i}</h2>
    ))}
  </>
);

export const Primary = Template.bind({});
Primary.args = {};

export const MobileLarge = Template.bind({});
MobileLarge.args = {};
MobileLarge.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};

export const MobileSmall = Template.bind({});
MobileSmall.args = {};
MobileSmall.parameters = {
  viewport: {
    defaultViewport: 'iphone5',
  },
};
