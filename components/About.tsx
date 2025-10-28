export default function About() {

  const foreword = `
  I write poetry and music under the penname Franz Schopenhauer. Very often, strangers on 
  the streets addressed me in French, so I always jokingly called France my mother Fragrance 
  and decided to take the name Franz. The great philosopher Arthur Schopenhauer is close to me
  in spirit — hence the last name.

  I’d really like, to present you, a series of short verses, poems and musical compositions. 
  My poetic style is visual and mental reflection. Discover the music, I hope you will enjoy it.

  I set myself the goal, to create an endless encyclopedia of contemplation of this beautiful
  world: sublime take-off of the soul, psychedelic fermentation of thought, a surge of doubt 
  and passion. So that any person, young or old, can find something of their own.`;

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl mb-4 text-pink-300">Who is Franz Schopenhauer?</h2>
      <p className="text-violet-200">
      I write poetry and music under the penname Franz Schopenhauer. Very often, strangers on 
      the streets addressed me in French, so I always jokingly called France my mother Fragrance 
      and decided to take the name Franz. The great philosopher Arthur Schopenhauer is close to me
      in spirit — hence the last name.
      </p>
      <p className="text-violet-200 mt-4">
      I’d really like, to present you, a series of short verses, poems and musical compositions. 
      My poetic style is visual and mental reflection. Discover the music, I hope you will enjoy it.
      </p>
      <p className="text-violet-200 mt-4">
      I set myself the goal, to create an endless encyclopedia of contemplation of this beautiful
      world: sublime take-off of the soul, psychedelic fermentation of thought, a surge of doubt 
      and passion. So that any person, young or old, can find something of their own.
      </p>
    </section>
  );
}
