import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, AreaChart, Area, PieChart, Pie } from 'recharts';
import './Dashboard.css'


const Dashboard = () => {

    // const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
    const [data, usedata] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => usedata(data))
    }, [])
    // Line Chart
    const renderLineChart = (
        <LineChart width={800} height={400} data={data} margin={{ top: 15, right: 60, bottom: 15, left: 80 }}>
            <Line type="monotone" dataKey="sell" stroke="#BF2705" />
            <CartesianGrid stroke="#FFFFF" strokeDasharray="1 2" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
    // bar chart
    const renderBarChart = (
        <BarChart width={1000} height={400} data={data} margin={{ top: 15, right: 10, bottom: 15, left: 80 }}>
            <XAxis dataKey="investment" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="revenue" fill="#E33008" barSize={50} />
        </BarChart>
    );

    const areaChart = (

        <AreaChart width={930} height={400} data={data}
            margin={{ top: 15, right: 30, left: 90, bottom: 15 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="revenue" stroke="#BF2807" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>

    );




    return (
        <div className='container mt-5'>
            <h1 className='fw-bold mb-3'>Month Vs Sells</h1>
            <h1 className='bar-style shadow-lg mb-5'> {renderLineChart}</h1>
            <h1 className='mt-3 fw-bold'>Investment vs Revenue</h1>
            <h1 className='bar-style shadow-lg mt-5'>{renderBarChart}</h1>
            <h1 className='mt-3 fw-bold'>Month vs Investment & Revenue</h1>
            <h1 className='bar-style shadow-lg mt-5'>{areaChart}</h1>

            <div className='p-5'>

            </div>
        </div>
    );
};

export default Dashboard;