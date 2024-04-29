// ================ TASK 37 ====================== && 
// && ================ TASK 38 ======================
// Потрібно створити компонент Layout
import Header from "./Header";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;