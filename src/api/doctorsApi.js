export const dummyDoctors = [
  {
    id: "1",
    name: "Dr. Sarah Smith",
    specialty: "Cardiology",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "2",
    name: "Dr. John Doe",
    specialty: "Neurology",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: "3",
    name: "Dr. Emily Chen",
    specialty: "Pediatrics",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "4",
    name: "Dr. Michael Brown",
    specialty: "Orthopedics",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export const doctorsApi = {
  getAll: async () => {
    return Promise.resolve(dummyDoctors);
  },
};
