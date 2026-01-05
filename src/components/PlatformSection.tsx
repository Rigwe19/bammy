import { title } from "case";
import { cn } from "../lib/utils";

interface PlatformSectionProps {
  platform: "cinema" | "netflix" | "showmax" | "prime" | "youtube";
  movies: { title: string; link: string }[];
  className?: string;
  gif: string;
}

// const platformConfig = {
//   cinema: {
//     label: "Cinema",
//     badgeClass: "platform-cinema",
//     icon: "🎬",
//   },
//   netflix: {
//     label: "NETFLIX",
//     badgeClass: "platform-netflix",
//     icon: null,
//   },
//   showmax: {
//     label: "showmax",
//     badgeClass: "platform-showmax",
//     icon: null,
//   },
//   prime: {
//     label: "prime video",
//     badgeClass: "platform-prime",
//     icon: null,
//   },
//   youtube: {
//     label: "YouTube",
//     badgeClass: "platform-youtube",
//     icon: null,
//   },
// };

export const PlatformSection = ({
  // platform,
  movies,
  gif,
  className,
}: PlatformSectionProps) => {
  // const config = platformConfig[platform];

  // Determine if multiple columns should be shown and split the movie list into three.
  const showThreeColumns = movies.length > 4;
  const moviesPerColumn = Math.ceil(movies.length / 3);

  const column1 = showThreeColumns ? movies.slice(0, moviesPerColumn) : movies;
  const column2 = showThreeColumns ? movies.slice(moviesPerColumn, 2 * moviesPerColumn) : [];
  const column3 = showThreeColumns ? movies.slice(2 * moviesPerColumn) : [];

  return (
    <div
      className={cn(
        "card-glass rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      <div className="flex items-center justify-center gap-2 mb-4">
      <img src={gif} className="w-1/2 h-20 object-cover" alt="" />
      </div>
      <div
        className={cn(
          "grid gap-x-8 font-dm-sans",
          showThreeColumns ? "grid-cols-3" : "grid-cols-1"
        )}
      >
        <ul className="space-y-2">
          {column1.map((movie, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-white/90"
            >
              <a href={movie.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                <span className="movie-bullet" />
                <span className="font-medium text-left">{title(movie.title)}</span>
              </a>
            </li>
          ))}
        </ul>

        {showThreeColumns && (
          <ul className="space-y-2">
            {column2.map((movie, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-white/90"
              >
                <a href={movie.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                  <span className="movie-bullet" />
                  <span className="font-medium text-left">{title(movie.title)}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        {showThreeColumns && (
          <ul className="space-y-2">
            {column3.map((movie, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-white/90">
                <a href={movie.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:scale-105 transition-transform">
                  <span className="movie-bullet" />
                  <span className="font-medium text-left">{title(movie.title)}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
