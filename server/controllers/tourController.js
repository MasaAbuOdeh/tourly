import Tour from "../models/tour.js";

export const CreateTour = async (req, res) => {
  const {
    title,
    destination,
    price,
    rate,
    comments,
    description,
    images,
    date,
  } = req.body;

  try{

    const newTour = new Tour({
    title,
    destination,
    price,
    rate,
    comments,
    description,
    images,
    date,
  });

  await newTour.save();
  return res.status(200).json({message:"Tour Added successfully !"})

  }

  catch(err){
    console.log("the error is ", err);
    return res.status(500).json({message:"something went wrong"});

  }
};
