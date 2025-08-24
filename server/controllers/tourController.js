import Tour from "../models/tour.js";
import cloudinary from "../utils/cloudinary.js";

export const CreateTour = async (req, res) => {
  const {
    title,
    destination,
    price,
    rate,
    comments,
    description,
    date,
  } = req.body;

  try {
    const images =[];
    for(let file of req.files){
      const result = await cloudinary.uploader.upload(file.path,{
        folder:"tours"
      })
      images.push(result.secure_url);
    }
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
      return res.status(404).json({ message: "Tour not found" });
    }

    // تحديث الحقول النصية/الرقمية من req.body
    Object.keys(req.body).forEach((key) => {
      tour[key] = req.body[key];
    });

    // إذا فيه صور جديدة جاية من multer
    if (req.files && req.files.length > 0) {
      const uploadedImages = [];

      for (let file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "tours",
        });
        uploadedImages.push(result.secure_url);
      }

      // تحديث الصور (ممكن تستبدل أو تضيف حسب ما بدك)
      tour.images = uploadedImages;
    }

    const updatedTour = await tour.save();
    res.status(200).json({ data: updatedTour, message: "Tour updated successfully" });
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
