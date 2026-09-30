import axios from "axios";

export const UsersTool = {
  async execute(payload) {
    const baseURL = process.env.API_FINANZAS_URL;

    try {
      const response = await axios({
        url: baseURL + payload.endpoint,
        method: payload.method,
        data: payload.data
      });

      return response.data;
    } catch (err) {
      return { error: err.message };
    }
  }
};
