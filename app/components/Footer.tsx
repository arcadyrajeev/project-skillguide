import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main footer */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 px-6 py-16">
        <div className=" mx-auto max-w-7xl">
          {/* Brand */}
          <div className="flex flex-col lg:flex-row  justify-between">
            <h2 className="text-4xl font-bold leading-tight text-white">
              SKILL <br /> GUIDE
            </h2>

            {/* Sitemap */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="mb-4 text-sm font-semibold text-white">Sitemap</p>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link href="/coaches">Coaches</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <p className="mb-4 text-sm font-semibold text-white">Support</p>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>
                    <Link href="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/contact">Email us</Link>
                  </li>
                  <li>
                    <Link href="/help">Help</Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="mb-4 text-sm font-semibold text-white">Legal</p>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>
                    <Link href="/terms">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/refund">Refund Policy</Link>
                  </li>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="mt-16 border-t border-white/30 pt-6 text-center text-sm text-white/80">
            © {new Date().getFullYear()} Skill Guide. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
