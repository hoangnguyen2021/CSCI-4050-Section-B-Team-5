import BackgroundOverlay from "../../components/BackgroundOverlay";
import TopNavigation from "../../components/TopNavigation";
import SearchField from "../../components/SearchField";

export default function ShowtimePage() {
  return (
    <div className="bg-background">
      {/* Navigation */}
      <header>
        <nav aria-label="Top">
          {/* Top navigation */}
          <TopNavigation />
        </nav>
      </header>

      <div className="relative min-h-screen">
        <BackgroundOverlay
          src="https://wallpapercave.com/wp/wp2714572.jpg"
          opacity={70}
        />
        <div className="relative bg-primary/60 px-20 py-10">
          <SearchField />
        </div>
        <div className="relative max-w-7xl maxh-screen h-screen mx-auto py-10"></div>
      </div>
    </div>
  );
}
