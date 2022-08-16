//синтексис стрелочных функций
const add = function (a, b) {
    return a + b;
};
console.log(add(10, 6));
//тоже самое под стрелку
const add2 = (a, b) => {
    console.log(`=>`);
    return (a * b);
};
console.log(add2(8, 10));
//если один пареметр
const logMessage = message => {
    console.log(message);
};
console.log(logMessage('=>'));
//если нет параметров
const greet = () => {
    console.log('=>');
};
greet();

//псевдомассив arguments - отсутствует в стрелочных функциях
const add3 = () => {
    console.log(arguments);//будет ошибка
};
add3(1, 2, 3, 4, 5, 6, 7);
//верный вариант
const add4 = (...args) => {
    console.log(args);
};
add4(1, 2, 3, 4, 5, 6, 7);
//
//стрелки как методы обьекта
const user = {
    fullName: 'Mango',
    showName() {
        console.log('this:', this);
        console.log('this.fullName:', this.fullName);
        const inner = () => {
            console.log(`this in iner:, this`);
        };
        inner();
    }
};
user.showName();
//стрелки никогда не бывают методом обьекта
const user = {
    fullName: () => {
        console.log('this:', this);
        console.log('this.fullName:', this.fullName);

    }
};
user.fullName();
//
//цепочки вызовов
//исходный материал
const numbers = [1, 5, 2, 4, 3];
const greatenThenTwo = numbers.filter(function (num) {
    return num > 2;
});
console.log(greatenThenTwo);
//рефатроринг стрелочной => 
const numbers = [1, 5, 2, 4, 3];
const greatenThenTwo = numbers.filter(num => num > 2);
console.log(greatenThenTwo);
//исходный
const numbers = [1, 5, 2, 4, 3];
const greatenThenTwo = numbers.filter(function (num) {
    return num > 2;
});
console.log(greatenThenTwo);
const multByTwo = greaterThenTwo.map(function (num) {
    return num * 3;
});
console.log(multByTwo);
//рефакт
const numbers = [1, 5, 2, 4, 3];
const greatenThenTwo = numbers.filter(num => num > 2);
console.log(greatenThenTwo);
const multByTwo = greatenThenTwo.map(num => num * 3);
console.log(multByTwo);
//исходный
const numbers = [1, 5, 2, 4, 3];
const greatenThenTwo = numbers.filter(function (num) {
    return num > 2;
});
console.log(greatenThenTwo);
const multByTwo = greaterThenTwo.map(function (num) {
    return num * 3;
});
console.log(multByTwo);
const sorted = multByTwo.sort(function (a, b) {
    return a - b;
});
console.log(sorted);
//рефакторинг
const numbers = [1, 5, 2, 4, 3];
const greatenThenTwo = numbers.filter(num => num > 2);
console.log(greatenThenTwo);
const multByTwo = greatenThenTwo.map(num => num * 3);
console.log(multByTwo);
const sorted = multByTwo.sort((a, b) => a - b);
console.log(sorted);

//оригинал
const numbers = [1, 5, 2, 4, 3];
const res = numbers
    .filter(function (num) {
        return num > 2;
    })
    .map(function (num) {
        return num * 3;
    })
    .sort(function (a, b) {
        return a - b;
    });
console.log(res);
//рефакторинг
const numbers = [1, 5, 2, 4, 3];
const res = numbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);
console.log(res);

//Сортируем тех кто онлайн по рангу
//оригинал
const players = [
    { id: 'id-1', tag: 'Mango', isOnLine: true, rank: 800 },
    { id: 'id-2', tag: 'Poly', isOnLine: false, rank: 600 },
    { id: 'id-3', tag: 'Ajax', isOnLine: true, rank: 100 },
    { id: 'id-4', tag: 'Kiwi', isOnLine: true, rank: 400 },
];
const onlineAndSorted = players
    .filter(function (player) {
        return player.isOnLine;
    })
    .sort(function (prevPlayer, nextPlayer) {
        return prevPlayer.rank - nextPlayer.rank;
    });
console.table(onlineAndSorted);
//рефакторинг
const players = [
    { id: 'id-1', tag: 'Mango', isOnLine: true, rank: 800 },
    { id: 'id-2', tag: 'Poly', isOnLine: false, rank: 600 },
    { id: 'id-3', tag: 'Ajax', isOnLine: true, rank: 100 },
    { id: 'id-4', tag: 'Kiwi', isOnLine: true, rank: 400 },
];
const onlineAndSorted = players
    .filter(player => player.isOnLine)
    .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
console.table(onlineAndSorted);
//
//Ещё один пример
//оригинал
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
const updatedPlayers = players.map(function (player) {
    return {
        ...player, points: player.points + player.points * 0.1
    };
});
console.table(updatedPlayers);
const playerIdToUpdate = 'player-3';
const updated2Players = players.map(
    function (player) {
        if (player.id === playerIdToUpdate) {
            return {
                ...player,
                timePlayed: player.timePlayed + 50,
            };
        }
        return player;
    });
console.table(updated2Players);
//рефакт
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
const updatedPlayers = players.map(player => ({
    ...player, points: player.points + player.points * 0.1
}));
console.table(updatedPlayers);
const updated2Players = players.map(player =>
    player.id === playerIdToUpdate
        ?
        { ...player, timePlayed: player.timePlayed + 50 }
    : player,
    );
console.table(updated2Players);
 ////Не работает

