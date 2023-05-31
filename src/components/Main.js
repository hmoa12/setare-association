import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { Fade } from "react-reveal"

const Main = ({contents}) => {
    const {language} = useContext(LanguageContext)
    let direction
    if (language === "Persian") {
        direction = "rtl"
    } else {
        direction = "ltr"
    }

    return (
           <Fade duration="3000">
        <div className="main p-5 text-center" dir={direction}>
                <h1 className="text-4xl sm:text-6xl pb-10 title font-bold">
                    {contents.TITLE}
                </h1>

                <div className="w-full text-center flex justify-center">
                <div className="bg-white p-5 bg-opacity-60 w-[70%] text-center rounded-lg border-green-100 border-[1px]">
                    <div className="text-4xl sm:text-6xl pb-5">
                        {contents.LOADING.TITLE}
                    </div>
                    <div className="text-2xl sm:text-4xl">
                        {contents.LOADING.DESCRIPTION}
                    </div>

                    <button className="mt-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        <a href="mailto:setare-association@gmail.com">{contents.LOADING.MAIL}</a>
                    </button>
                </div>
                </div>
        </div>
           </Fade>
    )
}

export default Main