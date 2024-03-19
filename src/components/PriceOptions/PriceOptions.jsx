import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 30,
      features: [
        "Access to cardio equipment",
        "Access to weight lifting area",
        "Locker room access",
        "24/7 gym access",
        "Access to fitness classes (limited)",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 50,
      features: [
        "Access to all Basic features",
        "Group fitness classes included",
        "Sauna access",
        "Towel service",
        "Free Wi-Fi",
        "Access to basketball court",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 80,
      features: [
        "Access to all Standard features",
        "Personal training session (1/month)",
        "Smoothie bar access",
        "Access to tanning beds",
        "Priority booking for classes",
        "Access to swimming pool",
        "Discounts on merchandise",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-12">
        {priceOptions.map((option) => (
          <PriceOption key={option["id"]} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
