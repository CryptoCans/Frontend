import alertIcon from '../../img/alert.svg'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
const Alert = ({ text }) => {
    const _context = useContext(DataContext)
    return (
        _context.alert &&
        <div className="modalX">
            <div className="modalIn">
                <div className="loaderWrap text-center">
                    <img height={"100px"} src={alertIcon} alt="" />
                    <div className="loaderText my-2">{text}</div>
                    <button className='btn btn-primary'> Continue </button>
                </div>
            </div>
        </div>
    )
}
export default Alert