const API_URL = "http://localhost:3000/api/tours";
export const getAllTours = async () => {
  const res = await fetch(API_URL + "/getTours");
  if (!res.ok) throw new Error("Failed to fetch tour");
  const result = await res.json();
  return result.data;
};

export const getTour = async (id) => {
  const res = await fetch(`${API_URL}/getTour/${id}`);
  if (!res.ok) throw new Error("Failed to fetch tour");
  const result = await res.json();
  return result;
};
