import AboutSection from "./components/AboutSection"
import Footer from "./components/FooterSection"
import Header from "./components/HeaderSection"
import HeroSection from "./components/HeroSection"
import WorkSection from "./components/WorkSection"
import BookSection from "./components/BookSection"

import { useState, useEffect } from 'react';
import LoadingBar from "./components/LoadingBar"


function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Simulate a delay for the fade-in effect
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100); // Adjust the delay if needed

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <div className={`home-page ${hasLoaded ? 'fade-in' : ''} font-WorkSans`}>
      <Header />  
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <BookSection />
      <Footer /> 
    </div>
  )
}

export default App
