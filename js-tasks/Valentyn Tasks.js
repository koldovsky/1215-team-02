//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
    return num > 0 ? -num : num;
  }
  //https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
  function move (position, roll) {
    return 2 * roll+position
}
//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
    // Якщо ім'я співпадає з іменем власника, повертаємо 'Hello boss'
    if (name === owner) {
      return 'Hello boss';
    } else {
      // Інакше повертаємо 'Hello guest'
      return 'Hello guest';
    }
  }
  //https://www.codewars.com/kata/keep-hydrated-1/train/javascript
  function litres(time) {
    return Math.floor(time * 0.5);
  }
  //https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
  function lovefunc(flower1, flower2) {
    return (flower1 % 2 !== flower2 % 2);
  }