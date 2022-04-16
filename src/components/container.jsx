import React from "react";
import Header from "./header"; // 同フォルダ内からHeaderコンポーネントを呼び出す

const Container = ({children}) => {
  return(
    <div>
      <div className="container">
        <Header />
        <main className="main">{children}</main> {/* テンプレートとして呼び出した場合にchildren内に各ページ内容が入れ込まれる(後述) */}
      </div>
    </div>
  );
}

export default Container;
