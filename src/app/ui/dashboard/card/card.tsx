import React from "react";

interface CardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
  dis: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  icon: Icon,
  color,
  dis,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
      <p className={`text-xl font-bold pt-3 text-gray-900`}>{dis}</p>
    </div>
  );
};

export default Card;
