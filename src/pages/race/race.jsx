import React, { useState, useContext, useEffect } from "react";
import canodromeImg from '../../img/canodrome.png'
import runDog from '../../img/rundog.gif'
import { DataContext } from "../../context/DataContext";
import Loader from "../../components/loader/loader";
import axios from "axios";
import NftCard from "../../components/nftCard/nftCard";
import { Link } from "react-router-dom"
import RaceUi from "../../components/raceui/raceui";
import "../../css/pages/games.scss"
import enviroment from "../../env"
import flag from '../../img/assets/icons/flag.png'
import control from '../../img/assets/icons/control.png'
import rank from '../../img/assets/icons/rank.png'
import beats from '../../img/assets/icons/beats.png'
import '../../css/components/raceUi.scss';
const Race = () => {
    const _context = useContext(DataContext)

    const [modalRace, setModalRace] = useState(false)
    const [modalRaceActive, setModalRaceActive] = useState(false)
    const [selectedCan, setSelectedCan] = useState(false)
    const [selectedCanodrome, setSelectedCanodrome] = useState(false)
    const [raceUi, setRaceUi] = useState(true)
    const [places, setPlaces] = useState([])
    const [position, setPosition] = useState([])

    const clickRun = async () => {
        const canId = selectedCan.id
        const canodromeId = selectedCanodrome._id
        const body = { canId, wallet: _context.wallet, canodromeId }
        console.log(body)
        try {
            const res = await axios.post(enviroment().baseurl + "race", body)
            const _places = res.data.response.places
            console.log(_places)
            setModalRaceActive(false)
            goRace(_places)
        } catch (error) { alert(error.response.data.error) }
    }

    const goRace = (_places) => {
        let aux = []
        console.log("Generando array random")
        for (let i = 0; i <= 5; i++) {
            let randomPosition = Math.round(Math.random() * (5 - 0) + 0)
            //console.log(randomPosition)
            if (aux.includes(randomPosition)) {
                i--
            } else {
                aux[i] = randomPosition
            }
        }
        setPosition(aux)
        setPlaces(_places)
        setRaceUi(true)
        _context.setLoading(false)
    }

    const setRenderModal = _ => { }
    const setModalText = _ => { }
    const setCan = can => {
        setSelectedCan(can)
        setModalRace(false)
        setModalRaceActive(true)
    }

    const race = (selector) => {
        if (selector === 0) singleRace()
        if (selector === 1) rankRace()
        if (selector === 2) beatsRace()
    }

    const singleRace = () => setModalRace(true)
    const rankRace = () => alert("Coming Soon!")
    const beatsRace = () => alert("Coming Soon!")

    return (
        <div className="container">
            {raceUi && <RaceUi places={places} setRaceUi={setRaceUi} position={position} />}
            {_context.loading && <Loader />}
            {modalRace && <div className="modalX">
                <div className="modalInClaim">
                    <div className='selectTittle'>
                        <div className='tittle'> Single Race </div>
                        <button className="btn btn-danger" onClick={_ => setModalRace(false)}> X </button>
                    </div>
                    <div className="container py-4 ">
                        {!_context.canodromes && "You need a canodrome to play race"}
                        {_context.canodromes && _context.canodromes.map((canodrome, index) => {
                            return (
                                <div key={index} className="row raceCanodrome mb-2">
                                    <div className="col-md-2 col-12">
                                        {canodrome.energy} / {_context.converType(canodrome.type)}
                                        <img className="w-100" src={canodromeImg} alt="" />
                                    </div>
                                    <div className="col-md-10 col-12">
                                        <div className="container-fluid">
                                            <div className="row">
                                                {canodrome.cans.length == 0 && <div className="h-100 text-center pt-3">
                                                    <h1 className="text-center"> Add cans in canodrome section</h1>
                                                    <Link className="btn btn-primary" to="/canodromes">
                                                        Go to Canodromes
                                                    </Link>
                                                </div>}
                                                {canodrome.cans && canodrome.cans.map((can, index) => {
                                                    return (
                                                        <div key={index} className="col-4" onClick={() => { setCan(can.can); setSelectedCanodrome(canodrome) }}>
                                                            <NftCard
                                                                btnPrice={false}
                                                                setRenderModal={setRenderModal}
                                                                setModalText={setModalText}
                                                                setCan={setCan}
                                                                item={can.can} />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>}

            {modalRaceActive && <div className="cansSelection">
                <div className='selectTittle'>
                    <div className='tittle'> Single Race </div>
                    <button onClick={_ => setModalRaceActive(false)}> X </button>
                </div>
                <div className="container-fluid">
                    <div className="row p-4">
                        <div className="col-3">
                            {selectedCan &&
                                <NftCard
                                    btnPrice={false}
                                    setRenderModal={setRenderModal}
                                    setModalText={setModalText}
                                    setCan={setCan}
                                    item={selectedCan} />
                            }
                        </div>
                        <div className="col-9">
                            <div className="pista">
                                <div className="carril">
                                    <div className="canInCarril">
                                    </div>
                                    <div className="runCarril">
                                    </div>
                                </div>
                                <div className="carril">
                                    <div className="canInCarril">
                                    </div>
                                    <div className="runCarril">
                                    </div>
                                </div>
                                <div className="carril">
                                    <div className="canInCarril">
                                    </div>
                                    <div className="runCarril">
                                    </div>
                                </div>
                                <div className="carril">
                                    <div className="canInCarril">
                                    </div>
                                    <div className="runCarril">
                                    </div>
                                </div>
                                <div className="carril">
                                    <div className="canInCarril">
                                    </div>
                                    <div className="runCarril">
                                    </div>
                                </div>
                                <div className="carril">
                                    <div className="canInCarril">
                                    </div>
                                    <div className="runCarril">
                                    </div>
                                </div>

                            </div>
                            <button onClick={() => { clickRun() }} className="btn btn-success form-control"> Ready! </button>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="row racebg">
                <div className="col-md-3 col-12">
                    <div onClick={() => race(0)} className="raceButton">
                        <div className="text-center">
                            <img className="flag" src={flag} alt="" />
                        </div>
                        <div className="textButtonRace">
                            SINGLE RACE
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <Link to="/minigame" className="raceButton rbtn4 t">
                        <div className="text-center">
                            <img className="flag" src={control} alt="" />
                        </div>
                        <div className="textButtonRace">
                            TICKET MINIGAME
                        </div>
                    </Link>
                </div>
                <div className="col-md-3 col-12">
                    <div className="raceButtonComingSoon rbtn2">
                        <div>
                            <div className="text-center">
                                <img className="flag" src={rank} alt="" />
                            </div>
                            <div className="btn-gray">
                                RANK MODE
                            </div>
                            <div className="cms">
                                Coming soon
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="raceButtonComingSoon rbtn3">
                        <div>
                            <div className="text-center">
                                <img className="flag" src={beats} alt="" />
                            </div>
                            <div className="btn-gray">
                                RACE BEATS
                            </div>
                            <div className="cms">
                                Coming soon
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default Race