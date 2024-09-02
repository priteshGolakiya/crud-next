import Link from "next/link";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="h-full overflow-y-auto py-6 px-4">
      <div className="text-2xl font-bold mb-8 text-center">
        <h1>Dashboard</h1>
      </div>
      <ul className="space-y-6">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <h2 className="text-sm uppercase tracking-wider text-blue-200 mb-2">
              {cat.title}
            </h2>
            <ul className="space-y-2">
              {cat.list.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="flex items-center p-2 text-gray-200 hover:bg-blue-700 rounded-md transition-colors duration-200"
                  >
                    <span className="text-xl mr-3">{item.icon}</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className="mt-8 border-t border-blue-500 pt-4">
          <Link
            href="/logout"
            className="flex items-center p-2 text-gray-200 hover:bg-blue-700 rounded-md transition-colors duration-200"
          >
            <span className="text-xl mr-3">
              <MdLogout />
            </span>
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
