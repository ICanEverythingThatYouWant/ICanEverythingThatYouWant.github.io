import React, {useEffect, useRef} from 'react';

const Scrollable = props => {
    let ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if(el) {
            const onWheel = e => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 5,
                    behavior: 'smooth'
                })
            }

            el.addEventListener('wheel', onWheel)

            return () => el.removeEventListener('wheel', onWheel)
        }
    }, [])

    return (
        <div
        className={props._class}
        ref={ref}
        >
            {
                React.Children.map(props.children, child => React.Children.only(child))
            }
        </div>
    );
};

export default Scrollable;