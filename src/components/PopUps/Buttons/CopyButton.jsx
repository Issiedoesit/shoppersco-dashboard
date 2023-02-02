import React, { useEffect, useRef } from 'react';

function CopyButton({ copyText }) {
  const tooltipBoxRef = useRef(null);
  const tooltipTextRef = useRef(null);
  const tooltipTriangleRef = useRef(null);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyText);
    tooltipTextRef.current.innerHTML = 'Copied Successfully';
    tooltipTextRef.current.style.color = '#28A952';
    tooltipTriangleRef.current.style.display = 'block';
    setTimeout(() => {
      tooltipTextRef.current.innerHTML = 'Copy to Clipboard';
      tooltipTextRef.current.style.color = '#7E7E7E';
      tooltipTriangleRef.current.style.display = 'none';
    }, 1000);
  };
  
  return (
    <div className="relative">
        <button onClick={handleCopy}  type="button" id="copy_business_link" className="text-brandDashGreen peer copy-button focus:outline-none">
            <svg className='group' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='group-hover:stroke-brandGreen7x transition-colors duration-300 ease-in-out' d="M13.3334 10.7501V14.2501C13.3334 17.1667 12.1667 18.3334 9.25008 18.3334H5.75008C2.83341 18.3334 1.66675 17.1667 1.66675 14.2501V10.7501C1.66675 7.83341 2.83341 6.66675 5.75008 6.66675H9.25008C12.1667 6.66675 13.3334 7.83341 13.3334 10.7501Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path className='group-hover:stroke-brandGreen7x transition-colors duration-300 ease-in-out' opacity="0.4" d="M18.3334 5.75008V9.25008C18.3334 12.1667 17.1667 13.3334 14.2501 13.3334H13.3334V10.7501C13.3334 7.83341 12.1667 6.66675 9.25008 6.66675H6.66675V5.75008C6.66675 2.83341 7.83341 1.66675 10.7501 1.66675H14.2501C17.1667 1.66675 18.3334 2.83341 18.3334 5.75008Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <svg ref={tooltipTriangleRef} id="tooltip_triangle1" className="z-120 tooltip-triangle absolute top-5 right-1 hidden peer-hover:block fill-white" width="20" height="20" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9994 20.4103H4.93944C1.46944 20.4103 0.0194446 17.9303 1.69944 14.9003L4.81944 9.28027L7.75944 4.00027C9.53944 0.790273 12.4594 0.790273 14.2394 4.00027L17.1794 9.29027L20.2994 14.9103C21.9794 17.9403 20.5194 20.4203 17.0594 20.4203H10.9994V20.4103Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>     
        <div ref={tooltipBoxRef}  id="tooltip_box1" className="w-fit whitespace-nowrap z-120 tooltip-box border-0.5 border-brandGray24x h-fit rounded-four px-4 py-3 text-text15 hidden peer-hover:block bg-white absolute top-7 right-0 shadow-md">
            <p ref={tooltipTextRef}  id="tooltip_text1" className="text-brandGray8x font-avenirRegular tooltip-text">Copy to Clipboard</p>
        </div>
    </div>
  );
}

export default CopyButton;
