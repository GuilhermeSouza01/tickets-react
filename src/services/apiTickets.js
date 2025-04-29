import axiosInstance from "./axios";

export async function getTickets({page}) {

  try {
    const response = await axiosInstance.get(`/tickets?page=${page}`);
    return response.data;
  } catch(error) {
    if(!error.responsed) {
      throw new Error("An error occurred while fetching tickets");
    }

    throw new Error(error.response.data.message || "An error occurred while fetching tickets");
  }

};
