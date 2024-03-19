import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { Audio } from 'react-loader-spinner'

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true)

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
        setLoading(false)
      });
  }, []);
  console.log(phones);
  return (
    <div>
      <h2 className="text-5xl">Phones: {phones.length}</h2>

      {loading && <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />}

      <BarChart width={600} height={400} data={phones}>
        <XAxis width={800} dataKey="name" />
        <YAxis />
        j<Tooltip />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Phones;
