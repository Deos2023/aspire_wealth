import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  align?: "left" | "center";
}

const Hero = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
  showButton = true,
  buttonText = "Contact Us",
  buttonLink = "/contact",
  align = "left"
}: HeroProps) => {
  return (
    <div 
      className="relative bg-cover bg-center py-24 md:py-32 lg:py-40"
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(76, 175, 80, 0.9), rgba(200, 230, 201, 0.6)), url(${backgroundImage})` 
      }}
    >
      <div className="container-custom relative z-10">
        <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          <h1 className="heading-xl text-white mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">{subtitle}</p>
          {showButton && (
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-medium text-base">
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
