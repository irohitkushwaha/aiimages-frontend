const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-8 px-2">
      <div className="max-w-[1700px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:gap-30 gap-[50px] mb-12 items-center justify-center">
          {/* Brand Section */}
          <div className="max-w-[500px]">
            {/* <div>
              <img
                className="h-10 w-auto"
                src="/AILOGO.png"
                alt="Logo for AI Generated Images Brand"
              />
            </div> */}
            <p className="text-sm leading-relaxed text-[16px] text-center px-[30px]">
              Get Access to Ultra High Quality Ai Premium Images for Free on Ai Generated Photos Platform which use Advanced AI Generation Model. 
            </p>
          </div>

          {/* Right side columns in flex-col */}
          <div className="flex md:flex-row flex-col md:gap-[100px] gap-[50px] flex-wrap">
            {/* Support Column */}
            <div>
              <h3 className="text-white font-medium mb-4">Company info</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about-us"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Pricing{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/licensing"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Licensing{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-use"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of use
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-medium mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/contact-us"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact us
                  </a>
                </li>
                <li className="flex gap-[5px] items-center justify-center text-gray-300 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                    className="size-5 text-gray-300"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                  <a href="mailto:support@aigeneratedimagess.com">
                    support@aigeneratedimagess.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © 2025 AI Generated Images, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
