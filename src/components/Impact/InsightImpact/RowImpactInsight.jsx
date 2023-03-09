import React from 'react'
import { NavLink } from 'react-router-dom'
import useImpactStore from '../../../customHooks/Stores/useImpactStore'

const RowImpactInsight = (props) => {
    const newImpactState = useImpactStore((state)=> state.currentImpactState)
    const setImpactState = useImpactStore((state)=> state.setCurrentImpactState)

    const handleImpactStateChange = (val) =>{
        setImpactState(val)
    }
  return (
    <tr id={props.id} key={props.keyprop} className='text-sm font-avenirLight odd:bg-brandGray28x impact-insight-row'>
        <td className="py-3 px-1 whitespace-nowrap">
            <input type="checkbox" name="check-impact-insight" id="checkImpactInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <div>
                <NavLink onClick={()=> handleImpactStateChange(props.state.toLowerCase())} to={`./state/delta`} className="text-brandBlue1x">{props.state}</NavLink>
                {/* <NavLink onClick={()=> handleImpactStateChange(props.state.toLowerCase())} to={`./state/${props.state.toLowerCase()}`} className="text-brandBlue1x">{props.state}</NavLink> */}
            </div>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className=''>{props.downloads}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className=''>{props.circulation}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="">{props.recollection}</p>
        </td>
        <td className="py-3 px-1 whitespace-nowrap">
            <p className="">{props.singleUse}</p>
        </td>
    </tr>
  )
}

export default RowImpactInsight