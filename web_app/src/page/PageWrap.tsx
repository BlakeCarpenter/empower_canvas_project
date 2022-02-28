import Navigation from '../navigation/Navigation';
import FullScreenLoader from '../utils/FullScreenLoader';

export default function PageWrap(){
    return <>
        <Navigation/>
        <FullScreenLoader loading={false}/>
    </>
}