interface PoemCardProps {
  title: string;
  image: string;
  preword: string;
  body: string;
}

export default function PoemCard({ title, image, preword, body }: PoemCardProps) {
  const poemText = body; // now interpreted as raw multiline string

  return (
    <div className="mb-16">
      <div className="rounded-xl overflow-hidden border border-fuchsia-500/30 mb-4">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>

      <h2 className="text-2xl font-bold text-pink-300 font-serif text-center mb-2">{title}</h2>

      <p className="italic text-sm text-white/70 mb-4 text-center">{preword}</p>

      <pre className="whitespace-pre-wrap bg-black/20 p-4 rounded border border-pink-500/20 leading-relaxed font-mono text-sm text-white/90 text-center">
        {poemText}
      </pre>

      <hr className="border-pink-500/20 my-10" />
    </div>
  );
}
