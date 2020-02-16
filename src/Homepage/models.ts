import { RouteLink } from "../Utils/models";
export interface Tile {
  isFilled: boolean;
  icon?: any;
  title?: string;
  industry?: string;
  links?: RouteLink[];
  actionLink?: string;
}
