import Image from "next/image";
import Link from "next/link";
import portrait from "@/public/images/arjun-portrait.webp";
export default function AboutHero() {
  return (
    <section className="shell about-hero">
      <div className="portrait">
        <Image
          src={portrait}
          className="portrait-image"
          alt="Arjun Kumar"
          priority
          sizes="(min-width: 701px) 40vw, 90vw"
        />
      </div>
      <div className="about-copy">
        <p className="location section-label">
          <Image
            src="https://flagcdn.com/in.svg"
            alt="Indian flag"
            width={24}
            height={16}
            unoptimized
          />
          Delhi, India
        </p>
        <h1>Hi, I&apos;m Arjun Kumar</h1>
        <p>
          I turn vision into reality with code. Whether I&apos;m working on a
          website or any digital product, I bring my commitment to design
          excellence and user-centered thinking to every project I work on.
        </p>
        <p>
          Explore my latest <Link href="/projects">projects</Link> showcasing my
          expertise in Reactjs, Nextjs, Javascript, Typescript and web
          development.
        </p>
      </div>
    </section>
  );
}
