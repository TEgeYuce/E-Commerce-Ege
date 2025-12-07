import kart1 from "/kart1.png";
import kart2 from "/kart2.png";
import kart3 from "/kart3.png";
import kart4 from "/kart4.png";
import kart5 from "/kart5.png";

const categories = [
  { name: "CLOTHS", imageUrl: kart1, link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: kart2, link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: kart3, link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: kart4, link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: kart5, link: "/shop/category/cloths" },
];

const ShopKategoriler = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center mb-10">
      {categories.map((category) => (
        
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-[205px] h-[205px] object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
          />
      ))}
    </div>
  );
};

export default ShopKategoriler;