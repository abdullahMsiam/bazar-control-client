
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full max-h-[400px]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/gradient-supermarket-twitch-banner_23-2149387927.jpg?t=st=1718365564~exp=1718369164~hmac=491e05a50457ef9ab711754729f0d756f9f6d9bf083802087f1cee212c89461b&w=1380" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/flat-design-supermarket-facebook-cover-template_23-2150330746.jpg?t=st=1718365615~exp=1718369215~hmac=61cfedff1d1f722823228c033181d318da1072f13282093e6b5b4fb2ed8fb794&w=1380" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/gradient-supermarket-twitch-banner_23-2149387927.jpg?t=st=1718365564~exp=1718369164~hmac=491e05a50457ef9ab711754729f0d756f9f6d9bf083802087f1cee212c89461b&w=1380" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-vector/flat-design-supermarket-facebook-cover-template_23-2150330746.jpg?t=st=1718365615~exp=1718369215~hmac=61cfedff1d1f722823228c033181d318da1072f13282093e6b5b4fb2ed8fb794&w=1380" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;