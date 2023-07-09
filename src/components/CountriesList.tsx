"use client";

import { Search } from "lucide-react";
import { CountryCard } from "./CountryCard";
import { useEffect, useState } from "react";
import { Country } from "@/types/entities";
import { useTheme } from "next-themes";
import { Container } from "./layout/Container";
import { useIsMounted } from "@/hooks/useIsMounted";

interface CountriesListProps {
  countries: Country[];
}

export const CountriesList = ({ countries }: CountriesListProps) => {
  const { theme } = useTheme();

  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setRegion(value);
  };

  const filterCountries = () => {
    const filterResults = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return (
        countryName.includes(search.toLowerCase()) &&
        country.region.includes(region)
      );
    });

    return filterResults;
  };

  let filteredCountries: Country[] = filterCountries();

  const { mounted } = useIsMounted();
  if (!mounted) return null;

  return (
    <Container>
      {/* Filter inputs */}
      <div className="flex flex-wrap items-center justify-between my-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a country..."
            className="w-full py-4 my-4 rounded-md shadow-sm md:max-w-md px-14 dark:bg-dark-soft dark:placeholder-white"
            onChange={handleSearchChange}
          />
          <Search
            size={24}
            color={theme == "light" ? "#8C8C8C" : "white"}
            className="absolute top-[50%] -translate-y-1/2 left-4"
          />
        </div>
        <select
          className="p-4 bg-white rounded-md shadow-sm dark:bg-dark-soft"
          onChange={handleSelectChange}
          defaultValue={""}
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {/* Countries container */}
      <section className="grid content-center gap-16 mt-8 grid-cols-auto-fill-250">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </section>
    </Container>
  );
};
