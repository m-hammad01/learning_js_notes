# Operators
- ## OR
- ## AND
- ## XOR:
    - The ^ operator returns 1 only in the specific case in which we compare 1 to 0.

## Shifting Operators
- ### << Operator
    - shifts the bits toward left and all the empty spaces that occur while shifting will be filled by 0s.
- ### >> Operator
    - shifts the bits toward right and the spaces will be filled by 0s if the number is positive and with 1s if the number is negative.
    - first bit of a number usually represents its sign. 1 for negative and 0 for positive

## Bit manipulation
- ### set any specific bit to 1 or 0?
    - use masking. Masks are numbers in binary form where we have only the bit that we want to modify set to 1 or 0 depending on what we want to achieve. 
    - Let’s look at how we can clear a bit — set it to 0. we will have a mask full of 1s and have a 0 only at the position where we want to clear. Then we use the & operator which will set only the required position to 0.
- ### How to flip the bits?
    - XOR is used in this case because using it with 1 on one is guaranteed to flip the value of the bit.
