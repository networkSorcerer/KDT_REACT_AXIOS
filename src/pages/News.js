import NewsList from "../component/NewsList";
import Categories from "../component/Categories";
import { useState } from "react";
const News = () => {
  const [category, setCategory] = useState("all");
  const onSelect = (category) => setCategory(category);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList />;
    </>
  );
};
export default News;
