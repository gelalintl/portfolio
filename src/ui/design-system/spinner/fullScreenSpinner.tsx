import { Spinner } from "./spinner"

export const FullScreenSpinner = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Spinner size="large" variant="primary"/>
        </div>
    )
}