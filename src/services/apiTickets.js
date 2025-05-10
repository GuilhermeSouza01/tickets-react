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
    if(!error.response) {
      throw new Error("An error occurred while fetching tickets");
    }

    throw new Error(error.response.data.message || "An error occurred while fetching tickets");
  }

};

export async function getTicketById(id) {
  try {
    const response = await axiosInstance.get(`tickets/${id}`);
    const ticket = response.data.data;

    return {
      id: ticket.id,
      ...ticket.attributes,
      authorId: ticket.relationships?.author?.data?.id,
      authorName: ticket.relationships?.author?.attributes?.name,
      authorEmail: ticket.relationships?.author?.attributes?.email,
    };


  } catch (error) {
    if (!error.response) {
      throw new Error("An error occurred while fetching the ticket");
    }

    throw new Error(error.response.data.message || "An error occurred while fetching the ticket");
  }
}
