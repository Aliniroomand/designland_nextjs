import {motion} from "framer-motion"

const animations={
    initial:{opacity:0 , x: 0 ,y:0},
    animate:{opacity:1 , x: 0 ,y:0},
    exit:{opacity : 0, x: 0,y:0},
}

const PagesTransition = ({children}) => {
    return (
        <motion.div variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration:0.3}}
        >
            {children}
        </motion.div>
    );
};

export default PagesTransition;