import AdminNavbar from "../_components/adminPage/AdminNavbar";

const Adminlayout = ({children}) => {
    return (
              <main className=" bg-teal-100 h-[90svh] w-screen"  >
                <AdminNavbar/>
              {children}
              </main>
)};

export default Adminlayout;