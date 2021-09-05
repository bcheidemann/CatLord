import React from 'react';
import { Callback } from '@catlord/types';

type UseToggleReturnValue = [
  boolean,
  (on?: boolean) => void,
  Callback,
  Callback
];

export function useToggle(initial?: boolean): UseToggleReturnValue {
  const [on, setStateOn] = React.useState(initial || false);

  function toggle(on?: boolean) {
    if (typeof on === 'boolean') setStateOn(on);
    else setStateOn((value) => !value);
  }

  function setOn() {
    setStateOn(true);
  }

  function setOff() {
    setStateOn(false);
  }

  return [on, toggle, setOn, setOff];
}
