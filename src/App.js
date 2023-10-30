import { useState } from 'react';
import './App.css';
import AddCoffee from './components/AddCoffee';
import Hero from './components/Hero';
import CoffeeList from './components/CoffeeList';

export default function App() {
  const [coffees, setCoffees] = useState()
  return (
    <>
      <Hero />
      <AddCoffee setCoffees={setCoffees} />
      <CoffeeList coffees={coffees} />
    </>
  )
}


