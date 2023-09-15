import LocationSummary from "./summary";

export default function LocationList({locations, page}) {
  if (locations.length > 0 && page.slug === "index") {
    return (
      <section>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-12 mt-8 md:mt-16">
            {locations.map((location, i) => (
              <LocationSummary location={location} key={i} />
            ))}
          </div>
          <a href="/locations/">
            <button className="button-primary rounded-lg">All Locations</button>
          </a>
      </section>
    );
  }else if (locations.length > 0) {
    return (
      <section>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-12 mt-8 md:mt-16">
          {locations.map((location, i) => (
            <LocationSummary location={location} key={i} />
          ))}
        </div>
      </section>
    );
  };
  return;
}
