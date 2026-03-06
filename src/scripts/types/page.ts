export type Page = {
  bootstrapFunction?: string;
  canNavigate: boolean;
  children: Array<Page>;
  description?: string;
  external?: boolean;
  excludeFromNav?: boolean;
  id?: string;
  label: string;
  notes?: Array<string>;
  path?: string;
  title?: string;
};
