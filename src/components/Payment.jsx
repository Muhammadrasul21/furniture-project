import React, {useState} from 'react'

const deliveryOptions = [
    { id: 'delivery', label: 'Доставка' },
    { id: 'pickup', label: 'Самовывоз' },
  ];
  

const Payment = () => {

      const [selected, setSelected] = useState('delivery');
    
  return (
    <div className="container max-w-[1332px] mx-auto px-4 mt-14">
        <div  className="bg-[#F2F2F2] p-12 rounded-3xl">
        <h2 className="font-bold text-3xl font-sans leading-9 mt-9 mb-8">Оплата</h2>
        {/* <div className='w-[767px] flex gap-10 flex-col'> 
            <div className='flex justify-evenly w-[350px]'>
            <span className="flex-1 border-dashed border-b w-[270px] border-gray-300 mr-2">
        <span className="pr-2">Товары</span>
      </span>
      <span className="font-bold text-gray-600">12 300₽</span>
            </div>
            <div className='flex justify-evenly w-[350px]'>
            <span className="flex-1 border-dashed border-b w-[270px] border-gray-300 mr-2">
        <span className="pr-2">Доставка</span>
      </span>
      <span className="font-bold text-gray-600">580₽</span>
            </div>
        </div> */}
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
        </div>

      </div>
  )
}

export default Payment