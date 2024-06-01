import { useNavigate } from "react-router-dom";

const useFrom = (location) => {
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    return ()=>{navigate(from)};
};

export default useFrom;