import React from 'react';

import { Outlet,Link } from 'react-router-dom';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function Dashboard() {
  const data = [
  {
    name: 'Page A',
    users: 4000,
    sales: 2400,
  },
  {
    name: 'Page B',
    users: 3000,
    sales: 1398,
  },
  {
    name: 'Page C',
    users: 2000,
    sales: 9800,
  },
  {
    name: 'Page D',
    users: 2780,
    sales: 3908,
  },
  {
    name: 'Page E',
    users: 1890,
    sales: 4800,
  },
];

  return (
 <div >
  <h1 className='h1111'>Dashboard</h1>
  <div className='sale'>
      <h3>Sales Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#8884d8" />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>


    

<nav className='buttom1'>
   <Link to="/Home">Home</Link>
  <Link to="/Dashboard">Dashboard</Link>
<Link to="/Login">Login</Link>
</nav>
<ul className="hello">
  <li className="hel">
    <p>Total Sale</p>
    <h4>5.444</h4>
  </li>
  <li className="hel">
    <p>Total Orders</p>
    <h4>1203</h4>
  </li>
  <li className="hel">
    <p>Total User</p>
    <h4>564</h4>
  </li>
  <li className="hel">
    <p>Revenue</p>
    <h4>$12.345</h4>
  </li>
</ul>

<div class="outer">
  <h1 className='h11'>Welcome To My Daraz</h1>
</div>




    </div>
  )
}

export default Dashboard ;
