import { BiWallet } from "react-icons/bi";
import Card from "../ui/dashboard/card/card";
import { FaClipboardList, FaUserSecret } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import Chart from "../ui/dashboard/chart/chart";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "₹45,678",
      icon: BiWallet,
      color: "text-green-600",
      dis: "This is total revenue of this year",
    },
    {
      title: "Total Users",
      value: "1,234",
      icon: FaUserSecret,
      color: "text-blue-600",
      dis: "This is total users of this year",
    },
    {
      title: "New Orders",
      value: "56",
      icon: CgShoppingCart,
      color: "text-orange-600",
      dis: "This is new orders of this year",
    },
    {
      title: "Pending Tasks",
      value: "23",
      icon: FaClipboardList,
      color: "text-red-600",
      dis: "This is pending tasks of this year",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="mt-5">
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
