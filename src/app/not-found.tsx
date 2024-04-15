import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="h-[92vh] text-center flex flex-col itemss-center justify-center">
        <div>
          <h1 className="next-error-h1 inline-block text-2xl font-medium pr-3 border-r-[2px] border-black mr-3">
            404
          </h1>
          <div className="inline-block">
            <h2 className="text-sm font-normal leading-10">
              This page could not be found.
            </h2>
          </div>
        </div>
        <Link href="/" className="mt-8 text-small underline">
          Go back to home page
        </Link>
      </div>
    </>
  );
}
