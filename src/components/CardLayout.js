import { TMDB_IMAGE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerData, addTrailerType } from "../redux/movieSlice";
import { db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

const CardLayout = ({ heading, listData, type }) => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const switchTrailer = (item) => {
        dispatch(addTrailerData(item));
        dispatch(addTrailerType(type));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSave = async (e, item) => {
        e.stopPropagation(); // Prevents the trailer from opening
        if (!user) return alert("Sign in to Orizon to save!");
        
        try {
            const itemRef = doc(db, "users", user.uid, "myList", item.id.toString());
            await setDoc(itemRef, {
                id: item.id,
                title: item.title || item.name,
                poster: item.poster_path,
                category: type === "m" ? "Movie" : "Series",
                addedAt: Date.now()
            });
            alert("Saved to Orizon List!");
        } catch (error) {
            console.error("Save error:", error);
        }
    };

    return (
        <div className="text-white my-5 md:my-8">
            <p className="text-lg md:text-xl 2xl:text-3xl font-bold my-4">{heading}</p>
            <div id="carousel" className="flex overflow-x-auto no-scrollbar space-x-4 snap-x snap-mandatory scroll-smooth items-center">
                {listData?.map((item) =>
                    <div
                        key={item.id}
                        id={item.id}
                        style={{ backgroundImage: `url(${TMDB_IMAGE_URL(item.poster_path)})` }}
                        className="group relative flex-shrink-0 h-64 md:h-80 xl:h-64 2xl:h-80 my-2 md:my-8 aspect-[2/3] bg-center bg-cover rounded-lg snap-start cursor-pointer active:border-2 active:border-white xl:active:border-0 xl:hover:h-72 2xl:hover:h-96 md:hover:my-0 md:hover:shadow-lg transition-all"
                        onClick={() => switchTrailer(item)}>
                        
                        {/* Orizon Orange Save Button */}
                        <button 
                            onClick={(e) => handleSave(e, item)}
                            className="absolute top-2 right-2 bg-orange-600 hover:bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            ＋
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardLayout;
        
