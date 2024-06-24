export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };
  const titles = {
    firstTitle: ', it was the seventh-highest income county in the United States, with a per capita personal income of ',
    secondTitle: '. As of 2015, San Francisco proper had a GDP of ',
  };

  return `As of ${year}${titles.firstTitle}${budget.income}${titles.secondTitle}${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
