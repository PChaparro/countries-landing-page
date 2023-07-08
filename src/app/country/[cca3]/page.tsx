import { BackButton } from "@/components/BackButton";
import { Detail } from "@/components/Detail";
import { Container } from "@/components/layout/Container";
import { getCountryByAlpha3Code } from "@/services/countries.svc";
import Image from "next/image";
import Link from "next/link";

// This page is rendered from the server (SSR)
export default async function Page({ params }: { params: { cca3: string } }) {
  const { cca3 } = params;
  const country = await getCountryByAlpha3Code(cca3);

  // Get the names of the border countries
  const borders = Object.values(country.borders || {});
  const borderCountries = await Promise.all(
    borders.map((border) => getCountryByAlpha3Code(border))
  );

  // Parse data in object / array formats
  const currencies = Object.values(country.currencies || {}).map(
    (entry) => `${entry.name} (${entry.symbol})`
  );

  const languages = Object.values(country.languages || {});
  const nativeNames = Object.values(country.name.nativeName || {});

  return (
    <main>
      <Container>
        <BackButton />

        {/* Country info */}
        <div className="grid items-center gap-20 md:grid-cols-2">
          <Image
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="w-full"
            width={800}
            height={533}
          />
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl font-extrabold">{country.name.common}</h1>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Detail
                  title="Native name"
                  value={nativeNames[0]?.official || "NA"}
                />
                <Detail
                  title="Population"
                  value={country.population.toLocaleString() || "NA"}
                />
                <Detail title="Region" value={country.region} />
                <Detail title="Sub Region" value={country.subregion || "NA"} />
                <Detail title="Capital" value={country.capital || "NA"} />
              </div>
              <div>
                <Detail
                  title="Top Level Domain"
                  value={country.tld.join(", ")}
                />
                <Detail
                  title="Currencies"
                  value={currencies.join(", ") || "NA"}
                />
                <Detail
                  title="Languages"
                  value={languages.join(", ") || "NA"}
                />
              </div>
            </div>
            {borderCountries.length > 0 && (
              <div className="flex flex-wrap items-center gap-4">
                <p className="font-bold">Border Countries:</p>
                {borderCountries.map((country) => (
                  <Link
                    href={`/country/${country.cca3}`}
                    key={country.cca3}
                    className="px-4 py-2 bg-white rounded-sm shadow-md dark:shadow-slate-800/20 dark:bg-dark-soft"
                  >
                    {country.name.common}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
