import React from 'react';
import './menu.css';

export interface MenuProps {
  open?: boolean;
}

export function Menu(props: MenuProps) {

  React.useEffect(() => {
    console.log(props.open);
  }, [props.open]);

  return (
    <div className={'menu'}>
      <h1>Welcome to Menu!</h1>
    </div>
  );
}

export default Menu;
