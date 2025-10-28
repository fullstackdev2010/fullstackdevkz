"use client";

import Footer from "@/components/Footer";

export default function MyMoods() {
  const poem0 = `I want to be lonely
And waste life away
I hate being homely
And tend disobey

Whatever the ruling
Was mounted on
Within soft-n-schooling
My mind, thereupon

I want the arrangement
Brought down, away
And all the attainment
Crashed up and astray

Been gone for-true-ever
I am, longing for
A splendid endeavor
My destiny store

A look for affection
Gain, lose and dismiss
Redundant reflection
And painful release

Hot nature forecasting
Done ruling imposed
The soul, still lasting
And lonely dozed`;
  const poem1 = `I have inclination
And tendency quiet
To keep reputation
Somehow defiant

But try to remain
Legitimate carnal
Suppressing the reign
Of wishfulness final

Your spark is enough
To break weakly rule
And crash down bluff
I am, senses full

Been trying expose
Protected-whitewashed
Inversely composed
And formerly sloshed

My will, taking chances
Now’s fully controlled
Not only by fences
An old and bald

Became, well, already
In spite of the time
I have been much steady
Supportive sublime`;
  const poem2 = `A cool morning’s breaking
Above distant shore
My lost and forsaken
The inner rapport

Does wake me, to linger
With bitter in-taste
A failed, foolish thinker
Was I, thoughtless waste

The day gone unnoticed
Towards distant shore
Left vision unfocused
From here to fore

And turned into evening
As well, distant stored
Still not deal-relieving
Much waited accord

My thoughts, scattered round
And sinking afar
Before even found
By someone, ajar

I will try discerning
The meaning, my life
Is endlessly cloning
Perpetual strife`;
  const poem3 = `A frivolous smoky
My life’s turning on
With thoughts, little soapy
And deeds thereupon

I don’t know what
Has dawned onto me
To walk with a strut
And sit with decree

Free feminine tension
I long to endure
Get sweetheart detention
Loose worries obscure

I’m glad to have lost
Your presence, so sober
And firmly embossed
Your feverish prober

Am I, dreaming smoky
An old and bald
Free feminine dopey
Desired untold`;
  const poem4 = `My life is a road
From peaceful, the past
Into the bestowed
And stormy contrast

The future of mine
Is dreamt, up to now
A dangerous, malign
And threatening vow

I swear with plural
And selfish refuse
To fully embellish
Mistakes that I choose

In every my step
I hope, the better
I’m somehow hep
But little upsetter

A thought of the mind
The sign in the air
To leave on, behind
My picturesque care

The move of the hat
The sign on the road
The colorless set
To further on, strode`;
  const poem5 = `I know the clue
But what of it, useless
I cannot get through
The cluelessness ruthless

That chokes my mind
With struggle for nothing
I’m being declined
By cluelessness smashing

The moments of living
I’ve used, love the most
Closed up with a stealing
And furious ghost

My self, has become
From years desperate looking
For clues to the numb
My conscience unhooking

My life is a forest
Of clues always useless
They’re perfectly chorused
In uselessness rootless

They are, not a few
But endlessly numbered
I don’t want the clue
To my, conscience slumbered`;
  const poem6 = `I am, doomed and fated
Some images real
With past life related
Appear genteel

And life’s messing gloom
Is loosed on, forever
The path’s Lady Doom
A blackish endeavor

Calls back to the past
And shakes me inside
With still bleeding fast
My hard injured pride

I seem, to have changed
Surreal and ghostly
My arrogance, flamed
Is no more vastly

Does splash outside
But quietly burning
While feverish pride
Uninjured returning

I stare at the image
Harsh real and ghostly
My memories’ pillage
Neat glimmering, costly`;
  const poem7 = `Philosophy, mine
Is splendid and deep
It’s almost divine
With notes of creep

That tends to distract
The weak and the seeking
Into the abstract
Of fruitless life-leaking

It dwells in the mind
And poisons, the heart
With coarsened, unkind
A treacherous art

Of being the callous
And cynic a creature
Hypocrisy jealous
An envious preacher

The moment will come
I shall be astonished
What covetous scum
Delightfully varnished`;
  const poem8 = `Cheer it up, cheer myself
It is not good, to be broody
Take all my cheers, right from the shelf
I’ve not to be, falling moody

Looking inside, find myself
Gloomy a bit and distracted
It is because, wretched the pelf
Isn’t a passing abstracted

Not an exception, poor my mind
So much dependent on gold
Real the world, somber and blind
Shining away, real cold

Frozen completely, almost fall
And paralyzed by despair
When I was child, busy with all
Little or big things to dare

Now I sit, closed away
Scared to death by the cost
Break all the rules, by rough a play
Startled to think, predisposed`;
  const poem9 = `I am a timid
Shy and discreet
Likely omitted
Tend to retreat

Shaking to speak
Trembling to say
Quietly weak
Peacefully stray

I dare doubt
Shaky humility
Silence devout
Perfect tranquility

They’re not awesome
Valued or praised
Downright loathsome
Praise-fully crazed

All the tranquility
Calmness and peace
My disabilities
And true unease

Make me degrade
Into a poor
And a conveyed
Poorly doer`;

  return (
    <div className="px-6 py-10">

      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif text-pink-300 mb-4">My Moods</h1>
        <p className="text-white/70 italic text-base max-w-2xl mx-auto">
          A person’s behavior is determined by mood. Many people live from one mood state to another, sad or cheerful. Do you? I am using pictures to express my moods.
        </p>
      </div>

        <div className="mb-16" key="0">
          <div className="flex justify-center mb-4">
            <img src="/poems/A lonely dozed (03-11-2022).webp" alt="A lonely dozed" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">A lonely dozed (03-11-2022)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">The world is arranged in such a way, that a person cannot be alone. Men, especially, suffer from it. Because they are lonely in essence of the function, that nature has prepared for them. Men are driven to the unknown, which beckons them with sweet expectations. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem0}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="1">
          <div className="flex justify-center mb-4">
            <img src="/poems/Legitimate carnal (11-07-2022).webp" alt="Legitimate carnal" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Legitimate carnal (11-07-2022)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Spain, Italy, Georgia, Brazil, Argentina, Mexico and many others. These are beautiful countries where fiery hearts live. One spark is enough and the flame will swallow you whole. I would take a chance, but I have become bald already. Try it, you will like it. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem1}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="2">
          <div className="flex justify-center mb-4">
            <img src="/poems/The inner rapport (04-07-2022).webp" alt="The inner rapport" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">The inner rapport (04-07-2022)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">A cool morning or a cloudy evening, a gone day or a coming night, they do not matter at all, when you feel lost in space and time, while trying to discern the meaning of your fragile and lonely life, in the vague outlines of the distant shore. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem2}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="3">
          <div className="flex justify-center mb-4">
            <img src="/poems/Desired untold (23-07-2020).webp" alt="Desired untold" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Desired untold (23-07-2020)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Life is very difficult and stressful thing. Not many of us can break free and not lose themselves and ruin their lives. I kneel before the desperate and strong people. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem3}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="4">
          <div className="flex justify-center mb-4">
            <img src="/poems/My plural self (19-05-2020).webp" alt="My plural self" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">My plural self (19-05-2020)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Life is a road into the stormy future from the peaceful past. Why is it so? It is a paradox. The future is always stormy, whilst the past is always peaceful. Surely, we apprehend the known, as peaceful, and the unknown, as stormy and dangerous. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem4}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="5">
          <div className="flex justify-center mb-4">
            <img src="/poems/My cluelessness aging (13-05-2020).webp" alt="My cluelessness aging" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">My cluelessness aging (13-05-2020)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">We live in a forest of puzzles and problems. Most of them are imaginary. There is no need for the clue, just clean up your sore imagination. Unless there is a personal cluelessness aging. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem5}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="6">
          <div className="flex justify-center mb-4">
            <img src="/poems/My arrogance ghostly (07-05-2020).webp" alt="My arrogance ghostly" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">My arrogance ghostly (07-05-2020)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">There are situations, in a dream or in reality, when we meet a person from our past or future who reminds or warns us of something strange or unpleasant. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem6}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="7">
          <div className="flex justify-center mb-4">
            <img src="/poems/Philosophy (07-11-2019).webp" alt="Philosophy" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Philosophy (07-11-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Philosophy drives some people mad. Under a tight smile, they hide a callous, hypocritical and cynic soul. (Sorry a moody day of mine, pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem7}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="8">
          <div className="flex justify-center mb-4">
            <img src="/poems/Rough a play (19-10-2019).webp" alt="Rough a play" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Rough a play (19-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">The moods are different, good or bad, dark or bright, peaceful or annoyed. This is normal. Without mood, person turns into robot and loses his personality. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem8}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="9">
          <div className="flex justify-center mb-4">
            <img src="/poems/My self (22-10-2019).webp" alt="My self" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">My self (22-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Some people say, it is better to remain silent. I think, it is better to speak than remain silent. Speaking is an interaction and acquiring of knowledge, whilst silence is downgrading into a shaky and weak one. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem9}</pre>
        </div>
        <Footer/>
    </div>
  );
}
