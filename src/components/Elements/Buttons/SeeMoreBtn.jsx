import React, {useState} from 'react'

const SeeMoreBtn = ({hideBtn, id, noOfRows, data}) => {

    // not functional yet


    const [rows, setRows] = useState(()=>{return noOfRows ? noOfRows : 8})
    const [listLength] = useState(()=>{return data ? data.length : 0})


    const moreRows = (add) =>{
        setRows((prevRows) => prevRows + add)
    }

  return (
    <>
        {
            hideBtn &&
            <div id={id} className='w-full pt-5 flex justify-center'>
                <button onClick={()=>moreRows(5)} type='button' className={`mx-auto w-fit font-avenirMedium text-sm text-brandBlue1x ${rows < listLength ? 'cursor-pointer' : 'cursor-not-allowed'}`} title={`${rows < listLength ? 'show more rows' : 'no more rows'}`}>
                See more
                </button>
            </div>
        }
    </>
  )
}

export default SeeMoreBtn