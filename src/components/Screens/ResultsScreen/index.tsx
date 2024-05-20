import React from "react";
import { selectQuery } from "../../../store/app/NavigationManagement/querySlice";
import { useSelector } from "react-redux";
const ResultsScreen: React.FC = () => {
  const query = useSelector(selectQuery);

  return (
    <div>
      <h1>Results for: {query}</h1>
    </div>
  );
};

export default ResultsScreen;
