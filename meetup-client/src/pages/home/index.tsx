import EventList from "./components/event-list";
import Slogan from "./components/slogan";

function HomePage() {
  return (
    <main className="*:max-w-7xl flex flex-col items-center w-full">
      <Slogan />
      <EventList />
    </main>
  );
}

export default HomePage;
