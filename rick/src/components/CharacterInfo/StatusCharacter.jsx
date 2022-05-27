import React from 'react'
import { FaBookDead } from "react-icons/fa";
import Characterspage from "../../styles/scss/Characterspage.module.scss"
import { BsFillCircleFill } from "react-icons/bs";
import { GrStatusUnknown } from "react-icons/gr"

function StatusCharacter({ status }) {
    switch (status) {
        case ("Alive"):
            return (<span className={Characterspage.aliveStatus}> <BsFillCircleFill className={Characterspage.characterStatusIconAlive} />Alive</span>)
        case ("Dead"):
            return (<span className={Characterspage.deadStatus}>   <FaBookDead className={Characterspage.characterStatusIconDead} /> Dead</span>)
        default:
            return (<span className={Characterspage.unknownStatus}> <GrStatusUnknown />Unknown</span>)
    }
}

export default StatusCharacter