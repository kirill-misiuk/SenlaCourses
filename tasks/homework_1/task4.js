const clients = [{
    name: 'Филип Фрай',
    email: 'fray@mail.un',
    isSubscribed: false,
    orders: [11700, 1980, 450, 5500]
}, {
    name: 'Бендер Сгибатель Родригес',
    email: 'bender.rodriges@rambler.un',
    isSubscribed: true,
    orders: [440, 226, 7650, 2990, 70]
}, {
    name: 'Доктор Джон Зоидберг',
    email: 'zoidberg-md@list.un',
    isSubscribed: true,
    orders: [720]
}];
const mailing = (clients) => clients.filter((item) =>
    item.isSubscribed === true).forEach((item) =>
    console.log(`${item.name}, ваш заказ принят, подробности вашего заказа в письме, которое мы отправили на ${item.email}`));
mailing(clients);


