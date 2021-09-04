import { Story, Meta } from '@storybook/react';
import { Menu, MenuProps } from './menu';

export default {
  component: Menu,
  title: 'Menu',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <>
    <img
      src={'https://i.redd.it/c3uhsgo1vx541.jpg'}
      width={'100%'}
      height={'auto'}
      alt={'Background'}
    />
    <div style={{ position: 'absolute', inset: 0 }}>
      <Menu {...args} />
    </div>
  </>
);

export const Primary = Template.bind({});
Primary.args = {};
