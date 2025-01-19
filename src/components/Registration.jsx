import React, { useState } from 'react';

const deliveryOptions = [
  { id: 'delivery', label: 'Доставка' },
  { id: 'pickup', label: 'Самовывоз' },
];

const Registration = () => {
  const [selected, setSelected] = useState('delivery');

  return (
    <div className="container max-w-[1332px] mx-auto px-4">
      <div className="bg-[#F2F2F2] p-12 rounded-3xl">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-3xl font-sans leading-9">Оформление</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-b border-black pb-9">
            <input
              type="text"
              placeholder="ФИО"
              className="border bg-inherit placeholder:text-black border-[#454545] py-3 px-4 rounded-[100px] w-full"
            />
            <input
              type="tel"
              placeholder="телефон"
              className="border bg-inherit placeholder:text-black border-[#454545] py-3 px-4 rounded-[100px] w-full"
            />
            <input
              type="email"
              placeholder="Электронная почта"
              className="border bg-inherit placeholder:text-black border-[#454545] py-3 px-4 rounded-[100px] w-full"
            />
          </div>
        </div>
        <div className="max-w-[767px] pb-10">
          <h2 className="font-bold text-3xl font-sans leading-9 mt-9 mb-8">Доставка</h2>
          <div className="flex lg:hidden gap-7 mb-6">
            {deliveryOptions.map((option) => (
              <label key={option.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="delivery"
                value={option.id}
                checked={selected === option.id}
                onChange={(e) => setSelected(e.target.value)}
                className="sr-only"
              />
              <span
                className={`w-4 h-4 rounded-full ${
                  selected === option.id ? 'bg-black' : 'border-[1.5px] border-black'
                }`}
              />
              <span className="text-base">{option.label}</span>
            </label>
            
            ))}
          </div>
          <input
            type="text"
            placeholder="Адрес доставки"
            className="border bg-inherit placeholder:text-black border-[#454545] py-3 w-full px-4 rounded-[100px]"
          />
          <textarea
            placeholder="Комментарий"
            className="bg-inherit border border-black rounded-3xl w-full h-[150px] mt-8 p-4 placeholder:text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
