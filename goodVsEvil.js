/*
TITLE: 
  Good vs Evil

NOTE: 
  Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races 
  will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have 
  the following races, with their associated worth:

INSTRUCTIONS: 
  The function will be given two parameters. Each parameter will be a string separated by a single space. 

  Each string will contain the count of each race on the side of good and evil.

  The first parameter will contain the count of each race on the side of good in the following order:
  Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

  The second parameter will contain the count of each race on the side of evil in the following order:
  Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

  All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 
  32-bit integer.

  On the good side we have:
  Hobbits: 1
  Men: 2
  Elves: 3
  Dwarves: 3
  Eagles: 4
  Wizards: 10

  On the side of evil we have:
  Orcs: 1
  Men: 2
  Wargs: 2
  Goblins: 2
  Uruk Hai: 3
  Trolls: 5
  Wizards: 10

LINK:
  https://www.codewars.com/kata/52761ee4cffbc69732000738
*/

const goodVsEvil = (good, evil) => {
  const goodTeam = good.split(" ");
  const evilTeam = evil.split(" ");

  const GOOD_POINTS = [1, 2, 3, 4, 4, 10];

  const EVIL_POINTS = [1, 2, 2, 2, 3, 5, 10];

  const goodPoints = goodTeam.reduce(
    (acc, char, i) => acc + char * GOOD_POINTS[i],
    0
  );

  const evilPoints = evilTeam.reduce(
    (acc, char, i) => acc + char * EVIL_POINTS[i],
    0
  );

  if (goodPoints > evilPoints) return "Good should win";
  if (goodPoints < evilPoints) return "Evil should win";
  return "Should be a tie";
};

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
// => 'Battle Result: Evil eradicates all trace of Good', 'Evil should win']
console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
// => 'Battle Result: Good triumphs over Evil', 'Good should win'
console.log(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0"));
// => 'Battle Result: No victor on this battle field', 'Should be a tie'
