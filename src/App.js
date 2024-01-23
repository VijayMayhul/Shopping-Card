import './App.css';
import Nav from './Nav';
import Poster from './Poster';
import Card from './Card';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react';


function App() {

  const [cartData, setCartData] = useState([]);
  const [btnText, setBtnText] = useState([]);
  // console.log(typeof btnText);

  for(let i=1;i <= 12;i++){
    let obj = { id : i, txt : "Add to Cart"};
    btnText.push(obj);
    // console.log(btnText);
  }
  

  let cardDetails = [
    {
      id : 1,
      TopSale : true,
      cardImg : "/Images/cardImg1.jpg",
      productName : "Kurti for Men",
      starRating : 5,
      mrp : 499,
      offer : 20,
      btnTxt : btnText[0].txt
    },
    {
      id : 2,
      TopSale : false,
      cardImg : "/Images/cardImg2.jpg",
      productName : "Men Casual Shirt",
      starRating : 3,
      mrp : 450,
      offer : 4,
      btnTxt : btnText[1].txt
    },
    {
      id : 3,
      TopSale : false,
      cardImg : "/Images/cardImg3.jpg",
      productName : "Men Tshirt - Combo",
      starRating : 4,
      mrp : 599,
      offer : 5,
      btnTxt : btnText[2].txt
    },
    {
      id : 4,
      TopSale : true,
      cardImg : "/Images/cardImg4.jpg",
      productName : "Women's Chudidhar",
      starRating : 5,
      mrp : 2000,
      offer : 40,
      btnTxt : btnText[3].txt
    },
    {
      id : 5,
      TopSale : false,
      cardImg : "/Images/cardImg5.webp",
      productName : "Girl - Tshirt Combo",
      starRating : 3,
      mrp : 650,
      offer : 25,
      btnTxt : btnText[4].txt
    },
    {
      id : 6,
      TopSale : false,
      cardImg : "/Images/cardImg6.jpg",
      productName : "Casual Girl Tshirt",
      starRating : 4,
      mrp : 350,
      offer : 27,
      btnTxt : btnText[5].txt
    },
    {
      id : 7,
      TopSale : false,
      cardImg : "/Images/cardImg7.jpg",
      productName : "Women's Blue Solid Denim Shirt",
      starRating : 4,
      mrp : 2500,
      offer : 30,
      btnTxt : btnText[6].txt
    },
    {
      id : 8,
      TopSale : true,
      cardImg : "/Images/cardImg8.jpg",
      productName : "Lehenga Choli Half Saree For Women",
      starRating : 5,
      mrp : 4000,
      offer : 4,
      btnTxt : btnText[7].txt
    },
    {
      id : 9,
      TopSale : true,
      cardImg : "/Images/cardImg9.jpg",
      productName : "Women's Lehanga Kanjivaram Silk",
      starRating : 5,
      mrp : 15000,
      offer : 7,
      btnTxt : btnText[8].txt
    },
    {
      id : 10,
      TopSale : true,
      cardImg : "/Images/cardImg10.jpg",
      productName : "Bridal Paithani Saree",
      starRating : 4,
      mrp : 21000,
      offer : 15,
      btnTxt : btnText[9].txt
    },
    {
      id : 11,
      TopSale : true,
      cardImg : "/Images/cardImg11.jpg",
      productName : "Women's Banarasi Silk Saree",
      starRating : 5,
      mrp : 27600,
      offer : 40,
      btnTxt : btnText[10].txt
    },
    {
      id : 12,
      TopSale : false,
      cardImg : "/Images/cardImg12.jpg",
      productName : "Men's Cotton Blend Jacket",
      starRating : 4,
      mrp : 1499,
      offer : 9,
      btnTxt : btnText[11].txt
    }
  ];

  let press = (product) => {
    let foundButton  = btnText.find((ele)=> product.id === ele.id)
    // console.log(btnElement);

    if (foundButton .txt === "Add to Cart") {

      setCartData([...cartData, product]);

      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            // console.log({ ...btn, txt: "Remove from Cart" });
            return { ...btn, txt: "Remove from Cart" };
          } else {
            return btn;
          }
        });
      });
    }else if(foundButton .txt === "Remove from Cart"){
      setCartData(cartData.filter(ele => ele.id != product.id));
      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            return { ...btn, txt: "Add to Cart" };
          } else {
            return btn;
          }
        });
      });
    }
    
    
  };

  return (
    <>
      <header>
        <Nav navDetails={cartData}/>
      </header>
      <main>
        <section>
          <Poster/>
        </section>
        <section className='py-5'>
          <div className='container px-3 px-lg-4 mt-5'>
            <div className='row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
              {
                cardDetails.map((card,index)=>{
                  return <Card key={index++} props={card} press={press}/>
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
