const Exercice3 = () => {
  const transactions = [
    { customer: 'John', amount: 75 },
    { customer: 'Jane', amount: 112.5 },
    { customer: 'Jim', amount: 75 },
    { customer: 'Jane', amount: 75 },
  ];

  function sumBy(array, property) {
    const sumBy = array.reduce((acc, item) => {
      const value = item[property];
      if (!acc[value]) {
        acc[value] = 0;
      }
      acc[value] = acc[value] + item.amount;
      return acc;
    }, {});
    return sumBy;
  }

  console.log(sumBy(transactions, 'customer'));
  // Output:
  // { John: 75, Jane: 187.5, Jim: 75 }
};
export default Exercice3;
