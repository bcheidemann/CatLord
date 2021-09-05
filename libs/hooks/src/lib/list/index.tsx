import { Callback } from '@catlord/types';
import React from 'react';

type ArrayAdditiveFunc<Argument> = (item: Argument) => number;
type ArrayRemovalFunc<Return> = () => Return | undefined;
type ArrayReplaceFunc<ItemType> = (newList: Array<ItemType> | ((oldList: Array<ItemType>) => Array<ItemType>)) => void;

type UseListReturnValue<T> = [
  Array<T>,
  Callback,
  ArrayReplaceFunc<T>,
  ArrayAdditiveFunc<T>,
  ArrayRemovalFunc<T>,
  ArrayRemovalFunc<T>,
  ArrayAdditiveFunc<T>
];

export function useList<T = unknown>(
  initialValue: Array<T> = []
): UseListReturnValue<T> {
  const [list, setList] = React.useState<Array<T>>(initialValue);

  function push(item: T) {
    const newList = Array.from(list);
    const newLength = newList.push(item);
    setList(newList);
    return newLength;
  }

  function pop() {
    const newList = Array.from(list);
    const removedElement = newList.pop();
    setList(newList);
    return removedElement;
  }

  function shift() {
    const newList = Array.from(list);
    const removedElement = newList.shift();
    setList(newList);
    return removedElement;
  }

  function unshift(item: T) {
    const newList = Array.from(list);
    const newLength = newList.unshift(item);
    setList(newList);
    return newLength;
  }

  function clear() {
    setList([]);
  }

  function replace(newList: Array<T> | ((oldList: Array<T>) => Array<T>)) {
    setList(newList);
  }

  return [list, clear, replace, push, pop, shift, unshift];
}
