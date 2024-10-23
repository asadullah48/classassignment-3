
import React from 'react';
import ProductCard from './ProductCard';
const Shop = () => {
  return (
    <section className="py-10 bg-white" id="shop">
      <h2 className="text-center text-3xl sm:text-4xl py-10 text-customTextColor mb-8">S H O P</h2>

      {/* First Row of Products */}
      <div className="container py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard id="1"
          imageUrl="/p-1pf-1.webp"
          hoverImageUrl="/p-1pb-1.webp"
          title="I'm a Product"
          price="$20.00"
        />
        <ProductCard id="2"
          imageUrl="/p-1pf2.webp"
          hoverImageUrl="/p-1pb2.webp"
          title="I'm a Product"
          price="$25.00"
        />
        <ProductCard id="3"
          imageUrl="/p1-pf3.webp"
          hoverImageUrl="/p1-pb3.webp"
          title="I'm a Product"
          price="$7.50"
        />
      </div>

      {/* Second Row of Products */}
      <div className="container py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard id="4"
          imageUrl="/p-2pf1.webp"
          hoverImageUrl="/p-2pb1.webp"
          title="I'm a Product"
          price="$20.00"
        />
        <ProductCard id="5"
          imageUrl="/p-2pf2.webp"
          hoverImageUrl="/p-2pb2.webp"
          title="I'm a Product"
          price="$25.00"
        />
        <ProductCard id="6"
          imageUrl="/p-2pf3.webp"
          hoverImageUrl="/p-2pb3.webp"
          title="I'm a Product"
          price="$7.50"
        />
      </div>

      {/* Third Row of Products */}
      <div className="container py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard id="7"
          imageUrl="/p-3pf1.webp"
          hoverImageUrl="/p-3pb1.webp"
          title="I'm a Product"
          price="$20.00"
        />
        <ProductCard id="8"
          imageUrl="/p-3pf2.webp"
          hoverImageUrl="/p-3pb2.webp"
          title="I'm a Product"
          price="$25.00"
        />
        <ProductCard id="9"
          imageUrl="/p-3pf3.webp"
          hoverImageUrl="/p-3pb3.webp"
          title="I'm a Product"
          price="$7.50"
        />
      </div>
    </section>


  );
};

export default Shop;