import { Country } from "@/types/entities";

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
  } catch (error) {
    throw error;
  }
};
