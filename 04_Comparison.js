// Basic numeric comparisons
console.log(2 > 1);         // true
console.log(2 <= 1);        // false
console.log(2 == 1);        // false
console.log(2 >= 2);        // true

// String-to-number coercion in comparisons
console.log("2" > 1);       // true  - "2" → 2
console.log(1 < "02");      // true  - "02" → 2
console.log(1 == "02");     // false - "02" → 2, but 1 != 2

// == vs comparison operators ( Javascript there is difference btw the == and <=,<,> etc)
// In ==, null is null and 0 is 0 no coercion occurs
console.log(null == 0);     // false - no coercion to number
console.log(null >= 0);     // true  - null → 0, numeric comparison
console.log(null >= "0");   // true  - null → 0, "0" → 0 → 0 >= 0

// Boolean vs string coercion in equality
console.log(false == "0");  // true  - false → 0, "0" → 0
console.log(true == 1);     // true  - true → 1

// undefined in equality and comparisons
console.log(undefined == 0);   // false - no coercion to number
console.log(undefined >= 0);   // false - undefined → NaN
console.log(undefined < "0");  // false - undefined → NaN, "0" → 0

// Strict equality (===) checks both value and type
console.log("2" === 2);     // false - string !== number
