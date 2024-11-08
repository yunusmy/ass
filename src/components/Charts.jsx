import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
    {name: 'Electronics', uv: 199.99, pv: 2400, amt: 2400}, 
    {name: 'Home Appliances', uv: 499.99, pv: 2400, amt: 2400}, 
    {name: 'Gaming Laptop', uv:1299.99, pv: 2400, amt: 2400}, 
    {name: 'Smartphone 5G', uv: 699.99, pv: 2400, amt: 2400}, 
    {name: 'Kitchen Appliances', uv: 29.99, pv: 2400, amt: 2400}, 
    {name: 'Smart Watch', uv: 199.99, pv: 2400, amt: 2400}, 

];



const Charts = () => {
    return (
        <div>


  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
        </div>
    );
};

export default Charts;