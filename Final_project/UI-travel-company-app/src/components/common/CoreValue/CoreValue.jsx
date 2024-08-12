import React from 'react';
import './CoreValue.scss';

function CoreValue({
    coreNo = '00',
    coreValue = 'Default Value',
    corePara,
    showCoreNo = true
}) {
  return (
    <div className='flex core-card column gap-6'>
        {showCoreNo && <h5>{coreNo}</h5>}
        <h3>{coreValue}</h3>
        <p>{corePara}</p>
    </div>
  )
}

export default CoreValue;