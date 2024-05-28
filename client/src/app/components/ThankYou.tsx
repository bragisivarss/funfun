import { BackRouteButton } from "../utils/router"

export const ThankYou = () => {
    return <div className="receipt_thanks">
        <p className="">
            Thank You For Ordering At<span className="block span_thanks">Lil Bits!</span>
        </p>
        <BackRouteButton />
        <p className="thanks_text">
            We Look Forward To See You!
        </p>
    </div>
}
