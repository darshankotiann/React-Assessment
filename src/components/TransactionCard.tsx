import { useNavigate } from "react-router-dom";

interface TransactionCardTypes {
    titleImgSrc:string,
    title:string,
    bankImgSrc:string,
    cardType:string,
    cardNumber:string,
    amount:string,
    profit:boolean,
    time:string
}
export default function TransactionCard({titleImgSrc,title,bankImgSrc,cardType,cardNumber,amount,profit,time}:TransactionCardTypes) {
    const navigate = useNavigate(); 
    return (
        <div className="transaction-container border-bottom bdr-gray-82 d-flex align-items-center justify-content-between py-2" onClick={()=>navigate("/transaction")}>
            <div className="d-flex align-items-center gap-4">
                <img src={titleImgSrc} height={40} width={40} alt="" />
                <div>
                    <div className="txt-light-black fs-6">{title}</div>
                    <div className="d-flex gap-2 align-items-center">
                        <img src={bankImgSrc} height={14} width={14} alt="" />
                        <div className="d-flex gap-1 align-items-center">
                            <div className="fs-7 txt-light-black">{cardType}-
                                <span>
                                    {cardNumber}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-end gap-1">
                <div className={`fs-6  fw-bold ${(profit)?'txt-success':'txt-failure'}`}>₹{amount}</div>
                <div className="fs-7 txt-light-black">{time}</div>
            </div>
        </div>
    )
}