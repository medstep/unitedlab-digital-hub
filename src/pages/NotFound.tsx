import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="font-poppins font-bold text-6xl text-primary mb-4">404</h1>
          <h2 className="font-poppins font-semibold text-2xl text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-sm text-muted-foreground">
            Attempted path: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="btn-hero">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>If you believe this is an error, please contact us:</p>
          <p className="mt-2">
            <a
              href="mailto:unitedlabnepal@gmail.com"
              className="text-primary hover:underline"
            >
              unitedlabnepal@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
