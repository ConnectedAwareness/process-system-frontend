import { Page } from './Page';
export class Category {
  constructor(
    public name: string,
    public pages: Page[],
    public categories?: Category[]
  ) {

  }
}
