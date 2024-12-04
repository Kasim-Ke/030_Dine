import { Footer } from "./components/Footer";
import { FristMainCard } from "./components/FristMainCard";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { SecondMainCard } from "./components/SecondMainCard";
import { Slides } from "./components/Slides";
import { BookingHero } from "./components/BookingHero";

import { Routes, Route } from "react-router-dom";
import Reservation from "./components/Reservation";
import BookingPattern from "./components/BookingPattern";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <>
      <Routes>
        {/* First Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FristMainCard />
              <SecondMainCard />
              <Highlights />
              <Slides />
              <Reservation />
            </>
          }
        />

        {/* Bookingpage Page */}
        <Route
          path="/booking"
          element={
            <>
              <BookingForm />
              <BookingHero />
              <BookingPattern />
            </>
          }
        />
      </Routes>
      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
