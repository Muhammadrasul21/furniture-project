import React from 'react'
import Layout from '../../components/Layout'
import { FaAngleRight } from 'react-icons/fa';


const Garant = () => {
  return (
    <div>
        <Layout>
             <div className="container max-w-[1332px] mx-auto px-4">
                   <div className="flex items-center gap-4 mt-[50px] mb-4">
                     <p className="opacity-35">Главная</p> <FaAngleRight /> <p>Гарантии</p>
                   </div>
                   <div className="flex flex-col sm:flex-row justify-between ">
                     <div className="w-[350px] sm:w-[450px]">
                       <p className="font-bold text-4xl w-[300px] sm:text-6xl mb-9">Гарантии</p>
                     </div>
                     <div className="w-[350px] sm:w-[500px] max-w-full">
                       <p className="font-semibold text-2xl mb-7"> Обмен и возврат по желанию покупателя</p>
                       <div className='mb-28 flex flex-col gap-4'>
                       <p className="text-xl w-full">
                       Bc товары в магазине «NornLight» имеют гарантию. Она заявляется производителеми имеет определенный срок действия на различные группы товаров.
                       Если ваше изделие вышло из строя в течение гарантийного срокавы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:</p>
                       <ul className="list-disc text-xl">
                        <li>Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.</li>
                        <li>Привезти товар к нам на склад или отправить транспортной компанией.</li>
                        <li>После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.</li>
                       </ul>
                       <p className="text-xl w-full">
                       Обращаем внимание, что «А-Свет» не является сервисным центром, a выполняет роль посредника между клиентом и поставщиком.
                       Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.</p>
                       </div>
                     </div>
                   </div>
                 </div>
        </Layout>
    </div>
  )
}

export default Garant