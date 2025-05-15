import { useState, useEffect, useRef, type FC } from 'react';
type Props = {
  videoId: string;
  title: string;
  // width: number;
  // height: number
}
const LazyYouTube:FC<Props> = ({ videoId, title }) => {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !loaded) {
      setLoaded(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, [loaded]);

  return (
    <div ref={iframeRef} className="w-full aspect-video flex-1">
      {loaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allowFullScreen
          // width={width}
          // height={height}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full relative max-w-full overflow-hidden aspect-video rounded-8xs"
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button onClick={() => setLoaded(true)}>Load Video</button>
        </div>
      )}
    </div>
  );
};

export default LazyYouTube;