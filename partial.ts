function partialUpdate<T>(original: T, update: Partial<T>): T {
    // Create a copy of the original object
    const updatedObject: T = { ...original };

    // Update the properties from the partial update object
    for (const key in update) {
        if (update.hasOwnProperty(key)) {
            updatedObject[key] = update[key];
        }
    }

    return updatedObject;
}

// Example usage:
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const update = {
    age: 31,
    city: "San Francisco"
};

const updatedPerson = partialUpdate(person, update);
console.log(updatedPerson); // Output: { name: "John", age: 31, city: "San Francisco" }
