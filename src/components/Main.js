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
        <div className="main p-5" dir={direction}>
           <Fade duration="3000">
                <h1 className="text-4xl sm:text-6xl pb-5 title">
                    {contents.TITLE}
                </h1>
                <div className="intro">
                    {contents.INTRO}
                </div>
           </Fade>
        </div>
    )
}

export default Main