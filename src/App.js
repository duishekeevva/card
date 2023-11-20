import Image from "./components/Image";
import Content from "./components/Content";
import Reviews from "./components/Reviews";
import Price from "./components/Price";

const App = () => {
    return (
        <div className={'row'}>
            <div className={'col-6'}>
                <div className={'card'}>
                    <div>
                        <Image/>
                    </div>
                    <div>
                        <Content/>
                        <Price/>
                        <div className={'reviews'}>
                            <Reviews/>
                            <Reviews/>
                            <Reviews/>
                            <Reviews/>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default App;