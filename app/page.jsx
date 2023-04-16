import Movie from "./movie";

const fetchMovieData = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res;
};

export default async function Home() {
  const res = await fetchMovieData();
  return (
    <main>
      <div className="grid gap-1 grid-cols-fluid">
        {res.results.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </main>
  );
}
