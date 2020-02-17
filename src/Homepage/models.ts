import { RouteLink } from "../Utils/models";
export interface Tile {
  isFilled: boolean;
  icon?: any;
  title?: string;
  themeColor?: string;
  industry?: string;
  links?: RouteLink[];
  actionLink?: string;
}
