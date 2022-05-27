import React from 'react';
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io"
import { GrStatusUnknown } from "react-icons/gr"
import Characterspage from "../../styles/scss/Characterspage.module.scss"

function GenderCharacter({ gender }) {
    switch (gender) {
        case ("Male"):
            return (<span className={Characterspage.maleCharacter}><IoMdMale className={Characterspage.maleIcon} /><span className={Characterspage.maleText}>Male</span></span>)
        case ("Female"):
            return (<span className={Characterspage.femaleCharacter} ><IoMdFemale className={Characterspage.femaleIcon} /><span className={Characterspage.femaleText}>Female</span></span>)
        default:
            return (<span className={Characterspage.unknownCharacter}> <GrStatusUnknown className={Characterspage.unknownIcon} /><span className={Characterspage.unknownText}>Unknown</span></span>)
    }


}

export default GenderCharacter;