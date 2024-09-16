import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/User/HomePage/HomePage";
import { ROUTERS } from "./utils/Router";
import MasterLayout from "./pages/User/Theme/MasterLayout/MasterLayout";

const renderUserRouuter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouter.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))}
            </Routes>
        </MasterLayout>
    )
};

const RouterCustom = () => {
    return renderUserRouuter();
}

export default RouterCustom;