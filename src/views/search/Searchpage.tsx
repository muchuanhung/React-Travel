import styles from "./SearchPage.module.css";
import React, { useEffect } from "react";
import { Header, Footer, FilterArea, ProductList } from "../../components";
import { useParams, useLocation } from "react-router-dom";
import { Spin } from "antd";
import { searchProduct } from "../../redux/productSearch/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { MainLayout } from "../../layouts/mainLayout";

interface MatchParams {
  keywords: string;
}

export const SearchPage: React.FC = () => {
  const { keywords } = useParams<MatchParams>();
  // @ts-ignore：无法被执行的代码的错误
  const loading = useSelector((state) => state.productSearch.loading);
  // @ts-ignore：无法被执行的代码的错误
  const error = useSelector((s) => s.productSearch.error);
  // @ts-ignore：无法被执行的代码的错误
  const pagination = useSelector((s) => s.productSearch.pagination);
  // @ts-ignore：无法被执行的代码的错误
  const productList = useSelector((s) => s.productSearch.data);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(()=>{
    // @ts-ignore：无法被执行的代码的错误
    dispatch(searchProduct({nextPage:1, pageSize: 10, keywords}))
  },[location])

  const onPageChange = (nextPage, pageSize) =>{
    // @ts-ignore：无法被执行的代码的错误
    dispatch(searchProduct({nextPage, pageSize, keywords}))
  }

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          margin: "200 auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>網站錯誤：{error}</div>;
  }
  
  return (
    <MainLayout>
      {/* 分类过滤器 */}
      <div className={styles["product-list-container"]}>
        <FilterArea />
      </div>
      {/* 产品列表  */}
      <div className={styles["product-list-container"]}>
        <ProductList
          data={productList}
          paging={pagination}
          onPageChange={onPageChange}
        />
      </div>
    </MainLayout>
  );
};
