import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import pageKeys from "../_constants/pageKeys";
import { Fragment } from "react";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <Fragment key={pageKeys.aboutPage}>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>About</h1>
          </div>
        </section>
      </Fragment>
    </DefaultLayout>
  );
}
