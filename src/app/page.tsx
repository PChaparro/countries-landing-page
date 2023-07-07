"use client";

import { CountryCard } from "@/components/CountryCard";
import { Container } from "@/components/layout/Container";
import { getCountries } from "@/services/countries.svc";
import { Country } from "@/types/entities";
import { FetchStatus } from "@/types/shared";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

export default function Home() {
  const { theme } = useTheme();

  const [countries, setCountries] = useState<Country[]>([]);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.IDLE);

  const [search, setSearch] = useState<string>("");
  const debouncedSearchField = useDebounce(search, 200);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const fetchCountries = async () => {
    try {
      const countries = await getCountries();
      setCountries(countries);
      setFilteredCountries(countries);
      setFetchStatus(FetchStatus.SUCCESS);
    } catch (error) {
      setFetchStatus(FetchStatus.ERROR);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(debouncedSearchField.toLowerCase());
    });

    setFilteredCountries(filteredCountries);
  }, [debouncedSearchField, countries]);

  // TODO: Handle loading and error states
  return (
    <main>
      <Container>
        {/* Filter inputs */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a country..."
            className="w-full py-4 my-8 rounded-md shadow-sm md:max-w-md px-14 dark:bg-dark-soft dark:placeholder-white"
            onChange={handleSearchChange}
          />
          <Search
            size={24}
            color={theme == "light" ? "#8C8C8C" : "white"}
            className="absolute top-[50%] -translate-y-1/2 left-4"
          />
        </div>
        {/* Countries container */}
        <section className="grid content-center gap-16 grid-cols-auto-fill-250">
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </section>
      </Container>
    </main>
  );
}
