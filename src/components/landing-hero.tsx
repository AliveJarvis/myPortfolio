import Image from "next/image";
import portrait from "@/public/images/arjun-portrait.webp";
import AnimatedLogo from "@/animation/animated-logo";
import Link from "next/link";
import { BriefcaseBusiness, Languages, MapPin } from "lucide-react";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function LandingHero() {
  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="hero-heading">
            <p className="role section-label">Full Stack Web Developer</p>
            <h1>
              Arjun <span>Kumar</span>
            </h1>
          </div>
          <p className="intro">
            I am a software developer specializing in building high-performance,
            user-focused web applications. Skilled in{" "}
            <strong>
              MERN Stack {"|React , MongoDB , Node.js with Express.js|"}{" "}
            </strong>
            , <strong>NextJS</strong>, <strong>SEO</strong> , and an expert in{" "}
            <strong>JavaScript</strong>, <strong>HTML</strong> and{" "}
            <strong>CSS </strong>
            {"(can adapt any css libraries in minutes)"}
          </p>
          <div className="hero-actions">
            <Link href="/about" className="button primary">
              <BriefcaseBusiness size={16} />
              Check my experience
            </Link>
            <a
              lang="ja"
              href="https://arjun-portfolio-japan.vercel.app/"
              className="button secondary"
            >
              <Languages size={16} />
              日本語版ポートフォリオはこちら
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-portrait">
            <Image
              src={portrait}
              alt="Arjun Kumar"
              priority
              fill
              sizes="(min-width: 1400px) 524px, (min-width: 701px) 42vw, 91vw"
            />
            <div className="portrait-signature" aria-hidden="true">
              <AnimatedLogo />
            </div>
          </div>
          <div className="art-caption">
            <span>{siteMetadata.headerTitle}</span>
            <span>
              <MapPin size={13} />
              Delhi, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
