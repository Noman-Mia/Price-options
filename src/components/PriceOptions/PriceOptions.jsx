import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Bronze Membership",
      price: "$29.99",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker rental available",
      ],
    },
    {
      id: 2,
      name: "Silver Membership",
      price: "$49.99",
      features: [
        "All Bronze Membership features",
        "Access to group fitness classes",
        "Sauna and steam room access",
        "Sauna and steam rooms access",
      ],
    },
    {
      id: 3,
      name: "Gold Membership",
      price: "$79.99",
      features: [
        "All Silver Membership features",
        "Personal training session once a week",
        "Towel service included",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl mb-16 text-error font-bold">Best deal in the year</h2>
      <div className="grid grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
