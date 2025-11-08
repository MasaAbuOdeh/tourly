export const getStats = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/stats");
    if (!res.ok) throw new Error("Failed to fetch stats");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};