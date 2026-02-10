import Image from 'next/image'
import './vairagyamenu.css'

const VairagyaMenu = () => {
    return (
        <div>
            <div className='menu-drop-zone'>

            </div>

            <div className='menu-drawer'>
                <div className='menu-logo'>
                    <Image src="/imgs/vairagyamenu/Bun.svg" width={50} height={50} alt="LOGO"/>
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

export default VairagyaMenu;