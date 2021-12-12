import useScrollPosition from '@react-hook/window-scroll';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INavBarProps {}

type NavBar = React.FC<INavBarProps>;

type NavBarWithComponents = NavBar & {
  Button: React.FC<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & { icon?: React.ReactNode }
  >;
  Section: {
    Left: React.FC;
    Right: React.FC;
  };
};

const NavBarComponent: NavBar = (props) => {
  const scrollY = useScrollPosition();

  return (
    <>
      <div className={'navbar placeholder'} />
      <header className={scrollY > 0 ? 'navbar floating' : 'navbar'}>
        {props.children}
      </header>
    </>
  );
};

export const NavBar = NavBarComponent as NavBarWithComponents;

NavBar.Section = {
  Left: (props) => {
    return <section className={'navbar left'}>{props.children}</section>;
  },
  Right: (props) => {
    return <section className={'navbar right'}>{props.children}</section>;
  },
};

NavBar.Button = (props) => {
  const { icon, ...buttonProps } = props;
  return (
    <button {...buttonProps} aria-label="Menu">
      {icon}
      <span className={'buttontext'}>{props.children}</span>
    </button>
  );
};
