"use client";

import { CountryCard } from "@/components/CountryCard";
import { Container } from "@/components/layout/Container";
import { getCountries } from "@/services/countries.svc";
import { Country } from "@/types/entities";
import { FetchStatus } from "@/types/shared";
import { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.IDLE);

  const fetchCountries = async () => {
    try {
      const countries = await getCountries();
      setCountries(countries);
      setFetchStatus(FetchStatus.SUCCESS);
    } catch (error) {
      setFetchStatus(FetchStatus.ERROR);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // TODO: Handle loading and error states
  return (
    <main>
      <Container>
        <div className="grid content-center gap-16 grid-cols-auto-fit-250">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      </Container>
    </main>
  );
}
