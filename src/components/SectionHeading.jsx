import Reveal from './Reveal'

export default function SectionHeading({ kicker, title, blurb }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 font-mono text-sm tracking-widest text-neon uppercase">
        <span className="mr-2 text-fog">//</span>
        {kicker}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-snow sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {blurb && <p className="mt-4 text-base leading-relaxed text-fog">{blurb}</p>}
    </Reveal>
  )
}
