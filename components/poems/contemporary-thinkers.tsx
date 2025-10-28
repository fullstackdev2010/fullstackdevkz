"use client";

import Footer from "@/components/Footer";

export default function ContemporaryThinkers() {
  const poem0 = `My happiness’ fickle
Unstable and shifty
Like shaking a trickle
With drops flying drifty

That’s feeding a fog
Of visions bypassing
The phantasy smog
My past readdressing

I need it profound
Confirmed and endured
With firmness surround
Consistent, assured

I am glad, never knew
Details, it is bleeding
It’s sifting them through
My memory’s pleading

I want to forget
The bitter and sweet
The selfish regret
The roughish a cheat

Them, living inside
The memory, cruel
That won’t have compiled
My fortune renewal`;
  const poem1 = `It happens sometimes
It shouldn’t have been
That healthy, the rhymes
Drive vicious a spin

From past into nothing
The truth is transformed
And beautiful rhyming
Gains meaning deformed

That hits me unconscious
Unable to think
Why rhyming, the noxious
Reveals clear link

Of selfless with evil
And selfish with good
Like times medieval
And fearsome would

Support and promote
The artist of God
The one to denote
Conflicting an art

I’m full with repentance
I cry to offset
My selfless dependence
On selfish regret`;
  const poem2 = `I have no money
No wife to have lost
My life isn’t sunny
My thoughts, an exhaust

The stomach is faulty
The sight blurred a bit
A pessimist salty
Gone out of his wit

They sing “money money”
They sing “sun to come”
“A beautiful honey
Just money a sum”

Imagine unbound
My pockets inflating
With Sharon around
Embraces awaiting

Oh, beautiful dream
The lovely, a thought
An optimist scream
The pessimist’s caught

The stomach is better
I’m hungry no more
Imagine, have met her
On optimist shore`;
  const poem3 = `
The future and worries
Connection unknown
No forthcoming flurries
I’m balanced, but lone

My life is a brooklet
The peaceful and dabbling
My mind is a booklet
With love stories babbling

I’m dreaming away
And longing for kisses
Imagine her stay
A beautiful mistress

But what of it, silly
The normal a freak
I’m shunned away, really
Cursed freaky, unique

I never have had
The smallest a chance
To prove being sad
Is not freak at glance

Gave up, to go on
I am dreaming away
And longing along
Imagine her stay`;
  const poem4 = `
A fight for the truth
The delicate matter
The gust of the youth
Afraid not to shatter

Doest burn it away
The freedom to choose
The communist clay
The treacherous abuse

A fight for the lie
The touching a matter
It is flying high
It should’ve been better

Called living untrue
In comfort of virtue
The softly undue
But lovely preferred to

The truth and the lie
The poles of nothing
The dirt in the sky
The violent crushing

That keeps me suppressed
And looking around
With inner unrest
On true lying ground`;
  const poem5 = `A smart or a stupid
The question it is
The foolishly rooted
Intelligent myth

Is growing on
My cleverness broken
It’s burning along
Like sweet purple token

True, I’m dependent
And easily thrown
From being repentant
To insolence grown

That’s why, little scoring
And have to derive
The mindfully boring
But flourishing drive

That wisely divides
The middling my wit
To mind and feelings
The fatal a split

Smart order to act
I lack the control
With mindful abstract
My sensitive soul`;
  const poem6 = `To the edge of an abyss
I have almost arrived
She is longing for a kiss
Many times, she’s been revived

Getting close, look into
Warm and black, her smiling eye
Thanks I am, somehow new
Climbing up into the sky

She is calling, come at ease
I am yours, forever true
Hesitate not, dive in please
Destined we’re, me and you

No, thanks, your magic spell
Sweet and touching, soft and smooth
You are calling from the Hell
I am climbing to the Truth …

Live upon, the intuition
Father’s told and thought a lot
Easy life, the soul’s fiction
Hard to live, the future’s caught

No love, bought for a dime
No simple and unclear
It is hard for me to climb
It’s at ease, to disappear`;
  const poem7 = `The present is gray
I hate it forever
I tend to escape
With desperate endeavor

Towards the unknown
Or well known through
That yet to be blown
With doubt review

I am hesitative
As always have been
I doubt preventive
All things that begin

To draw up a future
Or drown in the past
Revive with the suture
And somehow last

I know, I’m wrong
I live in the present
I cannot return
The joyful incessant

Some beautiful past
Your smiling to shine
That will outlast
The grayish of mine`;

  return (
    <div className="px-6 py-10">

      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif text-pink-300 mb-4">Сontemporary Thinkers</h1>
        <p className="text-white/70 italic text-base max-w-2xl mx-auto">
          Some people are outstanding because of the way they influence our perception and understanding of the reality in which we are trying to successfully exist.
        </p>
      </div>

        <div className="mb-16" key="0">
          <div className="flex justify-center mb-4">
            <img src="/poems/Ingrid Bergman (04-11-2019).webp" alt="Ingrid Bergman" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Ingrid Bergman (04-11-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">“Happiness is good health and poor memory.” Yes, surely it is. Very often, I am annoyed by the details of memory, that prevent me from relaxing and making sweet and pleasant mistakes. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem0}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="1">
          <div className="flex justify-center mb-4">
            <img src="/poems/Arthur Schopenhauer (25-10-2019).webp" alt="Arthur Schopenhauer" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Arthur Schopenhauer (25-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">“There is always the possibility that some kind of egoistic motive’s influenced a fair and good deed.” I would add, most humbly, that, many of the bad deeds are covered by selfless motives. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem1}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="2">
          <div className="flex justify-center mb-4">
            <img src="/poems/Helen Rowland (24-10-2019).webp" alt="Helen Rowland" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Helen Rowland (24-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">“An optimist is a former pessimist who has pockets full of money, a stomach that works great, and a wife who leaves the city.” I am a pessimist obsessed with the beauty of nature and women. I don’t know if this is normal. Probably no. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem2}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="3">
          <div className="flex justify-center mb-4">
            <img src="/poems/Gabrielle Bonheur “Coco” Chanel (23-10-2019).webp" alt="Gabrielle Bonheur “Coco” Chanel" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Gabrielle Bonheur “Coco” Chanel (23-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">“A deficiency of the real men is no reason to cling to the freaks. A woman worries about the future until she gets married, a man does not worry about the future until he marries.” What a beautiful and clever lady she is. It is the modern world, most of us are freaks. I am a sad freak, what should I do, lie face down and cry? (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem3}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="4">
          <div className="flex justify-center mb-4">
            <img src="/poems/Antoine de Saint-Exupéry (14-10-2019).webp" alt="Antoine de Saint-Exupéry" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Antoine de Saint-Exupéry (14-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">“I want to fight for life. Fight for the truth. Everyone always fights for the truth, and there is no ambiguity in this. I do support his views, but who knows, what the truth is. For some other ones it could be the falsehood. Nobody knows the ultimate truth, but God only. We live by means of our own local and private truths, and if you don’t like my truth, what will happen? (pause with commas)”</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem4}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="5">
          <div className="flex justify-center mb-4">
            <img src="/poems/Fedor Dostoevsky (09-10-2019).webp" alt="Fedor Dostoevsky" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Fedor Dostoevsky (09-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">He is an extraordinarily intelligent writer. Here is my favorite saying. “He is an intelligent man, but in order to act smartly – mind is not enough.” I would add, most humbly, that, you have to cheat your feelings first. (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem5}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="6">
          <div className="flex justify-center mb-4">
            <img src="/poems/Henry Ford (07-10-2019).webp" alt="Henry Ford" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Henry Ford (07-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Here is my favorite saying by Henry Ford. He is one of the greatest minds of our time. Intuitively, I live by his wisdom. “If it’s hard for you, definitely you climb the mountain. If it’s easy for you, surely you fall into the abyss.” (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem6}</pre>
          <hr className="my-12 border-white/20" />
        </div>
        <div className="mb-16" key="7">
          <div className="flex justify-center mb-4">
            <img src="/poems/Erich Remarque (04-10-2019).webp" alt="Erich Remarque" className="max-w-full h-auto rounded shadow" />
          </div>
          <h2 className="text-2xl text-pink-200 font-serif text-center mb-2">Erich Remarque (04-10-2019)</h2>
          <p className="text-white/70 italic text-base max-w-2xl mx-auto text-center mb-3">Erich once said. “Unfortunately, we realize all the good things too late. We live in a longing for the past and in fear of the future. Anywhere, but not in the present.” (pause with commas)</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-white text-lg font-serif text-center max-w-2xl mx-auto">{poem7}</pre>
        </div>
      <Footer />
    </div>
  );
}
