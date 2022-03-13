import React, { useContext } from "react";
import sobre1 from "../../../img/sobre.png"
import sobre2 from "../../../img/sobre2.png"
import sobre3 from "../../../img/sobre3.png"
import { DataContext } from "../../../context/DataContext";

import buyPackage from "./shopService";
const Shop = () => {
    const { wallet, Connect } = useContext(DataContext)

    return (
        <div className="bg-dogs">
            <div className="container py-4">
                <div className="neon">
                    <div className="w-100 ">
                        <div className=" w-100">
                            <div className="row text-center">
                                <div className="col-12 col-sm-6 mb-3 col-md-4">
                                    <div className="nftBg">
                                        <div className="text-center">
                                            <h2 className="text-white">Minted 0 / 1000 </h2>
                                        </div>
                                        <img className="nft-img" height={"300px"} src={sobre1} alt="" />
                                        <div className="text-right">
                                            60% Common<br />
                                            30% UnCommon<br />
                                            0.9% Epic<br />
                                            0.1% Legendary
                                        </div>
                                        {wallet?
                                        <button onClick={_ => buyPackage(1,wallet)} className="btn-ccan mt-2 w-50"> BUY </button>
                                        :
                                        <button onClick={Connect} className="btn-ccan mt-2 w-50"> Connect </button>}
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 mb-3 col-md-4">
                                    <div className="nftBg2">
                                        <div className="text-center">
                                            <h2 className="text-white">Minted 0 / 500 </h2>
                                        </div>
                                        <img className="nft-img" height={"300px"} src={sobre2} alt="" />
                                        <div className="text-right">
                                            30% Common<br />
                                            60% UnCommon<br />
                                            10% Epic<br />
                                            3% Legendary
                                        </div>
                                        {wallet?
                                        <button onClick={_ => buyPackage(2,wallet)} className="btn-ccan mt-2 w-50"> BUY </button>
                                        :
                                        <button onClick={Connect} className="btn-ccan mt-2 w-50"> Connect </button>}
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 mb-3 col-md-4">
                                    <div className="nftBg3">
                                        <div className="text-center">
                                            <h2 className="text-white">Minted 0 / 250 </h2>
                                        </div>
                                        <img className="nft-img" height={"300px"} src={sobre3} alt="" />
                                        <div className="text-right">
                                            0% Common<br />
                                            60% UnCommon<br />
                                            30% Epic<br />
                                            10% Legendary
                                        </div>
                                        {wallet?
                                        <button onClick={_ => buyPackage(3,wallet)} className="btn-ccan mt-2 w-50"> BUY </button>
                                        :
                                        <button onClick={Connect} className="btn-ccan mt-2 w-50"> Connect </button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shop