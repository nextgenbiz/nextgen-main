import CounterBox from "./CounterBox";

const data = [
  {
    number: 150,
    title: "Gamechangers",
    bg: "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-87.svg",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/group-2.png",
  },
  {
    number: 1200,
    title: "Success Stories",
    bg: "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-92.svg",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/group.png",
  },
  {
    number: 1500,
    title: "Breakthroughs",
    bg: "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-93.svg",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/vector-1.svg",
  },
  {
    number: 80,
    title: "Solutions",
    bg: "https://c.animaapp.com/metmcazsfuMR7v/img/rectangle-94.svg",
    icon: "https://c.animaapp.com/metmcazsfuMR7v/img/group-1.png",
  },
];

export default function CounterSection() {
  return (
    <section className="w-full relative py-20 bg-white">
      <div className=" max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 justify-center px-4 gap-2 md:gap-4">
        {data.map((item, idx) => (
          <CounterBox key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
