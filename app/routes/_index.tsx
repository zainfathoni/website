import { Container } from "app/components/Container";
import pianoWithKids from "app/images/photos/piano-with-kids.jpg";
import jsconfAsia2019 from "app/images/photos/jsconf-asia-2019.jpg";
import webUnconf2019 from "app/images/photos/web-unconf-2019.jpg";
import ddc2023 from "app/images/photos/ddc-2023.jpg";
import pianoWithWife from "app/images/photos/piano-with-wife.jpg";
import ninjavanLogo from "app/images/logos/ninjavan.svg";
import bukalapakLogo from "app/images/logos/bukalapak.png";
import xtremaxLogo from "app/images/logos/xtremax.png";
import pejuangKodeLogo from "app/images/logos/pejuang-kode.svg";
import {
  ArrowDownIcon,
  BriefcaseIcon,
  GitHubIcon,
  Icon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "app/components/Icons";
import { metadata } from "app/models/metadata";
import clsx from "clsx";
import { ButtonLink } from "app/components/Button";
import { formatDate } from "app/utils/format-date";
import { Card } from "app/components/Card";
import { json } from "@remix-run/deno";
import { useLoaderData } from "@remix-run/react";
import type { ArticleAttributes } from "app/models/articles";
import { getAllArticles } from "app/models/articles";

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
  const rotations = [
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

export function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json(getAllArticles());
}

function Article({
  article: {
    slug,
    attributes: { meta },
  },
}: {
  article: ArticleAttributes;
}) {
  return (
    <Card as="article">
      <Card.Title to={`/articles/${slug}`}>{meta.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={meta.date} decorate>
        {formatDate(meta.date)}
      </Card.Eyebrow>
      <Card.Description>{meta.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

type ResumeTimeLabel = {
  label: string;
  dateTime: string;
};

type ResumeType = {
  company: string;
  title: string;
  logo: string;
  start: string | ResumeTimeLabel;
  end: string | ResumeTimeLabel;
};

function Resume() {
  const resume: ResumeType[] = [
    {
      company: "Ninja Van",
      title: "Senior Software Engineer",
      logo: ninjavanLogo,
      start: "2018",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Bukalapak",
      title: "Software Engineer",
      logo: bukalapakLogo,
      start: "2017",
      end: "2018",
    },
    {
      company: "Xtremax",
      title: "Software Development Manager",
      logo: xtremaxLogo,
      start: "2015",
      end: "2017",
    },
    {
      company: "Qiwary Usaha Nusantara",
      title: "Programmer",
      logo: pejuangKodeLogo,
      start: "2014",
      end: "2014",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <img
                src={role.logo}
                alt={role.company}
                className="h-9 w-9 rounded-full"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${
                  typeof role.start === "string" ? role.start : role.start.label
                } until ${
                  typeof role.end === "string" ? role.end : role.end.label
                }`}
              >
                <time
                  dateTime={
                    typeof role.start === "string"
                      ? role.start
                      : role.start.dateTime
                  }
                >
                  {typeof role.start === "string"
                    ? role.start
                    : role.start.label}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time
                  dateTime={
                    typeof role.end === "string" ? role.end : role.end.dateTime
                  }
                >
                  {typeof role.end === "string" ? role.end : role.end.label}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <ButtonLink
        href="/zain-fathoni-cv.pdf"
        download="Zain Fathoni CV.pdf"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </ButtonLink>
    </div>
  );
}
export default function Index() {
  const articles = useLoaderData<typeof loader>();

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
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
