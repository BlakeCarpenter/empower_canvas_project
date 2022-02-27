import Spinner from "react-bootstrap/Spinner";

interface FullScreenLoaderProps {
    loading:boolean;
}

export default function FullScreenLoader(props:FullScreenLoaderProps){
    const {loading} = props;
    
    return loading ? <div className="fullScreenLoaderWrapper">
        <Spinner className="fullScreenLoader" animation="border"/>
    </div> : null;
}