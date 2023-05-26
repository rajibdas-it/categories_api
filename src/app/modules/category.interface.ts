export interface ICategory {
  name: string;
  parent: ICategory | null;
  isActive: boolean;
}
