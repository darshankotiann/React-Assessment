import { ChevronLeft } from "lucide-react";
import TopBar from "../../layouts/TopBar";
import BankCard from "../../components/BankCard";
import DonutChart from "../../components/DonutChart";
import { useNavigate } from "react-router-dom"; 


export default function AssetDetailPage() {
    const navigate = useNavigate(); 

    return (
        <div className="bg-gray-5 position-relative vh-100">
            <TopBar profileTag={<ChevronLeft size={18} onClick={()=>navigate(-1)}/>} title="Asset Allocation" />

            <div className="px-3 bg-gray-5">
                <div className="rounded-4 p-4 bg-white d-flex flex-column gap-2 align-items-center mb-4">
                    <DonutChart />
                </div>
                <div className="rounded-4 bg-white mb-4">
                    <div className=" d-flex flex-column">
                        <div className="fs-5-sm fw-bolder txt-dark-blue px-3 pt-3">
                            Banks
                        </div>
                        <div className="d-flex flex-column gap-1 p-3">
                            <BankCard bankImgSrc="/assets/svg/hdfc.svg" bankName="HDFC Bank" cardNumber="0123456789" amount="5k" profit={false} totalAmount="20.5k" />
                            <BankCard bankImgSrc="/assets/svg/hdfc.svg" bankName="HDFC Bank" cardNumber="0123456789" amount="5k" profit={true} totalAmount="20.5k" />
                            <BankCard bankImgSrc="/assets/svg/hdfc.svg" bankName="HDFC Bank" cardNumber="0123456789" amount="5k" profit={true} totalAmount="20.5k" />
                            <BankCard bankImgSrc="/assets/svg/hdfc.svg" bankName="HDFC Bank" cardNumber="0123456789" amount="5k" profit={false} totalAmount="20.5k" />
                        </div>
                    </div>
                    <div className="bg-dark-blue rounded-bottom-4 text-white d-flex justify-content-between w-100 py-2 px-3">
                        <div className="fs-6 ">Total Balance :</div>
                        <div className="fs-6 ">₹10,500</div>
                    </div>
                </div>
                <div className="rounded-4 bg-white mb-5">
                    <div className=" d-flex flex-column">
                        <div className="fs-5-sm fw-bolder txt-dark-blue px-3 pt-3">
                            Investments
                        </div>
                        <div className="d-flex flex-column gap-1 p-3">
                            <BankCard bankImgSrc="/assets/svg/hdfc.svg" bankName="HDFC Bank" cardNumber="0123456789" amount="5k" profit={false} totalAmount="20.5k" />
                            <BankCard bankImgSrc="/assets/svg/hdfc.svg" bankName="HDFC Bank" cardNumber="0123456789" amount="5k" profit={true} totalAmount="20.5k" />
                            <BankCard bankImgSrc="/assets/svg/hdfc.svg" bankName="HDFC Bank" cardNumber="0123456789" amount="5k" profit={false} totalAmount="20.5k" />
                            <BankCard bankImgSrc="/assets/svg/hdfc.svg" bankName="HDFC Bank" cardNumber="0123456789" amount="5k" profit={true} totalAmount="20.5k" />
                        </div>
                    </div>
                    <div className="bg-dark-blue rounded-bottom-4 text-white d-flex justify-content-between w-100 py-2 px-3">
                    <div className="fs-6 ">Total Balance :</div>
                    <div className="fs-6 ">₹10,500</div>
                    </div>
                </div>
            </div>
        </div>
    )
}