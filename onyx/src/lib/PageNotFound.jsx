import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 md:px-16">
      <div className="uppercase tracking-[0.18em] text-[12px] text-neutral-400">
        Constructed Silence
      </div>
      <h1 className="mt-6 font-serif text-[44px] leading-[1.02] md:text-[64px]">
        Page not found.
      </h1>
      <p className="mt-6 max-w-[52ch] text-[14px] leading-relaxed text-neutral-300">
        A missing room. A silent corridor. Return to the index.
      </p>

      <div className="mt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-3 uppercase tracking-[0.18em] text-[12px] text-neutral-300 hover:text-white transition-colors duration-700"
        >
          <span aria-hidden="true" className="h-[1px] w-10 bg-neutral-500/60" />
          Home
        </Link>
      </div>
    </div>
  );
}

