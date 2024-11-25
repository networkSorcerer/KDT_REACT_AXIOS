import NewsList from "../component/NewsList";
import Categories from "../component/Categories";
import { useCallback, useState } from "react";
const News = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  //함수 정의: category를 받아서 setCategory를 호출하여 상태를 업데이트합니다.
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
};
export default News;
