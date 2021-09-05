import useScrollPosition from '@react-hook/window-scroll';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INavBarProps {}

export const NavBar: React.FC<INavBarProps> = (props) => {
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
