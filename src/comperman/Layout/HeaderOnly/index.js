import Header from '~/comperman/Layout/components/Header';
import Phancuoi from '../DefaultLayout/Phancuoi';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="context">{children}</div>
            </div>
            <Phancuoi />
        </div>
    );
}

export default DefaultLayout;
