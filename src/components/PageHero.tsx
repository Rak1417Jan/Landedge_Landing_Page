type Props = {
  image?: string;
  video?: string;
  title: string;
  height?: string;
};

export function PageHero({ image, video, title, height = "h-[380px] md:h-[420px]" }: Props) {
  return (
    <section className={`relative w-full ${height} overflow-hidden flex items-center`}>
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
      ) : (
        image && <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover select-none" />
      )}
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-16 flex items-center justify-start h-full pb-10 md:pb-16">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-black tracking-wide drop-shadow-sm uppercase animate-fade-in">
          {title}
        </h1>
      </div>
    </section>
  );
}
