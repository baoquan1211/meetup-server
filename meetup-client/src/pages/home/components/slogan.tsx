import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Slogan() {
  return (
    <section className="flex px-6 mt-12">
      <div className="mb-6 flex w-full flex-col space-y-6 smd:mb-0 smd:mr-6 lg:w-7/12">
        <h1
          className="text-3xl font-bold lg:text-[42px] lg:leading-[3.25rem]"
          data-testid="search-intro-title"
        >
          The people platform—Where interests become friendships
        </h1>
        <p>
          Whatever your interest, from hiking and reading to networking and
          skill sharing, there are thousands of people who share it on Meetup.
          Events are happening every day—sign up to join the fun.
        </p>
        <div>
          <Link className="inline-block hover:no-underline" to="/sign-up">
            <Button className="bg-secondary hover:bg-secondary/90">
              Join Meetup
            </Button>
          </Link>
        </div>
      </div>
      <img src="/svg/slogan-image.svg" alt="" />
    </section>
  );
}

export default Slogan;
