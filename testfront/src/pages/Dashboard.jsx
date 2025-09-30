import React from 'react'
import '../styles/dashboard.css'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell,
  LineChart, Line, Legend, ResponsiveContainer
} from 'recharts'

const barData = [
  { name: "Linux", value: 15000 },
  { name: "Mac", value: 30000 },
  { name: "iOS", value: 18000 },
  { name: "Windows", value: 26000 },
  { name: "Android", value: 12000 },
  { name: "Other", value: 20000 }
];

const pieData = [
  { name: "United States", value: 52.1 },
  { name: "Canada", value: 22.8 },
  { name: "Mexico", value: 13.9 },
  { name: "Other", value: 11.2 }
];
const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

const lineData = [
  { name: "Oct 2021", achieved: 35, target: 25 },
  { name: "Nov 2021", achieved: 28, target: 22 },
  { name: "Dec 2021", achieved: 20, target: 18 },
  { name: "Jan 2022", achieved: 30, target: 24 },
  { name: "Feb 2022", achieved: 24, target: 20 },
  { name: "Mar 2022", achieved: 27, target: 22 }
];

function Dashboard() {
  return (
    <div className='dash-container'>

      {/* ---- Ligne du haut : 4 dash ---- */}
      <div className='dash-top'>
        <div className='dash-card dash1'></div>
        <div className='dash-card dash2'></div>
        <div className='dash-card dash3'></div>
        <div className='dash-card dash4'></div>
      </div>

      {/* ---- Charts en bas ---- */}
      <div className='dash-charts'>
        <div className='chart-box'>
          <h4 className='chart-title'>Voyage le plus populaire</h4>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='chart-box'>
          <h4 className='chart-title'>Revenus par voyage</h4>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className='chart-box'>
          <h4 className='chart-title'>Statut Paiements</h4>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="achieved" stroke="#FF0000" />
              <Line type="monotone" dataKey="target" stroke="#0000FF" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
