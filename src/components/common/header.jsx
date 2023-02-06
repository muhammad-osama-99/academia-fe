import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import './common.css';



function Header() {
   

    return (
        <Fragment>
        <header className='main_header text-light'>
            <div className="logo">
                <h3 className="pagename_h3">
                    <Link to="/" className="pagename text-light">
                    ACADEMIA INDUSTRY LINKAGE
                    </Link>
                </h3>
            </div>
        </header>
        </Fragment>
    )
}

export default Header