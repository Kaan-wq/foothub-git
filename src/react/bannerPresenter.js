import BannerView from "../views/bannerView";

export default function Banner({model}){
    return <BannerView name={model.name}></BannerView>;

}