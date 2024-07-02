import React from "react";

export default function Categories() {
  const categoriesData = [
    {
      id: 1,
      name: "Supplements",
      image:
        "https://images.pexels.com/photos/8940754/pexels-photo-8940754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Body Mist",
      image:
        "https://images.pexels.com/photos/4998015/pexels-photo-4998015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Fragrances",
      image:
        "https://images.pexels.com/photos/8450212/pexels-photo-8450212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Facials",
      image:
        "https://images.pexels.com/photos/5069401/pexels-photo-5069401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <section className="category">
      <h2>Categories</h2>
      <div className="flex justify-center">
        {categoriesData.map((category, index) => (
          <article key={index}>
            <img src={category.image} alt={category.name} />
            <h5>{category.name}</h5>
          </article>
        ))}
      </div>
    </section>
  );
}
