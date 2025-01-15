import { ChevronDown, ChevronUp } from "lucide-react"
import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"; 
interface AssestCardTypes {
    mainIcon: ReactNode
    title:string
    amount:string
    profitAmount:string
    profit:boolean
}
export default function AssetCard({mainIcon,title,amount,profitAmount,profit}:AssestCardTypes) {
    const navigate = useNavigate(); 
    return <>
        <div className="rounded-4 border bdr-gray-10 d-flex align-items-center gap-2 p-2" style={{ flex: "1 1 calc(50% - 12px)" }} onClick={()=>navigate("/assest")}>
            {mainIcon}
            <div className="d-flex flex-column align-items-start gap-1">
                <div className="fs-6-sm txt-light-black">{title}</div>
                <div className="text-black fs-6 fw-bold lh-1">₹{amount}</div>
                <div className="d-flex align-items-center gap-1">
                    {(profit)? <ChevronUp size={12} className="txt-success" />: <ChevronDown size={12} className="txt-failure" /> }
                    <div className={`${(profit)?"txt-success":"txt-failure"} fw-bold fs-8`}>₹{profitAmount}</div>
                </div>
            </div>
        </div>
    </>
}