import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { FaRubleSign } from "react-icons/fa";
import detailimg from "../assets/detailimg.png";
import { detailIcons, detailXarakteristika } from '../stock';
import { CiHeart } from "react-icons/ci";

const DetailInfo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container max-w-[1332px] mx-auto px-4">
        <div className='flex items-center gap-4 mt-[50px] mb-12'>
          <p className='opacity-35'>Главная</p> <FaAngleRight />
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-center gap-14'>
          <div className='w-[300px] h-[300px] sm:w-[650px] sm:h-[600px] '>
            <img src={detailimg} alt="" />
          </div>

            <div className='w-[300px] sm:w-[595px] p-4 md:w-[450px]'>
            <p className='font-medium text-[40px] font-mono'>Встраиваемый светильник Novotech</p>
            <div className='flex items-center justify-between my-10'>
              <div className='flex flex-col gap-2 max-w-full'>
                <p className='opacity-50'>Scott</p>
                   <p className='opacity-50'>Артикул : 7655-188</p>
                <p className='text-[#4D932C]'>B наличии</p>
              </div>
              <div className='flex gap-2'>
                {detailIcons.map((item, index)=>(
                  <div key={index} className='w-5 h-5 rounded-full bg-[#E5E5E5] text-white hover:bg-black flex items-center justify-center transition duration-300 ease-in-out p-1'>{item}</div>
                ))}

              </div>
            </div>
            <div className='flex items-center gap-4'>
              <p className='font-medium text-[40px] flex items-center gap-2'>435 000<FaRubleSign className='w-8 h-8'/> </p>
              <del className='font-medium text-lg opacity-50'>522 000 ₽</del>
            </div>
            <p className='max-w-full my-10'>
              Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='border hover:border-black px-6 py-2 rounded-xl flex items-center justify-center gap-2'>
              <button onClick={() => setCount(count - 1)}>-</button>
              <span style={{ margin: "0 10px" }}>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
              </div>
              <button className='bg-white text-black py-2 px-11 rounded-xl border hover:bg-black hover:text-white transition duration-300 ease-in-out'>корзину</button>
              <div className='bg-[#F8F8F8] p-4 rounded-xl hover:bg-black hover:text-white transition duration-300 ease-in-out flex justify-center items-center'>
<CiHeart/>
              </div>
            </div>

            </div>
            
          </div>

          <div className='mt-7 sm:mt-44 mb-8 sm:mb-20'>
            <p className='font-medium text-4xl mb-[22px]'>Характеристика</p>
            <div className='border'>
              {detailXarakteristika.map((item, index)=>(
            <div key={index} className={`flex justify-between p-4 gap-8 items-center ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F8]'}`}>
              <p>{item.name}</p>
              <p className='w[100px]  sm:w-[500px] text-end'>{item.info}</p>
            </div>    
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default DetailInfo;
