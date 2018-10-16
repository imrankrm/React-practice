import * as React from "react";

import Footer from "./Footer";
import Menu from "./Menu";

interface ILayoutProps  {
    children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) =>
    <div>
        <Menu />
        <div>
            { children }
        </div>
        <div>
            <Footer />
        </div>
    </div>

export default Layout;