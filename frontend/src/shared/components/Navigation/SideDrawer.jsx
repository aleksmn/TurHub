import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
    const nodeRef = React.useRef(null)
    const content = (
        <CSSTransition nodeRef={nodeRef} in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <aside ref={nodeRef} className="side-drawer" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    );

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;