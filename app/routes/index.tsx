import { Container } from "app/components/Container";
import pianoWithKids from "app/images/photos/piano-with-kids.jpg";
import jsconfAsia2019 from "app/images/photos/jsconf-asia-2019.jpg";
import webUnconf2019 from "app/images/photos/web-unconf-2019.jpg";
import ddc2023 from "app/images/photos/ddc-2023.jpg";
import pianoWithWife from "app/images/photos/piano-with-wife.jpg";
import {
  GitHubIcon,
  Icon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "app/components/SocialIcons";
import { metadata } from "app/models/metadata";
import clsx from "clsx";

function SocialLink({
  icon: Icon,
  ...props
}: {
  icon: Icon;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="group -m-1 p-1"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          pianoWithKids,
          jsconfAsia2019,
          webUnconf2019,
          ddc2023,
          pianoWithWife,
        ].map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length],
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            A family man with enthusiasm for JavaScript, React, and Testing.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {metadata.description}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  );
}
