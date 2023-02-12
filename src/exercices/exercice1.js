const ExerciceReduce = () => {
  // Given an array of objects, where each object represents a transaction made by a customer,
  // write a function to calculate the average amount spent by each customer.

  const transactions = [
    { customer: 'John', amount: 100 },
    { customer: 'Jane', amount: 200 },
    { customer: 'John', amount: 50 },
    { customer: 'Jim', amount: 75 },
    { customer: 'Jane', amount: 25 },
  ];

  function averageAmountSpentByCustomer(transactions) {
    const Amount = transactions.reduce((acc, transaction) => {
      const { customer, amount } = transaction;
      if (!acc[customer]) {
        acc[customer] = {
          totalAmount: 0,
          count: 0,
          average: 0,
          customer: '',
        };
      }
      acc[customer].customer = customer;
      acc[customer].totalAmount += amount;
      acc[customer].count += 1;
      acc[customer].average = acc[customer].totalAmount / acc[customer].count;
      return acc;
    }, {});
    return Object.values(Amount).reduce((acc, curr) => {
      acc[curr.customer] = curr.average;
      return acc;
    }, {});
  }
  console.log(averageAmountSpentByCustomer(transactions));
};

export default ExerciceReduce;
