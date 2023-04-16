import Link from "next/link";
import Image from "next/image";

export default function Movie({ movie }) {
  const imagePath = "https://image.tmdb.org/t/p/original" + movie.poster_path;
  return (
    <div className="flex m-6 flex-col items-center bg-black rounded-md h-auto">
      <Link href={`/${movie.id}`}>
        <Image src={imagePath} alt="poster image" width={300} height={450} />
      </Link>
      <h1 className="text-white mt-5 text-center">{movie.title}</h1>
      <p className="text-white">{movie.release_date}</p>
    </div>
  );
}
