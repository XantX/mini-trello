import BoardForm from "@component/boardForm";
import Header from "@component/header";
import { Outlet } from "react-router-dom";

function MainPage() {

  return (
    <>
      <Header></Header>
      <BoardForm></BoardForm>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainPage;
