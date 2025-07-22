SUMMARY:
Array is written in brackets [].

Array data type is an object.

Array can contain different data types i.e. string, number, boolean, array etc.

Array is zero-based indexing. It starts with zero.

Once changed, its original value will also change because it is non-primitive (reference) type.

ARRAY METHODS:
push = adds value to last of an array.

pop = removes last value of an array.

unshift = adds value at first of an array. It is not recommended because it changes all the addresses.

shift = removes first value of an array.

includes = checks true or false.

indexOf = checks the position of value in number form. If not, it gives -1.

join = converts to string based on parameter passed.

slice(1,3) = it doesn't include the 3rd index, returns new array, and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.

splice(1,3) = it also includes value at 3rd index, returns new array with deleted one, and original value is changed. Use when you need to add, remove, or replace elements within an array.

array.push(newArray) = this will give us array inside another array.

array.concat(newArray) = it will give us single array but we have to create new variable, therefore we use spread operator [...array, ...newArray, ...anotherArray].

Spread operator ( ... ) = used to merge two or more arrays and objects.

array.flat(infinity or depth like 2 , 3 ) = this method is used when we have other array inside an array this will return single array we give it depth or write infinity.

Array.isArray("Mutee") = Checks if value is an array (returns true/false).

Array.from("Mutee") = Converts string to array of characters.

Array.from({name: "Mutee"}) = Returns [] because object needs keys/values explicitly.

Array.of(n1, n2, n3) = Creates a new array from the given values.
