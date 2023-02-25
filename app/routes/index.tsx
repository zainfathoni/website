import { Container } from "app/components/Container";
import {
  GitHubIcon,
  Icon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "app/components/SocialIcons";
import { metadata } from "app/models/metadata";

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

export default function Index() {
  return (
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
  );
}
