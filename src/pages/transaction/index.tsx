import { ChevronLeft, Download, ListFilter } from "lucide-react";
import TopBar from "../../layouts/TopBar";
import TransactionCard from "../../components/TransactionCard";
import DonutChart from "../../components/DonutChart";
import { useNavigate } from "react-router-dom"; 

export default function TransactionPage() {
    const navigate = useNavigate(); 
    return (<>
        <div className="bg-gray-5 position-relative vh-100">
            <TopBar profileTag={<ChevronLeft size={18} onClick={()=>navigate(-1)} />} title="Trasactions" secondIcon={<Download size={20} />} />
            <div className="px-3 bg-gray-5">
                <div className="rounded-4 bg-white mb-4">
                    <select className="form-select  border-0" aria-label="Default select example">
                        <option selected>Last 30 days</option>
                        <option value="1">Last Month</option>
                        <option value="2">Last 3 months</option>
                    </select>
                </div>
                <div className="rounded-4 p-4 bg-white d-flex flex-column gap-2 align-items-center mb-4">
                    <DonutChart />
                </div>
                <div className="rounded-4 bg-white p-3 mb-5">
                    <div className=" d-flex align-items-center justify-content-between">
                        <div className="fs-5 fw-bolder txt-dark-blue">
                            Transactions
                        </div>
                        <div className="fs-7 fw-bold txt-dark-blue">
                            <ListFilter size={16} className="txt-gray-68" />
                        </div>
                    </div>
                    <div className="txt-gray-68 fs-7 fw-bold">Today</div>
                    <div className="d-flex flex-column gap-1">
                        <TransactionCard titleImgSrc="/assets/svg/shopping-bag.svg" title="Myntra" bankImgSrc="/assets/svg/icici.svg" cardType="Visa Card" cardNumber="00976" amount="10.35k" profit={false} time="11:10 am" />
                        <TransactionCard titleImgSrc="/assets/svg/shopping-bag.svg" title="Salary" bankImgSrc="/assets/svg/baroda.svg" cardType="Visa Card" cardNumber="00976" amount="10.35k" profit={true} time="11:10 am" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}