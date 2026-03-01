import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '' });

  // Fetch data on load
  useEffect(() => {
    axios.get('http://api-docker-backend.duckdns.org/api/users')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);
 console.log("sssrgsrgrsrggfh")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://api-docker-backend.duckdns.org/api/users', formData);
    console.log("fsdvsv",res);
    setItems([...items, res.data]); // Update UI
    setFormData({ title: '', description: '' }); // Reset form
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Standard MERN App</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Title" 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})} 
        />
        <input 
          placeholder="Description" 
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})} 
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item._id}>
            <b>{item.title}</b>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
