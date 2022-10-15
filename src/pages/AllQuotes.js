import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Matan", text: "Learning react is fun!" },
  { id: "q2", author: "Zhivotovsky", text: "Learning react is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;
