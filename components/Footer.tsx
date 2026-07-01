import { FOOTER_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 pb-12 pt-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl leading-none">🌿</span>
            <span className="text-xl font-semibold text-white">
              FloraVision.
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary">
            &quot;From lush indoor greens to vibrant outdoor blooms, our
            plants are crafted to thrive and elevate your living
            environment.&quot;
          </p>
          <div className="mt-6 flex items-center gap-6 text-sm font-medium tracking-wide text-white">
            <a href="#" className="hover:text-accent">
              FB
            </a>
            <a href="#" className="hover:text-accent">
              TW
            </a>
            <a href="#" className="hover:text-accent">
              LI
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-white">Quick Link&rsquo;s</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-secondary underline decoration-secondary/40 underline-offset-4 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-medium text-white">
            For Every Update.
          </h4>
          <form className="mt-4 flex items-center overflow-hidden rounded-full glass">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter Email"
              className="w-full bg-transparent px-5 py-3 text-xs text-white placeholder:text-secondary focus-visible:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 whitespace-nowrap bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-bg transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl items-center justify-end text-xs text-secondary">
        FloraVision © all right reserve
      </div>
    </footer>
  );
}
