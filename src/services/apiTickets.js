import axiosInstance from "./axios";

export async function getTickets() {

  const response = await axiosInstance.get("/tickets");
  return response.data;
};
