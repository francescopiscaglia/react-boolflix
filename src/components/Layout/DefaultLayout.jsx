import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader";
import AppFooter from "../AddFooter";

export default function DefaultLayout() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}