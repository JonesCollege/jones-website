import React, { useState } from 'react'
import { useResizeWidth } from '../../../utility'

const ResourceGrid = ({ Info }) => {
    const [resize, setResize] = useState(false)
    useResizeWidth(960, setResize)

    return (
       <div className='resource-grid-parent'>
            <div className='resource-grid-container'>
                <div className='resource-grid-row'>
                    <div className='resource-grid-cell'>
                          <p className='cell-headline-text contact-width'>
                              CONTACT
                          </p>
                      </div>  
                      {
                        Info[0]?.areaOfStudy &&
                        <div className='resource-grid-cell areaOfStudy-width'>
                            <p className='cell-headline-text'>
                                AREA OF STUDY
                            </p>
                        </div>
                      }
                      {
                        Info[0]?.year&& (!resize || !Info[0]?.areaOfStudy) &&
                        <div className='resource-grid-cell year-width'>
                            <p className='cell-headline-text'>
                                YEAR
                            </p>
                        </div>
                      }
                </div>
            <div>
            {   
                Info.map((item, key) => {
                    return (
                    <div className='resource-grid-row' key={key}>
                        <div className='resource-grid-cell contact-width'>
                            <p className='cell-text'>
                                {item.name}{item.position && `, ${item.position}`}
                            </p>
                            <p className='resource-italic-text'>
                                {item.email}
                            </p>
                        </div>
                        {
                            item.areaOfStudy && 
                            <div className='resource-grid-cell areaOfStudy-width'>
                                <p className='cell-text'>
                                    {item.areaOfStudy}
                                </p>
                            </div>
                        }
                        {
                            item.year && (!resize || !item.areaOfStudy) &&
                            <div className='resource-grid-cell year-width'>
                                <p className='cell-text'>
                                    {item.year}
                                </p>
                            </div>
                        }
                    </div>
                    );
                })
            }
            </div>
        </div>
    </div>   
    )
  }

export default ResourceGrid

