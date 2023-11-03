import React, { useEffect, useState } from "react";
// import "./ Header.css";
import Piechart from "./piechart";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";

function Barchart() {
  const demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      await fetch("https://lastlast.onrender.com/api/post/posts")
        .then((response) => response.json())
        .then((res) => {
          setPosts(res.data);
        });
    };
    getdata();
  }, []);

  const data = [
    {
      name: "Blogs",
      pv: posts.length,
    },
    {
      name: "Comments",
      total: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Views",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];

  return (
    <div
      className="Chart-container"
      style={{
        width: "100%",
        height: "300px",
        display: "flex",
        marginTop: "20px",
      }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <Piechart />
    </div>
  );
}

export default Barchart;
