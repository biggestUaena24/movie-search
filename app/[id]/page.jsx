import Image from "next/image";

const fetchData = async (id) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  return data.json();
};

export default async function MovieDetail({ params }) {
  const { id } = params;
  const movie = await fetchData(id);
  const imagePath = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;

  return (
    <div className="min-h-full min-w-full flex items-center justify-center flex-col">
      <Image src={imagePath} alt="poster image" width={1000} height={1000} />
      <h1 className="text-white mt-5 text-center text-3xl">{movie.title}</h1>
      <p className="text-white mt-5 text-center text-xl">
        {movie.release_date}
      </p>
      <p className="text-white mt-5 text-center text-xl">
        Runtime: {movie.runtime} minutes
      </p>
      <p className="text-white mt-5 text-center text-xl">
        {movie.genres.map((genre) => genre.name).join(", ")}
      </p>
      <p className="text-white mt-5 text-center text-xl w-[70%]">
        {movie.overview}
      </p>
      <p
        className={
          "inline-block text-white mt-5 text-center text-lg px-4 py-2 rounded-md " +
          (movie.status === "Released" ? "bg-green-600" : "bg-red-600")
        }
      >
        {movie.status}
      </p>
    </div>
  );
}
