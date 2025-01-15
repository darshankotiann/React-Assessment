import { ChevronDown, ChevronUp } from "lucide-react";

interface TransactionCardTypes {
    bankImgSrc: string;
    bankName: string;
    cardNumber: string;
    amount: string;
    profit: boolean;
    totalAmount: string;
}

export default function BankCard({ bankImgSrc, bankName, cardNumber, amount, profit, totalAmount }: TransactionCardTypes) {

    return (
        <div
            className="border-bottom bdr-gray-82 d-flex align-items-center justify-content-between py-2 cursor-pointer"
        >
            <div className="d-flex align-items-center gap-2">
                <img src={bankImgSrc} height={40} width={40} alt="" />
                <div>
                    <div className="txt-light-black fs-6">{bankName}</div>
                    <div className="fs-7 txt-light-black">{cardNumber}</div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-end gap-1">
                <div className="fs-6 fw-bold txt-light-black">₹{totalAmount}</div>
                <div className="d-flex gap-1 align-items-center">
                    {profit ? (
                        <ChevronUp size={12} className="txt-success" />
                    ) : (
                        <ChevronDown size={12} className="txt-failure" />
                    )}
                    <div className={`fs-7 fw-bold ${profit ? "txt-success" : "txt-failure"}`}>
                        ₹{amount}
                    </div>
                </div>
            </div>
        </div>
    );
}
