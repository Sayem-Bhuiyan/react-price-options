import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data.data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const object = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return object;
        });
        setPhones(phonesWithFakeData);
      });
  }, []);
  console.log(phones);
  return (
    <div>
      <h2 className="text-5xl">Phones: {phones.length}</h2>
      
      <BarChart width={600} height={400} data={phones}>
      <XAxis width={800} dataKey='name' />
      <YAxis />
      j<Tooltip />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Phones;
