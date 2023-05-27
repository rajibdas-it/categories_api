export interface ICategory extends Document {
  name: string;
  parent?: ICategory | null;
  isActive: boolean;
}
