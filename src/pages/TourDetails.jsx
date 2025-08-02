import React from "react";
import { useParams } from "react-router-dom";
import trips from "../data/trips";
import { ImagesSlider } from "../components/ImagesSlider";
import TourInfo from "../components/TourInfo";
import Reviews from "../components/reviews";
import BookingSide from "../components/BookingSide";

const TourDetails = () => {
  const { id } = useParams();
  const selectedTrip = trips.find((trip) => trip.id === parseInt(id));
  console.log(id);

  return (
    <>
      <ImagesSlider images={selectedTrip.image} />
      <div className="flex gap-20">
        <div className="flex flex-col">
          <TourInfo
            title={selectedTrip.title}
            rating={selectedTrip.rating}
            price={selectedTrip.price}
            location={selectedTrip.location}
            date={selectedTrip.date}
            description={selectedTrip.description}
          />
          <Reviews />
        </div>
        <BookingSide Features={selectedTrip.features} price={selectedTrip.price} />
      </div>
    </>
  );
};

export default TourDetails;
