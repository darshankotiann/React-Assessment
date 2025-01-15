import { ReactNode } from "react"

interface TopBarTypes {
    profileTag: ReactNode | string,
    firstIcon?: ReactNode,
    secondIcon?: ReactNode
    title?: string,
    isHomePage?: boolean
}

export default function TopBar({ profileTag, firstIcon, secondIcon, title, isHomePage=false }: TopBarTypes) {
    return <>
        <div className="d-flex justify-content-between align-itemes-center rounded-bottom-4 bg-dark-blue p-3 px-4 mb-3">
            <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle text-white fw-bold bg-white txt-dark-blue d-flex justify-content-center align-items-center" style={{ width: "28px", height: "28px" }}>
                    {profileTag}
                </div>
                {(isHomePage) &&
                    <div className="rounded-circle text-white fw-bold bg-white txt-dark-blue d-flex justify-content-center align-items-center" style={{ width: "28px", height: "28px", opacity: "0" }}>
                        {firstIcon}
                    </div> 
                }
            </div>
            <div className=" text-white fs-6">{(title) ? title : "Networth"}</div>
            {
                (isHomePage) ?
                    <div className="d-flex align-items-center gap-2">
                        {firstIcon ?
                            <div className="rounded-circle text-white fw-bold bg-white txt-dark-blue d-flex justify-content-center align-items-center" style={{ width: "28px", height: "28px" }}>
                                {firstIcon}
                            </div>
                            : null}
                        {secondIcon ?
                            <div className="rounded-circle text-white fw-bold bg-white txt-dark-blue d-flex justify-content-center align-items-center" style={{ width: "28px", height: "28px" }}>
                                {secondIcon}
                            </div>
                            : null}
                    </div> : <div className="rounded-circle text-white fw-bold bg-white txt-dark-blue d-flex justify-content-center align-items-center" style={{ width: "28px", height: "28px", opacity: "0" }}>
                        {firstIcon}
                    </div>
            }
        </div>
    </>
}