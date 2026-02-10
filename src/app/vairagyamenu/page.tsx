import './vairagyamenu.css'

const vairagyamenu = () => {
    return (
        <div>
            <div className='menu-drop-zone'>

            </div>

            <div className='menu-drawer'>
                <div className='menu-logo'>
                    <img src="/imgs/vairagyamenu/Bun.svg" alt="LOGO" className='h-12 w-12'/>
                </div>

                <div className='menu-items'>
                    <div>
                        <a href="/work">Work</a>
                    </div>
                    <div>
                        <a href="/manifesto">manifesto</a>
                    </div>
                    <div>
                        <a href="/contact">contact</a>
                    </div>
                </div>

                <div className='menu-toggler'>
                    <span></span>
                    <span></span>
                </div>
            </div>  
        </div>
    )
}

export default vairagyamenu;