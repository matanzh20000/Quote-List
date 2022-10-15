import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";

const QuotesId = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quotes ID Page</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </Fragment>
  );
};

export default QuotesId;
