export const offerDescription = {
  title: `Марпех 11`,
  configuration: [
    {
      type: `fuel`,
      value: `Бензин`
    },
    {
      type: `gearbox`,
      value: `механика`
    },
    {
      type: `power`,
      value: `100 л.с.`
    },
    {
      type: `displacement`,
      value: `1.4 л`
    }
  ],
  price: {
    old: 2400000,
    new: 2300000,
    credit: 11000
  }
};

export const offerСharacteristics = [
  {
    type: `Трансмиссия`,
    value: `Роботизированная`
  },
  {
    type: `Мощность двигателя, л.с.`,
    value: `249`
  },
  {
    type: `Тип двигателя`,
    value: `Бензиновый`
  },
  {
    type: `Привод`,
    value: `Полный`
  },
  {
    type: `Объем двигателя, л`,
    value: `2.4`
  },
  {
    type: `Макс. крутящий момент`,
    value: `370/4500`
  },
  {
    type: `Количество цилиндров`,
    value: `4`
  }
];

export const offerImages = [
  {
    big: `./img/car-1.jpg`,
    small: `./img/car-1-min.jpg`,
    alt: `Фотография внешнего вида автомобиля`
  },
  {
    big: `./img/car-2.jpg`,
    small: `./img/car-2-min.jpg`,
    alt: `Фотография салона автомобиля`
  },
  {
    big: `./img/car-3.jpg`,
    small: `./img/car-3-min.jpg`,
    alt: `Фотография приборной панели автомобиля`
  }
];

export const offerReviews = [
  {
    author: `Борис Иванов`,
    advantages: `мощность, внешний вид`,
    disadvantages: `Слабые тормозные колодки (пришлось заменить)`,
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
    rating: 3,
    posted: `2021-06-05T13:30:00`
  },
  {
    author: `Марсель Исмагилов`,
    advantages: `Cтиль, комфорт, управляемость`,
    disadvantages: ` Дорогой ремонт и обслуживание`,
    comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
    rating: 3,
    posted: `2021-06-02T18:34:28`
  }
];
