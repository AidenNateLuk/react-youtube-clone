import React from "react";
import { useParams } from "react-router-dom";

interface ResultsScreenProps {}

const ResultsScreen: React.FC<ResultsScreenProps> = () => {
  const { query } = useParams<{ query: string }>();

  return (
    <div>
      <h1>Results for: {query}</h1>
      {/* Render results here */}
    </div>
  );
};

export default ResultsScreen;
