# Naming Variables
## How to Create meaningful names
- do not use comments to explain why a variable is used 

```js
     var c; //counts the total even numbers

     //instead use following
     var evenCount;
```

## Avoid Disinformation
- be careful when using variable names that mean something specific.
- refering a group accounts as accountList would not be a good idea unless its actually a list.

 ```js
     var accountList = []; //avoid this

     //instead use following
     var accounts = [];
```


## Avoid Noise Words
- Avoids words that do not offer any additional infomration about that variable
- Instead of using bookData, use Book as a classname.

## Use Pronounceable Names
```js
const yyyymmdstr = moment().format("YYYY/MM/DD"); //avoid this

     //instead use following
const currentDate = moment().format("YYYY/MM/DD");
```

## Use Searchable Names
- use searchable named constants instead of just constants.

```js
 while( i < 10){} //avoid this

     //instead do the following
while( i < TOTAL_STUDENTS){}
```

# Write Functions?

## keep functions small
- Functions should be small, really small. They should rarely be 20 lines long. The longer a function gets, it is more likely it is to do multiple things and have side effects.

## Make Sure They Just Do One Thing
- Functions should do one thing. They should do it well. They should do it only. 

## Encapsulate Conditionals in Functions
- Refactoring the condition and putting it into a named function is a good way to make your conditionals more readable.

## Fewer Arguments
- Functions should have two or fewer arguments, the fewer the better. Avoid three or more arguments where possible.

## Avoid Passign boolean
- break the function into multiple functions if you really need to use boolean

## Avoid Side Effects
- Side effects are unintended consequences of your code. They may be changing the passed parameters, in case of passing by reference, or maybe changing a global variable.

## Dont Repeat
- Duplicate code means you need to change things in multiple places when there is a change in logic and it is very error prone.

# Classes
- classes should be small
- classes should have single responsiblity and only one reason to change.
- Use correctly package levels: public, protected, or package.

# test 
- tests should be fast
- tests should not depend on each other
- tests should be reproducible in any enviroment
- If you have the code covered by tests, you will not be afraid to modify it and break it.
