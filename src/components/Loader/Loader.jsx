import { RotatingLines } from 'react-loader-spinner';
import Loaderscss from './Loader.module.scss';


export const Loader = () => {
    return (
        <div className={Loaderscss.loader}>
            <RotatingLines
                strokeColor="white"
                strokeWidth="4"
                animationDuration="1"
                width="50"
                visible={true}
            />
        </div>
    );
};