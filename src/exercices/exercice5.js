export const Exercice5 = () => {
  const data = [
    {
      name: 'John',
      age: 35,
      hobbies: ['reading', 'jogging', 'traveling'],
    },
    {
      name: 'Jane',
      age: 30,
      hobbies: ['painting', 'reading', 'traveling'],
    },
    {
      name: 'Jim',
      age: 25,
      hobbies: ['programming', 'gaming'],
    },
  ];

  // 1. Write a function that calculates the average age of all the people in the `data` array.

  const averageAge = (arr) => {
    const ageSum = arr.reduce((acc, person) => {
      return (acc += person.age);
    }, 0);
    return ageSum / arr.length;
  };

  console.log(averageAge(data));

  // 2. Write a function that creates a new array of all the unique hobbies in the `data` array.
  const uniqueHobby = (arr) => {
    return arr.reduce((acc, person) => {
      person.hobbies.map((item) => {
        if (!acc.includes(item)) {
          acc.push(item);
        }
      });
      return acc;
    }, []);
  };

  console.log(uniqueHobby(data));

  // 3. Write a function that creates a new array of all the names of the people who have a specific hobby. For example, the function should be able to return all the names of people who enjoy 'reading'.

  const specificHobby = (arr,hobby) => {
    return arr.reduce((acc, person) => {
        if(person.hobbies.includes(hobby)){
          acc.push(person.name)
        }
        return acc;
    }, []);
  };

  console.log(specificHobby(data,'gaming'));


  // 4. Write a function that returns an object with the hobbies as the keys and the number of people who enjoy each hobby as the values. For example, the function should be able to return the following object:
  // {
  //   'reading': 2,
  //   'jogging': 1,
  //   'traveling': 2,
  //   'painting': 1,
  //   'programming': 1,
  //   'gaming': 1
  // }
  const sumHobby = (arr) => {
    return arr.reduce((acc, person) => {
        person.hobbies.map(item=>{
          if(!acc[item]){
            acc[item] = 0;
          }
          acc[item] += 1;
        })
        return acc;
    }, {});
  };

  console.log(sumHobby(data));
};


