import { User } from "../types/user";

type LaporanTeknisi = {
  teknisi: User;
  serivces: {
    name: string;
    qty: number;
  }[];
};

const apiLaporan = {
  getLaporanTeknisi: async (): Promise<LaporanTeknisi[]> => {
    return [
      {
        teknisi: {
          id: 1,
          name: "Teknisi 1",
          email: "teknisi1@gmail.com",
          role: "teknisi",
          photo: "https://example.com/teknisi1.jpg",
        },
        serivces: [
          { name: "Service 1", qty: 3 },
          { name: "Service 2", qty: 2 },
        ],
      },
    ];
  },
};

export default apiLaporan;
