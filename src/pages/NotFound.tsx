import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center max-w-lg">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight">
          Coming Soon 🚧
        </h1>

        <p className="mb-6 text-lg text-muted-foreground">
          We’re working hard to bring this page to life. Stay tuned — something
          awesome is on the way!
        </p>

        <a
          href="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 text-white font-medium shadow hover:bg-primary/90 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
