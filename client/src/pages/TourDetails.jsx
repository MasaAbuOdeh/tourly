import React from "react";
import { useParams } from "react-router-dom";
import trips from "../data/trips";
import { ImagesSlider } from "../components/ImagesSlider";
import TourInfo from "../components/TourInfo";
import Reviews from "../components/reviews";
import BookingSide from "../components/BookingSide";
import { useState } from "react";
import { useEffect } from "react";
import { getTour } from "../api/tours";

const TourDetails = () => {
  const { id } = useParams();
  console.log(id);
  const selectedTrip = trips[0];
  const [tour, setTour] = useState(null);
  const [loading, setLoadin] = useState(true);
  useEffect(() => {
    const fetchTour = async () => {
      try {
        const result = await getTour(id);
        setTour(result);
        setLoadin(false);
      } catch (err) {
        console.log(err);
        setLoadin(false);
      }
    };
    fetchTour();
  }, [id]);
  //  const formatDate = new Date(tour.date).toLocaleDateString("en-GB");
  return loading ? (
    <p className="text-center mt-10">Loading trips...</p>
  ) : (
    <>
      <ImagesSlider images={tour.images} />
      <div className="flex gap-20">
        <div className="flex flex-col">
          <TourInfo
            title={tour.title}
            rating={tour.rate}
            price={tour.price}
            location={tour.destination}
            date={new Date(tour.date).toLocaleDateString("en-GB")}
            description={tour.description}
          />
          <Reviews />
        </div>
        <BookingSide Features={selectedTrip.features} price={tour.price} tourId = {id}/>
      </div>
    </>
  );
};

export default TourDetails;
