export default function Footer() {
  return (
    <footer className="py-6 text-white bg-emerald-600 rounded-xl">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="mb-4 text-center md:text-left md:mb-0">
          <h3 className="mb-2 text-xl font-bold">About</h3>
          <p>Website created by Trevor Brown</p>
        </div>
        <div className="mb-4 text-center md:mb-0">
          <h3 className="mb-2 text-xl font-bold">Contact</h3>

          <p>Phone: 123-456-7890</p>
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-bold">Follow Me</h3>
          <a
            href="https://github.com/tbrown034"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/trevorabrown/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/tbrownOKC"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
