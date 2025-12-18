export const categories = [
  {
    id: "1",
    title: "Electronics",
    description: "Latest gadgets, smartphones, laptops, and electronic accessories",
    gender: "unisex",
    code: "ELEC",
    rating: 4.5,
    image: "https://png.pngtree.com/thumb_back/fw800/background/20250323/pngtree-modern-digital-devices-including-computer-laptop-mobile-phone-and-tablet-pc-photo-photo-image_69746356.webp",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "2",
    title: "Fashion & Clothing",
    description: "Trendy clothes, shoes, bags, and fashion accessories for all styles",
    gender: "unisex",
    code: "FASH",
    rating: 4.3,
    image: "https://media.istockphoto.com/id/1724853871/tr/foto%C4%9Fraf/womens-clothes-and-shoes-clothes-rack-with-stylish-and-elegant-garments-in-fashion-atelier.jpg?s=612x612&w=0&k=20&c=JiM6zO1-kgP0NdH-wVGNLuAn529dysKLEeyjkZ5PCcA=",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "3",
    title: "Home & Garden",
    description: "Furniture, home decor, kitchen appliances, and garden essentials",
    gender: "unisex",
    code: "HOME",
    rating: 4.2,
    image: "https://st4.depositphotos.com/19217814/41913/i/450/depositphotos_419136490-stock-photo-beautiful-porch-home-autumn-decorations.jpg",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "4",
    title: "Sports & Outdoors",
    description: "Sports equipment, outdoor gear, fitness accessories, and activewear",
    gender: "unisex",
    code: "SPORT",
    rating: 4.4,
    image: "https://media.istockphoto.com/id/949190736/photo/various-sport-equipments-on-grass.jpg?s=612x612&w=0&k=20&c=e5XgszJQciKRrqQECO9RPqLh7w1kkhNBFetf4742BF0=",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "5",
    title: "Books & Media",
    description: "Books, magazines, movies, music, and educational materials",
    gender: "unisex",
    code: "BOOK",
    rating: 4.1,
    image: "https://img.freepik.com/free-photo/education-day-arrangement-table-with-headphones_23-2148721273.jpg?semt=ais_hybrid&w=740&q=80",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  }
];

export const getCategoryById = (id) => {
  return categories.find(category => category.id === id);
};

export const getCategoryByCode = (code) => {
  return categories.find(category => category.code === code);
};

export const getCategoryNames = () => {
  return categories.map(category => category.title);
};

export const getCategoriesByGender = (gender) => {
  return categories.filter(category => category.gender === gender || category.gender === "unisex");
};