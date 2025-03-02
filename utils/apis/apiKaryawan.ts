import { generateAvatarLink } from "../helpers/text";
import { User } from "../types/user";

const apiKaryawan = {
  getKaryawan: (): User[] => {
    return [
      {
        id: 1,
        name: "John technically",
        email: "johndoe@example.com",
        role: "teknisi",
        photo: generateAvatarLink("John technically"),
      },
      {
        id: 2,
        name: "Jane cashier",
        email: "janesmith@example.com",
        role: "kasir",
        photo: generateAvatarLink("Jane cashier"),
      },
      {
        id: 3,
        name: "Muhamamd rijal abdillah",
        email: "johndoe@example.com",
        role: "teknisi",
        photo: generateAvatarLink("Muhamamd rijal abdillah"),
      },
    ];
  },
};

export default apiKaryawan;
