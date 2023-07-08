import { CountriesList } from "@/components/CountriesList";
import { getCountries } from "@/services/countries.svc";

export default async function Page() {
  // Fetch the countries in the server side to cache them
  const countries = await getCountries();

  return (
    <main>
      <CountriesList countries={countries} />
    </main>
  );
}
