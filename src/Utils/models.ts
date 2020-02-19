export interface RouteLink {
  url?: string;
  title: string;
}

export interface AdditionalInformation {
  title: string;
  description: string;
  linkText: string;
  url: string;
}

export interface WeatherNow {
  dt: number;
  main: any;
  weather: any[];
  clouds: any;
  wind: any;
  dt_txt: string;
}

export interface City {
  name: string;
  id: number;
  country: string;
}
export interface WeatherAndCity {
  city: City;
  weatherNow: WeatherNow;
  icon: string;
}

export enum LANGS {
  pl = "pl",
  en = "en",
  is = "is"
}

export interface FooterSection {
  title: string;
  links: RouteLink[];
}

export interface NavLink {
  title: string;
  links: RouteLink[];
}
export interface NavElement {
  title: string;
  navLinks: NavLink[];
}
