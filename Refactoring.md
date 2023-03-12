# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here


Initially, the constants that determined the trivial and maximum partition keys were removed. I did the initial validation on the data entry, where the types: null, empty, and undefined are already returned as soon as the function starts. Validation of input data type has been done in several steps and has been simplified. Now, initially, we validate if the input value is an object, and if so, we apply the function; "JSON.simplify" straight to this one, where the opposite of this condition is turned into a string. After this step, we check if the candidate variable is of type string, just to guarantee its data, otherwise, the same "JSON.simplify" function is applied to it. After treating the data, where we ensure that all types of inputs have been handled, we create the hash based on that input data and send it back. As for the tests, the types of inputs and their returns were tested, and these tests were initially done with "invalid" data types and then with string and valid objects, verifying the consistency and effectiveness of the function.