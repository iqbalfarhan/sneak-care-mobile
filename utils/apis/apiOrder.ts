import { generateAvatarLink, getRandomValue } from "../helpers/text";
import { Order, OrderStatus } from "../types/order";

const data: Order[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  invoice_no: `INV-00000${i}`,
  barang: [
    {
      id: i * 110,
      name: "Adidas ukuran 42",
      layanan: {
        id: 6,
        name: "Antibacterial Treatment",
        price: 35000,
        description:
          "Membersihkan sepatu dengan cairan antibakteri untuk mencegah jamur dan bau.",
      },
    },
    {
      id: i * 111,
      name: "Kodachi ukuran 42",
      layanan: {
        id: 3,
        name: "Deep cleaning",
        price: 50000,
        description:
          "Membersihkan sepatu dengan cairan antibakteri untuk mencegah jamur dan bau.",
      },
    },
  ],
  estimate_date: new Date(),
  shipping_cost: 10000,
  status: getRandomValue([
    "draft",
    "progress",
    "done",
    "complete",
    "canceled",
  ]) as OrderStatus,
  teknisi: undefined,
  kasir: {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    role: "kasir",
    photo: generateAvatarLink(),
  },
  pelanggan: {
    id: 1,
    name: "John Doe",
    phone: "081234567890",
  },
  diskon: {
    id: 1,
    name: "Merdekaaaaa!",
    description: "Diskon Merdeka",
    value: 10000,
    type: "amount",
  },
  payment: {
    id: 1,
    name: "Transfer Bank BNI",
    value: "0891032005",
    account_number: "0891032005",
    bank_id: 1,
  },
}));

const apiOrder = {
  getOrders: (): Order[] => {
    return data;
  },
  getOrderById: (id: number): Order | null => {
    return data.find((order) => order.id === id) ?? null;
  },
  updateOrderStatus: (id: number, status: OrderStatus) => {
    return;
  },
};

export default apiOrder;
