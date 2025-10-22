import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Define a media query
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Handler function
    const onChange = () => {
      setIsMobile(mql.matches);
    };
    
    // Initialize state based on current match
    setIsMobile(mql.matches);

    // Add listener
    mql.addEventListener("change", onChange);
    
    // Cleanup
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Retorna false se ainda não foi determinado (SSR/primeiro render)
  return isMobile ?? false;
}