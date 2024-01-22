import './App.css';
import Nav from './Nav';
import Poster from './Poster';
import Card from './Card';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react';


function App() {
  let [initCart, setCart] = useState(0);
  let [initButtonText, setButtonText] = useState("Add to Cart");

  let press = () => {
    setCart((initCart+1));
    setButtonText(("Remove from cart"));
  };

  let cardDetails = [
    {
      TopSale : true,
      cardImg : "/Images/cardImg13.jpg",
      productName : "Indian Men Traditional Shirt",
      starRating : 4,
      mrp : 599,
      offer : 20,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "/Images/cardImg2.jpg",
      productName : "Men Shirt",
      starRating : 3,
      mrp : 500,
      offer : 4,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "/Images/cardImg3.jpg",
      productName : "Men Tshirt - Combo",
      starRating : 5,
      mrp : 800,
      offer : 5,
      btnTxt : initButtonText
    },
    {
      TopSale : true,
      cardImg : "/Images/cardImg4.jpg",
      productName : "Chudidhar",
      starRating : 4,
      mrp : 2000,
      offer : 40,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "/Images/cardImg5.jpg",
      productName : "Western Girl - Tshirt",
      starRating : 4,
      mrp : 1000,
      offer : 25,
      btnTxt : initButtonText
    },
    {
      TopSale : true,
      cardImg : "/Images/cardImg6.jpg",
      productName : "Girl Tshirt",
      starRating : 5,
      mrp : 3000,
      offer : 27,
      btnTxt : initButtonText
    },
    {
      TopSale : true,
      cardImg : "/Images/cardImg7.jpg",
      productName : "Stylih Girl Tshirt",
      starRating : 5,
      mrp : 2500,
      offer : 30,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "/Images/cardImg8.jpg",
      productName : "Girl Tshirt - Combo",
      starRating : 4,
      mrp : 400,
      offer : 4,
      btnTxt : initButtonText
    },
    {
      TopSale : true,
      cardImg : "/Images/cardImg9.jpg",
      productName : "Polyster Saree",
      starRating : 5,
      mrp : 4000,
      offer : 7,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "/Images/cardImg10.jpg",
      productName : "Traditional Saree",
      starRating : 4,
      mrp : 4500,
      offer : 15,
      btnTxt : initButtonText
    },
    {
      TopSale : true,
      cardImg : "/Images/cardImg11.jpg",
      productName : "Occusion Saree",
      starRating : 3,
      mrp : 700,
      offer : 40,
      btnTxt : initButtonText
    },
    {
      TopSale : false,
      cardImg : "/Images/cardImg13.jpg",
      productName : "Traditional Shirt",
      starRating : 4,
      mrp : 999,
      offer : 9,
      btnTxt : initButtonText
    }
  ];

  return (
    <>
      <header>
        <Nav navDetails={initCart}/>
      </header>
      <main>
        <section>
          <Poster/>
        </section>
        <section className='py-5'>
          <div className='container px-4 px-lg-5 mt-5'>
            <div className='row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
              {
                cardDetails.map((card)=>{
                  return <Card props={card} press={press}/>
                })
              }
            </div>
          </div>
        </section>
      </main>
      <footer class="py-5 bg-dark">
        <Footer/>
      </footer>
    </>
  );
}

export default App;
