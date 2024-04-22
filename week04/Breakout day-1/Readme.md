# Week 4 Day 1 Breakout

## Topics

- Loops
- Strings

### Objectives: Students will be able to

- Create a loop
- Access a character in a string by its index
- return a value from a function

### Info you'll need: Strings

- Strings have an index for every character
- You can access a specific letter by its index: stingName[index]

```
 let string = "cat"
 string[0]
 // will return 'c'
 string[1]
 //will return 'a'
 string[2]
 //will return 't'
```

-String.length will return the length of the string.

```
  "cat".length
  //Will return 3
```

### Deliverables

1. Create a loop that will count the letters in a string until you see a duplicate letter.

- Start by assuming the duplicate letter will be the same as the letter that came before
- abcdefgghijk -> 6 letters before duplicate

2. Optional Stretch Goal: update your function to detect the first duplicate regardless of the order.

- 'zifzlh' should output 3
