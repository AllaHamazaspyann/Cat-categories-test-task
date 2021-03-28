import {StateType, ActionType} from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./index').default>;

  export type RootState = StateType<typeof import('./root-reducer').default>;

  export type RootAction = ActionType<typeof import('./root-action').default>;

  interface Types {
    RootAction: RootAction;
  }
}

export interface IDisplayItemProps {
  name: string;
  id: number;
  isActive: boolean;
}

export type IItemName = {
  isActive: boolean;
}

export interface INewCategoryPages {
  1: number | undefined
}

