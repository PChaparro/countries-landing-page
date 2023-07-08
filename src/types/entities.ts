export type Country = {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  cca3: string;
  capital: string;
  region: string;
  subregion: string;
  tld: string[];
  population: number;
  flags: {
    svg: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
};
