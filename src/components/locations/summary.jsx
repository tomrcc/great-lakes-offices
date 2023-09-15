export default function LocationSummary({ location }) {
  const {
    data: { title, city, country, image, image_alt, logo_image },
    slug,
  } = location;
  return (
    <>
      <div className="flex justify-center">
        <article className="block">
          <a href={`/locations/${slug}`}>
            <img
              className="rounded-lg"
              src={image}
              alt={image_alt}
              loading="lazy"
            />
          </a>
          <a className="flex flex-col justify-start mt-2 max-w-[500px]" href={`/locations/${slug}`}>
            <img src={logo_image} alt={`The ${title} crest`} />
            <div>
              <p className="text-2xl font-semibold">{title}</p>
              <p className="font-light">{city}, {country}</p>
            </div>
          </a>
        </article>
      </div>
    </>
  );
}
