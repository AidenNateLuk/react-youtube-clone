import React from "react";
import { useParams } from "react-router-dom";

const ResultsScreen: React.FC = () => {
  // Extract the query parameter from the route
  const { query } = useParams();
  // Use the query to fetch search results or perform any other actions
  return (
    <div>
      <h1>Results for: {query}</h1>
      {/* Display search results here */}
    </div>
  );
};

export default ResultsScreen;
