import React from 'react';

export interface IMenuOption<Data = unknown> {
  name: string;
  id: string;
  data?: Data;
}

export interface IMenuSection {
  id: string;
  options: Array<IMenuOption>;
}
