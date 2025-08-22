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

  try {
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
    return res.status(200).json({ message: "Tour Added successfully !" });
  } catch (err) {
    console.log("the error is ", err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({ success: true, results: tours.length, data: tours });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id);
    if (!tour) {
      res.status(404).json({ message: "Tour not found" });
    }
    res.status(200).json(tour);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id);
    if (!tour) {
      res.status(404).json({ message: "not found" });
    }

    Object.keys(req.body).forEach((key) => {
      tour[key] = req.body[key];
    });

    const updateTour = await tour.save();
    res.status(200).json({ data: updateTour, message: "updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findByIdAndDelete(id);

    if (!tour) {
      res.status(404).json({ message: "tour did not found" });
    }
    res.status(200).json({ message: "tour deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
