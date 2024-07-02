import React from "react";
import { LuHeadphones, LuGift, LuCoins, LuTruck, LuCircleDollarSign } from "react-icons/lu";

export default function Home() {
  const benefits = [
    {
      id: 1,
      name: "Free Customer Services",
      description: "",
      icon: LuHeadphones,
    },
    {
      id: 2,
      name: "Free Gift Voucher",
      description: "",
      icon: LuGift,
    },
    {
      id: 3,
      name: "Money Back Guarantee",
      description: "",
      icon: LuCircleDollarSign,
    },
    {
      id: 4,
      name: "Free Worldwide Delivery",
      description: "",
      icon: LuTruck,
    },
  ];
  return (
    <section className="benefits">
      {benefits.map((benefit, index) => (
        <article key={index}>
          <div>
            <benefit.icon className="icon" />
          </div>
          <h2>{benefit.name}</h2>
        </article>
      ))}
    </section>
  );
}
