import GirisInfo from "../components/homepage/GirisInfo";
import MarkaLogolar from "../components/sharedcomp/MarkaLogolar";
import HomeShopKartlar from "../components/homepage/HomeShopKartlar";
import ProductKartlar from "../components/homepage/ProductKartlar";
import OnecikanUrunler from "../components/homepage/OnecikanUrunler";
import Servisler from "../components/homepage/Servisler";
import OnecikanPostlar from "../components/homepage/OnecikanPostlar";

export default function HomePage() {
    return (
        <>
            <GirisInfo />
            <MarkaLogolar />
            <HomeShopKartlar />
            <ProductKartlar />
            <OnecikanUrunler />
            <Servisler />
            <OnecikanPostlar />
        </>
    );
}