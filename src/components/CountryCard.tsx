import { Country } from "@/types/entities";
import Image from "next/image";

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <article
      key={country.cca3}
      className="pb-6 bg-white rounded-lg shadow-md shadow-neutral-200/50 dark:bg-dark-soft dark:shadow-slate-800/20"
    >
      <Image
        className="object-cover object-center w-full aspect-video"
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        width={290}
        height={175}
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-extrabold">{country.name.common}</h2>
        <p>
          <span className="font-bold">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>
        <p>
          <span className="font-bold">Region:</span> {country.region}
        </p>
        <p>
          <span className="font-bold">Capital:</span> {country.capital}
        </p>
      </div>
    </article>
  );
};
