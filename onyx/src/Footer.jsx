import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5">
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-playfair text-2xl tracking-[0.3em] text-foreground">
              CONSTRUCTED SILENCE
            </span>
            <p className="mt-6 font-inter text-sm text-muted-foreground leading-relaxed max-w-xs">
              A study in restraint.<br />
              Form beyond function.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Navigate
            </span>
            <nav className="mt-6 flex flex-col gap-3">
              {[
                { label: 'Collections', path: '/collections' },
                { label: 'About', path: '/about' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-inter text-sm text-secondary-foreground hover:text-foreground transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <span className="font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Contact
            </span>
            <div className="mt-6 flex flex-col gap-3 font-inter text-sm text-secondary-foreground">
              <span>press@obscura.studio</span>
              <span>Paris, FR</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="font-inter text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} CONSTRUCTED SILENCE. All rights reserved.
          </span>
          <span className="font-inter text-xs text-muted-foreground tracking-wider">
            Constructed in silence.
          </span>
        </div>
      </div>
    </footer>
  );
}