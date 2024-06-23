import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link to="#" className="flex items-center gap-2">
            <GroupIcon className="h-8 w-8" />
            <span className="text-lg font-bold">Meetup</span>
          </Link>
          <p className="text-sm">
            Meetup brings people together to create communities and events
            around their interests.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-white hover:text-primary transition">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link to="#" className="text-white hover:text-primary transition">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link to="#" className="text-white hover:text-primary transition">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link to="#" className="text-white hover:text-primary transition">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-semibold">Discover</h4>
          <Link
            to="#"
            className="text-sm hover:underline underline-offset-4 text-white"
          >
            Browse Groups
          </Link>
          <Link
            to="#"
            className="text-sm hover:underline underline-offset-4 text-white"
          >
            Upcoming Events
          </Link>
          <Link
            to="#"
            className="text-sm hover:underline underline-offset-4 text-white"
          >
            Trending Topics
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-semibold">Create</h4>
          <Link
            to="#"
            className="text-sm hover:underline underline-offset-4 text-white"
          >
            Start a New Group
          </Link>
          <Link
            to="#"
            className="text-sm hover:underline underline-offset-4 text-white"
          >
            Organize an Event
          </Link>
          <Link
            to="#"
            className="text-sm hover:underline underline-offset-4 text-white"
          >
            Become an Organizer
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-semibold">Resources</h4>
          <Link
            to="#"
            className="text-sm hover:underline underline-offset-4 text-white"
          >
            Help Center
          </Link>
          <Link
            to="#"
            className="text-sm hover:underline underline-offset-4 text-white"
          >
            Blog
          </Link>
          <Link
            to="#"
            className="text-sm hover:underline underline-offset-4 text-white"
          >
            Meetup Pro
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-12 flex items-center justify-between">
        <p className="text-xs text-white">
          &copy; 2024 Meetup. All rights reserved.
        </p>
        <nav className="flex gap-4 text-xs">
          <Link
            to="#"
            className="hover:underline underline-offset-4 text-white"
          >
            Terms of Service
          </Link>
          <Link
            to="#"
            className="hover:underline underline-offset-4 text-white"
          >
            Privacy Policy
          </Link>
          <Link
            to="#"
            className="hover:underline underline-offset-4 text-white"
          >
            Cookie Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function GroupIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
