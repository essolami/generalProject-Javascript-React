const Exercice2 = () => {
  // Write a function that takes an array of objects and returns an object that groups the objects by a property. For example, given an array of transactions, the function should return an object that groups the transactions by customer.

  // Output:
  // {
  //   John: [{ customer: "John", amount: 75 }],
  //   Jane: [
  //     { customer: "Jane", amount: 112.5 },
  //     { customer: "Jane", amount: 75 }
  //   ],
  //   Jim: [{ customer: "Jim", amount: 75 }]
  // }

  const transactions = [
    { customer: 'John', amount: 75 },
    { customer: 'Jane', amount: 112.5 },
    { customer: 'Jim', amount: 75 },
    { customer: 'Jane', amount: 75 },
    { customer: 'Jane', amount: 129 },
    { customer: 'lol', amount: 129 },
  ];

  function groupBy(array, property) {
    const groupBy = array.reduce((acc, curr) => {
      const value = curr[property];
      if (!acc[value]) {
        acc[value] = [];
      }
      acc[value].push(curr);
      return acc;
    }, {});
    return groupBy;
  }

  console.log(groupBy(transactions, 'customer'));
};
export default Exercice2;
