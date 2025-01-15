import { ArrowUpDown, BadgeIndianRupee, BookOpenText, Bot, ChartNoAxesCombined, ChevronDown, ChevronRight, CirclePlus, Dot, Eye, FilePenLine, HandCoins, House, IndianRupee, Info, Landmark, ShieldPlus, Users } from "lucide-react";
import TopBar from "../../layouts/TopBar";
import AssetCard from "../../components/AssetCard";
import TransactionCard from "../../components/TransactionCard";
import AreaChart from "../../components/AreaChart";

export default function Dashboard() {
    return (
        <div className="bg-gray-5  position-relative">
            <TopBar profileTag="DK" firstIcon={<ArrowUpDown size={16} />} secondIcon={<Bot size={16} />}  isHomePage={true}/>
            <div className="px-3 bg-gray-5">
                <div className="rounded-4 bg-white d-flex flex-column gap-2 py-2 px-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="fs-5-sm text-black fw-semibold">
                            My Networth
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <Eye size={20} className="txt-gray-68" />
                            <FilePenLine size={20} />
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="fw-bold txt-dark-blue fs-1">

                            ₹ 1,23,55,059  <span className="txt-gray-36"><Info size={12} /></span>
                        </div>

                        <div className="d-flex align-items-center gap-1">
                            <ChartNoAxesCombined size={20} className="txt-success" />
                            <div className="txt-success fw-bolder fs-6-sm">
                                ₹ 50L
                            </div>
                        </div>
                    </div>
                </div>
                <AreaChart/>
                <div className="rounded-4 border border-2 bg-white bdr-dark-blue d-flex align-items-center justify-content-between p-3 gap-2 mb-4">
                    <div className="d-flex align-items-center gap-2">
                        <BookOpenText size={24} />
                        <div className="text-black fs-7">
                            Let’s check your  <span className="txt-dark-blue fw-bold">Financial </span>
                            <span className="txt-dark-blue fw-bold">Insight</span> for the month of December!
                        </div>
                    </div>
                    <ChevronRight size={20} className={"txt-gray-36"} strokeWidth={2.25} />
                </div>
                <div className="rounded-4 bg-white p-3 mb-4">
                    <div className=" d-flex align-items-center justify-content-between mb-2">
                        <div className="fs-5-sm fw-bolder txt-dark-blue">
                            Assets
                        </div>
                        <div className="fs-7 fw-bold txt-dark-blue">
                            See All
                        </div>
                    </div>
                    <div className="d-flex flex-wrap gap-3 mb-3">
                        <AssetCard mainIcon={<Landmark className="txt-light-green" size={20} />} title="Bank" amount="10.5k" profitAmount="5.3K" profit={false} />
                        <AssetCard mainIcon={<ChartNoAxesCombined className="txt-yellow" size={20} />} title="Investments" amount="10.5k" profitAmount="5.3K" profit={true} />
                        <AssetCard mainIcon={<ShieldPlus className="txt-dark-green" size={20} />} title="Investments" amount="10.5k" profitAmount="5.3K" profit={true} />
                        <AssetCard mainIcon={<HandCoins className="txt-dark-yellow" size={20} />} title="Personal" amount="10.5k" profitAmount="5.3K" profit={true} />
                    </div>
                    <button type="button" className="btn btn-dark-blue-light d-flex align-items-center gap-1 mx-auto">
                        <CirclePlus size={20} /> Add New
                    </button>
                </div>
                <div className="rounded-4 bg-white p-3 mb-5">
                    <div className=" d-flex align-items-center justify-content-between">
                        <div className="fs-5-sm fw-bolder txt-dark-blue">
                            Recent Transactions
                        </div>
                        <div className="fs-7 fw-bold txt-dark-blue">
                            See All
                        </div>
                    </div>
                    <div className="txt-gray-68 fs-7 fw-bold">Today</div>
                    <div className="d-flex flex-column gap-1">
                        <TransactionCard titleImgSrc="/assets/svg/shopping-bag.svg" title="Myntra" bankImgSrc="/assets/svg/icici.svg" cardType="Visa Card" cardNumber="00976" amount="10.35k" profit={false} time="11:10 am" />
                        <TransactionCard titleImgSrc="/assets/svg/shopping-bag.svg" title="Salary" bankImgSrc="/assets/svg/baroda.svg" cardType="Visa Card" cardNumber="00976" amount="10.35k" profit={true} time="11:10 am" />
                    </div>
                </div>
            </div>
            <div className="rounded-top-4 btn-nav bg-white d-flex align-items-center gap-3 position-sticky bottom-0 left-0 right-0 p-2 shadow-sm">
                <button className="btn btn-dark-blue-light d-flex flex-column align-items-center gap-1 rounded-3 fs-8 flex-grow-1 py-1">
                    <House size={20} />
                    Dashboard
                </button>
                <button className="btn btn-dark-blue-light d-flex flex-column align-items-center gap-1 rounded-3 fs-8 flex-grow-1 py-1">
                    <ChartNoAxesCombined size={20} />
                    Insights
                </button>
                <button className="btn btn-dark-blue-light d-flex flex-column align-items-center gap-1 rounded-3 fs-8 flex-grow-1 py-1">
                    <BadgeIndianRupee size={20} />
                    Cashflow
                </button>
            </div>
        </div>
    )

}