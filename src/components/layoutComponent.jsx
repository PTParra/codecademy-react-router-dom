import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"
import './layoutComponent.scss'


export const LayoutComponent = () => {

    return(
        <>
            <Header />

            <main className="main">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}