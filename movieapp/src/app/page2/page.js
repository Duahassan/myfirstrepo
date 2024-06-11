import VideoPlayer from "./videoplayer";
import MovieDetails from "./moviedetails";
import Navbar from "../components/navbar";
import Head from 'next/head';

export default function Home() {
  return (
<>
        <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Video Player</title>
      </Head>
      <h1 className="text-4xl font-bold mb-6">TMDB Movie Trailer</h1>
      <VideoPlayer />
      <MovieDetails title="Inception" />
    </div>
    </>
  );
}
