import Image from "next/image";

export default function Featured() {
  return (
    <section className="py-12 bg-[#2A2740]">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <Image
          src="/images/franz.png"
          alt="Franz"
          width={800}
          height={702}
          unoptimized
          className="rounded-lg shadow-xl"
        />
        <div>
          <h3 className="text-2xl mb-4 text-fuchsia-300">Reflections Through Art</h3>
          <p className="text-violet-200">
            Music and verse are not just entertainment, but channels for emotional and philosophical experience. Discover tracks and poetry that resonate deeply with the soul.
          </p>
        </div>
      </div>
    </section>
  );
}
