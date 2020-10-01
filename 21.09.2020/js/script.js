
/* 2) Добавьте в прототип конструктора Array метод, 
      позволяющий поменять элементы массива местами по индексам. Метод изменяет исходный массив
var data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c] */

Array.prototype.swap = function(i, j) {
    this[this.length] = this[i];
    this[i] = this[j];
    this[j] = this[this.length-1];
    this.pop();
    return this;
};

let data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]


/* 3) В прототипном стиле напишите класс Warrior для создания игроков “файтинга”. 
Игроки должны иметь свойство health - которое определяет базовые боевые возможности 
игрока (выносливость), и power - сила удара. Оба свойства определяются при создании 
экземпляра класса. Также игрок должен иметь метод hit для нанесения удара другому игроку. 
При нанесении удара “жертва” теряет энергии (health) соответственно значению power игрока, 
который наносит удар. Также все игроки имеют возможность лечиться - метод heal.
Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и 
возможностями. И напишите пример боя, используя соответствующие методы и свойства. */

function Warrior(name, health,  power) {
    this.name = name || 'Jake';
    this.health = health;
    this.power = power;
}

Warrior.prototype.hit = function(player) {
    player.health = player.health - this.power;
    console.info(`Игрок ${this.name} нанес удар игроку ${player.name} в размере:`, `${this.power}`);
    console.info(`Сейчас здоровье ${player.name} составляет:`, player.health);

    if (player.health < (player.health * 0.3)) {
        this.power *= 2;
    }
}

Warrior.prototype.superHit = function(player) {
    let power = Math.floor(this.power * 1.5);
    player.health = player.health - power;
    console.info(`Игрок ${this.name} нанес cупер-удар игроку ${player.name} в размере:`, `${power}`);
    console.info(`Сейчас здоровье ${player.name} составляет:`, player.health);
}

Warrior.prototype.heal = function() {

    if (this.health <= 85) {
        this.health = this.health + 20;
        console.info(`Игрок ${this.name} исцелен на 20 едениц здоровья`);
    } else if (this.health <=50 ) {
        this.health = this.health + 35;
        console.info(`Игрок ${this.name} исцелен на 35 едениц здоровья`);
    }

    console.info(`После лечения здоровье игрока ${this.name} составляет:`, this.health);
}

function resultFight(player1, player2) {
    let result = '';

    if (player1.health <= 0) {
        result = console.info(`${player2.name} убил ${player1.name}`);
      } else if (player2.health <= 0) {
        result = console.info(`${player1.name} убил ${player2.name}`);
      } else if (player1.health > 0 && player2.health > 0){
        result = console.info('Ничья, все живы!');
      }
      return result;
    }

let player1 = new Warrior('Scorpion', 170, 20);
let player2 = new Warrior('Skarlet', 150, 25);


console.info(`Здоровье игрока ${player1.name} перед боем составляет:`, player1.health);
console.info(`Здоровье игрока ${player2.name} перед боем составляет:`, player2.health);

player1.hit(player2);

player2.hit(player1);
player2.hit(player1);
player1.hit(player2);
player2.superHit(player1);
player1.heal();
player1.superHit(player2);
player1.hit(player2);
player1.hit(player2);
player2.superHit(player1);
player1.superHit(player2);
player1.hit(player2);

console.info(`Здоровье ${player1.name} составляет`, player1.health);
console.info(`Здоровье ${player2.name} составляет`, player2.health);

resultFight(player1, player2);