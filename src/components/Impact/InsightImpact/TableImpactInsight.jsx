import React from 'react'
import RowImpactInsight from './RowImpactInsight'

const TableImpactInsight = () => {
  return (
    <table id='impactInsightTable' className='table table-auto w-full text-left'>
        <thead className='text-sm font-avenirMedium border-b border-b-brandGray30x'>
            <tr className='border-b-0.5 border-b-brandGray27x'>
                <td className='py-2 px-2 whitespace-nowrap'>
                    <input type="checkbox" name="master-check-impact-insight" id="masterCheckImpactInsight" className="accent-brandGreen4x focus:outline-none focus:ring-none"  />
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                   
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Total App <br></br> Download
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    No of ShoppersBag <br></br> in Circulation
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Recollection Rate
                </td>
                <td className='py-2 px-2 whitespace-nowrap'>
                    Plastic Reduction <br></br> Matrix
                </td>
            </tr>
            <tr className=''>
                <td className='py-2'></td>
            </tr>
        </thead>

        <tbody>

            <RowImpactInsight id={'state1'} keyprop={'0'} state={'Rivers'} downloads={'231,231'} circulation={'231,231,342'} recollection={'23,634,839'} singleUse={'3,004,465'} />
            <RowImpactInsight id={'state2'} keyprop={'1'} state={'Delta'} downloads={'231,231'} circulation={'231,231,342'} recollection={'23,634,839'} singleUse={'3,004,465'} />
    
        </tbody>
    </table>
  )
}

export default TableImpactInsight