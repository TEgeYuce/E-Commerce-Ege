import GirisInfo from "../components/GirisInfo";
import MarkaLogolar from "../components/MarkaLogolar";
import ShopKartlar from "../components/ShopKartlar";
import ProductKartlar from "../components/ProductKartlar";
import OnecikanUrunler from "../components/OnecikanUrunler";
import Servisler from "../components/Servisler";
import OnecikanPostlar from "../components/OnecikanPostlar";

export default function HomePage() {
    return (
        <>
            <GirisInfo />
            <MarkaLogolar />
            <ShopKartlar />
            <ProductKartlar />
            <OnecikanUrunler />
            <Servisler />
            <OnecikanPostlar />
        </>
    );
}