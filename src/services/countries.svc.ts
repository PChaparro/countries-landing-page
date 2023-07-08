import { Country } from "@/types/entities";

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getCountryByAlpha3Code = async (
  code: string
): Promise<Country> => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    const countries: Country[] = await response.json();
    return countries[0];
  } catch (error) {
    throw error;
  }
};
