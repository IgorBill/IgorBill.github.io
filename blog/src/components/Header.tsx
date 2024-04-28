// ================ TASK 37 ======================
//  Потрібно створити компонент Header

import PostTitle from "./PostTitle";
import PostMain from "./PostMain";

function Header () {
    return (
        <header>
            <PostTitle />
            <PostMain />
        </header>
    );
};

export default Header;