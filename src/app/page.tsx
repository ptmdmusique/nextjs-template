"use client"; // ! this is required for any hooks to work

import { SupportedLanguage, supportedLanguages } from "@/data/i18n";
import { useManageLocale } from "@/hooks/useManageLocale";
import { initializeI18N } from "@/loaders/i18n";
import { queryClient } from "@/loaders/react-query";
import { useI18NState } from "@/stores/i18n";
import Image from "next/image";
import { HTMLProps, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import cx from "classnames";
import { useTestReactQuery } from "@/hooks/useTestReactQuery";

initializeI18N();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <HomeContent />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

const HomeContent = () => {
  const { t } = useTranslation();
  useManageLocale();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div>

      <Logo />

      <div>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-2 lg:text-left">
          <div className="rounded-lg border border-transparent px-5 py-4 lg:max-w-5xl lg:w-full transition-colors">
            <Title>Template includes</Title>

            <ul className="list-disc">
              <ListItem>Tailwind CSS</ListItem>
              <ListItem>react-i18next</ListItem>
              <ListItem>React Recoil</ListItem>
              <ListItem>React Query</ListItem>
            </ul>
          </div>

          <div className="rounded-lg border border-transparent px-5 py-4 lg:max-w-5xl lg:w-full transition-colors">
            <Title>React Query Demo</Title>

            <ReactQueryDemo />
          </div>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 lg:max-w-5xl lg:w-full transition-colors">
          <Title>{t("language")}</Title>

          <LocaleSelector />
        </div>

        <NextJSStuff />

        <div className="mb-32 lg:mb-0" />
      </div>
    </main>
  );
};

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="m-0 max-w-[30ch] text-sm opacity-70 ml-3">{children}</li>
  );
};

const Title = ({ children }: { children: ReactNode }) => {
  return <h2 className="mb-3 text-2xl font-semibold">{children}</h2>;
};

const LocaleSelector = () => {
  const [curLocale, setCurLocale] = useI18NState();

  return (
    <select
      className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
      onChange={(event) => {
        const locale = event.target.value;
        setCurLocale(locale as SupportedLanguage);
      }}
      value={curLocale}
    >
      {supportedLanguages.map((locale) => (
        <option value={locale} key={locale}>
          {locale === "vi" ? "VI - Vietnamese" : "EN - English"}
        </option>
      ))}
    </select>
  );
};

const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <p className="mt-4 font-medium text-lg">{t("title")}</p>
    </div>
  );
};

const NextJSStuff = () => {
  return (
    <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left">
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Next.js features and API.
        </p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Learn{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Templates{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Explore starter templates for Next.js.
        </p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Deploy{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </a>
    </div>
  );
};

const ReactQueryDemo = () => {
  const { isFetching, data, refetch } = useTestReactQuery();

  if (isFetching || !data) {
    return <SkeletonLoader className="mt-2" />;
  }

  return (
    <div>
      <h3>Test data loaded!</h3>
      <Button className="mt-3" onClick={() => refetch()}>
        Reload
      </Button>
    </div>
  );
};

const SkeletonLoader = ({ className }: { className?: string }) => {
  return (
    <div role="status" className={cx("max-w-sm animate-pulse", className)}>
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const Button = (props: HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      type="button"
      className={cx(
        "relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
        props.className,
      )}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {props.children}
      </span>
    </button>
  );
};
