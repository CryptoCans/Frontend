import perro from '../../img/perro.png'
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import commonNft from '../../img/nfts/common.png'
import rareNft from '../../img/nfts/rare.png'
import epicNft from '../../img/nfts/epic.png'
import legendaryNft from '../../img/nfts/legendary.png'
import '../../css/pages/nftCard.scss';
const NftCard = ({ item, setCan, setModalText, setRenderModal, btnPrice }) => {
    const _context = useContext(DataContext)
    return (
        <div onClick={_ => { setCan(item); setRenderModal(true); setModalText("Confirm!") }} className="nftCard">
            {/* {item.onSale.sale &&
                <div className='onSale'>
                    On sale
                </div>
            } */}
            <div className="nftCard-header">
                {btnPrice != 0 && (
                    <div className='button-market px-1'>
                        <img src="" alt="" /> {Number.parseFloat(item.onSale.price)} BNB
                    </div>
                )}
                <div className="px-2 lb-color item-id"> #{item.id} {_context.lastForWallet(item.wallet)} </div>
            </div>
                {item.rarity == 1 && <img className='nftCard-img' src={commonNft} alt="" />}
                {item.rarity == 2 && <img className='nftCard-img' src={rareNft} alt="" />}
                {item.rarity == 3 && <img className='nftCard-img' src={epicNft} alt="" />}
                {item.rarity == 4 && <img className='nftCard-img' src={legendaryNft} alt="" />}
    
            <div className="">
                <div className="p-2">
                    <div>
                        {/* <div className='d-flex justify-content-between  align-items-center'>
                            <div className='lb-color'>
                                <div>
                                    Energy
                                </div>
                                <div>
                                    <progress className='' min={"0"} value={item.energy} max={"4"} name="" id="" />
                                </div>
                            </div>
                            <div className='totalStats lb-color'> {item.energy}/4 </div>
                        </div> */}
                        {/* <div className='d-flex justify-content-between  align-items-center'>
                            <div className='lb-color'>
                                <div>
                                    Acceleration
                                </div>
                                <div>
                                    <progress className='' min={"0"} value={item.aceleracion} max={"300"} name="" id="" />
                                </div>
                            </div>
                            <div className='totalStats lb-color'> {item.aceleracion} </div>
                        </div>
                        <div className='d-flex justify-content-between  align-items-center'>
                            <div className='lb-color'>
                                <div>
                                    Aerodinamic
                                </div>
                                <div > <progress min={"0"} value={item.aerodinamica} max={"300"} name="" id="" /> </div>

                            </div>
                            <div className='totalStats lb-color'> {item.aerodinamica} </div>
                        </div>
                        <div className='d-flex justify-content-between  align-items-center'>
                            <div className='lb-color'>
                                <div>
                                    Resistence
                                </div>
                                <div> <progress min={"0"} value={item.resistencia} max={"300"} name="" id="" /> </div>
                            </div>
                            <div className='totalStats lb-color'> {item.resistencia} </div>
                        </div> */}
                        <div className='d-flex justify-content-between'>
                            <span>Total stats</span>
                            {item.resistencia + item.aceleracion + item.aerodinamica}
                        </div>
                        <div className='totalStatsCard'>
                            <div className="lb-color nft-name"> {item.name} </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-1">
                        {item.rarity == 1 && <i className="rarity common">Common </i>}
                        {item.rarity == 2 && <i className="rarity rare">Rare </i>}
                        {item.rarity == 3 && <i className="rarity epic">Epic </i>}
                        {item.rarity == 4 && <i className="rarity legendary">Legendary </i>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NftCard