import AdminNavbar from "../_components/adminPage/AdminNavbar";

const Adminlayout = ({children}) => {
    return (
              <main className="bg-gradient-to-t from-teal-300 to-white h-[90vh] w-screen flex flex-col lg:flex-row gap-5 "  >
                <section className="w-full md:w-1/6">
                  <AdminNavbar/>
                </section>
                <section className="w-full md:w-5/6 h-[90vh]">
                  {children}
                </section>
              </main>
)};

export default Adminlayout;