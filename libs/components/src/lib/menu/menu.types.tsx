export interface IMenuOption {
  name: string;
  id: string;
}

export interface IMenuSection {
  id: string;
  options: Array<IMenuOption>;
}
