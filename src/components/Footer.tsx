export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] pt-16 pb-8 md:pt-20 md:pb-10 transition-colors duration-400">
      <div className="container">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[var(--accent)] flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-4 h-4 text-[var(--accent-foreground)]">
                  <polygon points="30,20 70,20 50,50 70,80 30,80 50,50" fill="currentColor" />
                </svg>
              </div>
              <span className="text-sm font-[700] tracking-[0.12em] font-[Oswald] text-[var(--foreground)]">
                RETHINK
              </span>
            </div>
            <p className="text-[13px] text-[var(--muted)] leading-relaxed max-w-[200px]">
              Elite fitness coaching for those who refuse to settle.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] text-[var(--foreground)] uppercase mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {["About", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] text-[var(--foreground)] uppercase mb-4">
              Programs
            </p>
            <ul className="space-y-2.5">
              {["Foundation", "Elite", "Legacy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] text-[var(--foreground)] uppercase mb-4">
              Support
            </p>
            <ul className="space-y-2.5">
              {["FAQ", "Contact", "Privacy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] text-[var(--foreground)] uppercase mb-4">
              Social
            </p>
            <ul className="space-y-2.5">
              {["Instagram", "Twitter", "YouTube"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[var(--muted)]">
            &copy; 2026 Rethink Fitness. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-[12px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
