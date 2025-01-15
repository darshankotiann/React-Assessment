import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const input = e.target;
        if (input.value.length === 1) {
            const nextSibling = input.nextElementSibling as HTMLInputElement | null;
            if (nextSibling) {
                nextSibling.focus();
            }
        }
    };
    return <div className="vh-100">
        <ChevronLeft size={18} />
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 gap-4 px-3">
            <div className="d-flex flex-column align-items-start w-100 section">
                <div className="txt-dark-blue fs-1 fw-bold lh-1 text-center mb-1">OTP Verification</div>
                <div className="fw-normal fs-6 txt-gray-68 text-center">
                    Enter the received OTP to proceed.
                </div>
            </div>
            <div className="d-flex flex-column w-100 section">
                <div className="text-black fs-6-sm text-start mb-1">Enter your Phone Number</div>
                {/* :TODO : We can also use ROW and COL to maintain the responsive */}
                <div className="d-flex align-items-center gap-2">
                    <select className="form-select form-select-sm rounded-3 w-auto text-black border-black py-2">
                        <option selected>+91</option>
                        <option value="1">+21</option>
                        <option value="2">+12</option>
                    </select>
                    <div className="rounded-3 bg-purple d-flex align-items-center gap-1 p-2">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                className="form-control phone-number-input rounded-0 bg-purple border-0 border-bottom bdr-gray-36 text-center"
                                onInput={handleInput} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column gap-1 w-100 section">
                <div className="text-black fs-6-sm text-start mb-1">
                    Enter the OTP sent to your registered number
                </div>
                <div className="rounded-3 bg-purple d-flex align-items-center justify-content-center gap-1 p-2 mb-1">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            className="form-control phone-number-input rounded-0 bg-purple border-0 border-bottom bdr-gray-36 text-center"
                            onInput={handleInput} // Auto-focus next input
                        />
                    ))}
                </div>
                <div className="txt-gray-36 fs-6-sm  ps-1 text-start">
                    Didn’t receive the OTP?  <span className="text-decoration-underline"> Resend</span> in <span className="text-black">00.24</span>
                </div>
            </div>
            <button type="button" className="btn btn-dark-blue" onClick={()=>{navigate('/')}}>Verify</button>
        </div>
    </div>
}