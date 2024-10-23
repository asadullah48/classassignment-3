import React from 'react';
import Image from 'next/image';

const ProductCard = ({ imageUrl, hoverImageUrl, title, price }) => {
  return (
    <div className="relative bg-white  overflow-hidden  group">
      <Image
        src={imageUrl}
        alt={title}
        width={500} 
        height={500} 
        className="w-full h-65 object-cover  transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      <Image
        src={hoverImageUrl}
        alt={title}
        width={400} 
        height={400} 
        className="absolute inset-0  w-[90%] h-70 object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 cursor-pointer"
      />
      <div className="p-4 flex flex-col  items-center">
        <h3 className="text-lg text-customTextColor">{title}</h3>
        <p className="text-customTextColor">{price}</p>
        <button className="mt-2 w-[45%] bg-transparent text-customTextColor py-2 border hover:bg-black hover:text-white border-black">
          Add to Cart
        </button>
      </div>
    </div>

  );
};

export default ProductCard;