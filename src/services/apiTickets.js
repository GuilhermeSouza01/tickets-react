import axiosInstance from "./axios";

export async function getTickets() {

  try {
    const response = await axiosInstance.get("/tickets");
    return response.data;
  } catch(error) {
    if(!error.responsed) {
      throw new Error("An error occurred while fetching tickets");
    }

    throw new Error(error.response.data.message || "An error occurred while fetching tickets");
  }

};
