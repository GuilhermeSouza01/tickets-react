import axiosInstance from "./axios";

export async function getTickets({page}) {

  try {
    const response = await axiosInstance.get(`/tickets?page=${page}`);
    return {
      data: response.data.data,
      total: response.data.meta.total,
      lastPage: response.data.meta.last_page,

    };
  } catch(error) {
    if(!error.responsed) {
      throw new Error("An error occurred while fetching tickets");
    }

    throw new Error(error.response.data.message || "An error occurred while fetching tickets");
  }

};
