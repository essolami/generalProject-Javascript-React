const Exercice4 = () => {
  const transactions = [
    { customer: 'John', amount: 75 },
    { customer: 'Jane', amount: 112.5 },
    { customer: 'Jim', amount: 75 },
    { customer: 'Jane', amount: 75 },
  ];

  function uniqueBy(array, property) {
    const unique = array.reduce((acc, item) => {
      if (!acc.find((o) => o[property] === item[property])) {
        acc.push({
          [property]: item[property],
        });
      }
      return acc;
    }, []);
    return unique;
  }

  console.log(uniqueBy(transactions, 'customer'));
  // Output:
  // [{ customer: "John" }, { customer: "Jane" }, { customer: "Jim" }]
};
export default Exercice4;
