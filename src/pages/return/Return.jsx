import React from 'react';
import Layout from '../../components/Layout';
import { FaAngleRight } from 'react-icons/fa';
import { returnItems } from '../../stock';

const Return = () => {
  return (
    <div>
      <Layout>
        <div className="container max-w-[1332px] mx-auto px-4">
          <div className="flex items-center gap-4 mt-[50px] mb-4">
            <p className="opacity-35">Главная</p>
            <FaAngleRight />
            <p>Доставка и оплата</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-[350px] sm:w-[450px]">
              <p className="font-bold text-4xl w-[300px] sm:text-6xl mb-9">Возврат</p>
            </div>
            <div className='flex flex-col gap-[60px] mb-32'>
            <div className="w-[350px] sm:w-[500px] max-w-full">
              <p className="font-semibold text-2xl mb-7">Обмен и возврат по желанию покупателя</p>
              <p className="mb-[40px] text-xl w-full">
                Если товар по каким-то причинам не подошел вам, вы имеете право вернуть или
                обменять на другой в течение 7 дней* момента покупки при соблюдении
                следующих условий:
              </p>
              <ul className="list-inside list-disc">
                {returnItems.map((item, index) => (
                  <li key={index} className="text-[#2F4DA3] mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[350px] sm:w-[500px] max-w-full">
              <p className="font-semibold text-2xl mb-7">Обмен и возврат по ошибке продавца</p>
              <p className="mb-[40px] text-xl w-full">
              Причины обмена или возврата по ошибке продавца:
              </p>
              <ul className="list-inside list-disc">
              
                  <li className="text-[#2F4DA3] mb-2">Неполная комплектация товара</li>
                  <li className="text-[#2F4DA3] mb-2">Брак или дефект товара</li>
                  <li className="text-[#2F4DA3] mb-2">Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/</li>
                  <li className="text-[#2F4DA3] mb-2">Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно</li>
              </ul>
            </div>
            <div className="w-[350px] sm:w-[500px] max-w-full">
              <p className="font-semibold text-2xl mb-7">Возврат денежных средств</p>
              <p className="mb-[40px] text-xl w-full">
              Возврат денежных средств осуществляется путем перевода на банковские реквизиты покупателя при наличии заявления от покупателя.</p>
            </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Return;
