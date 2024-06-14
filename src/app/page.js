"use client";
import Container from "./styles/custom-container/Container";
import Slider from "./components/Landing/Slider";
import Header from "./components/header/Header";
import Availability from "./components/Landing/Availability";
import DiningSection from "./components/Landing/cards/DiningSection";
import HotelRoom from "./components/Landing/HotelRoom";
import Event from "./components/Landing/Event";
import BlackContainer from "./styles/custom-container/BlackContainer";
import OurLocation from "./components/Landing/OurLocation";

const slides = [
  {
    image: "/landing/img1.webp",
    topText: "Welcome to our website",
    bottomText: "Slide 1 description",
  },
  {
    image: "/landing/img2.webp",
    topText: "Explore our Products",
    bottomText: "Slide 2 description",
  },
  {
    image: "/landing/img3.webp",
    topText: "Join our Community",
    bottomText: "Slide 3 description",
  },
];

export default function Home() {
  return (
    <main className="w-full font-sans">
      <Container>
        <Header />
        <Slider slides={slides} />
        <Availability />
      </Container>
      <BlackContainer>
        <HotelRoom />
        <DiningSection />
      </BlackContainer>
      <Container>
        <Event />
      </Container>
      <OurLocation/>
    </main>
  );
}
