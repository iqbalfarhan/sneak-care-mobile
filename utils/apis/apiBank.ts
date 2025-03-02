import api from ".";
import { Bank } from "../types/bank";

const apiBank = {
  getBanks: async (): Promise<Bank[]> => {
    const { data } = await api.get("/bank");
    return data;
  },
};

export default apiBank;
