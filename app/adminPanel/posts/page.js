// components
import PostsList from "@/app/_components/adminPage/PostsList";



const postsPage = () => {
    return (
        <div className="flex items-center flex-col text-center w-full  h-full ">
                <h1 className="w-1/3 h-10 grid place-items-center bg-violet-700 text-violet-100 rounded-full ">+ افزودن پست</h1>
                <section className="w-full overflow-hidden h-full">
                    <PostsList/> 
                </section>

        </div>
    );
};

export default postsPage;