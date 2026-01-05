import { filmographyData } from "../data/filmography";
// import { PlatformSection } from "./Platform-section";

export const MovieList = () => {
  const { platforms } = filmographyData;

  // Combine all movies, adding the platform to each movie object
  const allMovies = Object.entries(platforms).flatMap(([platform, movies]) =>
    movies.map((movie) => ({
      ...movie,
      platform,
    }))
  );
  allMovies.sort((a, b) => a.year - b.year);

  const middleIndex = Math.ceil(allMovies.length / 2);
  const firstHalf = allMovies.slice(0, middleIndex);
  const secondHalf = allMovies.slice(middleIndex);

  return (
    <div className="min-h-screen bg-silver w-full p-4 md:p-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-silver/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      {/* Watermark Image */}
      <div className="absolute inset-0 flex items-end z-2 justify-center pointer-events-none">
        <img
          src="/images/filmography.png" // Replace with your watermark image path
          alt="Watermark"
          className="w-1/2 object-cover opacity-30"
        />
      </div>

      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 items-start">
          {/* Actor Image - Left Side */}
          {/* <div className="lg:col-span-5 order-2 lg:order-1 self-end">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-br from-silver/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative flex items-end" >
                  <img
                    src="/images/filmography.png"
                    alt="Actor"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 glow-effect opacity-20 pointer-events-none" />
                </div>
              </div>
            </div>
          </div> */}

          {/* Content - Right Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 self-stretch flex flex-col justify-center">
            <div className="card-glass rounded-xl p-6">
              <div className="flex items-center justify-center gap-2 mb-5">
                <i className="text-white font-semibold font-worcester-serial tracking-wide">
                  Feature Films <span className="font-dm-sans">&</span> Series
                </i>
              </div>

              {/* Wikipedia-style Filmography Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 font-dm-sans">
                {/* First Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs text-white uppercase bg-white/5">
                      <tr>
                        <th scope="col" className="px-6 py-3">Year</th>
                        <th scope="col" className="px-6 py-3">Title</th>
                        <th scope="col" className="px-6 py-3">Platform</th>
                      </tr>
                    </thead>
                    <tbody>
                      {firstHalf.map((movie, index) => (
                        <tr key={`${movie.title}-${index}`} className="border-b text-white border-gray-700/50 even:bg-white/5">
                          <td className="px-6 py-1">{movie.year}</td>
                          <th scope="row" className="px-6 py-1 font-medium whitespace-nowrap">
                            <a
                              href={movie.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {movie.title}
                            </a>
                          </th>
                          <td className="px-6 py-1 capitalize">{movie.platform}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Second Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs text-white uppercase bg-white/5">
                      <tr>
                        <th scope="col" className="px-6 py-3">Year</th>
                        <th scope="col" className="px-6 py-3">Title</th>
                        <th scope="col" className="px-6 py-3">Platform</th>
                      </tr>
                    </thead>
                    <tbody>
                      {secondHalf.map((movie, index) => (
                        <tr key={`${movie.title}-${index}`} className="border-b text-white border-gray-700/50 even:bg-white/5">
                          <td className="px-6 py-1">{movie.year}</td>
                          <th scope="row" className="px-6 py-1 font-medium whitespace-nowrap">
                            <a
                              href={movie.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {movie.title}
                            </a>
                          </th>
                          <td className="px-6 py-1 capitalize">{movie.platform}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Attribution */}
      {/* <div className="absolute bottom-4 left-4 text-muted-foreground/50 text-xs">
        Filmography • {new Date().getFullYear()}
      </div> */}
    </div>
  );
};