/** @format */
import './detail.css'
const Detail = () => {
    return (
        <div className='detail'>
            <div className='user'>
                <img src='./avatar.png' alt='' />
                <h2>Jane Doe</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='info'>
                <div className='option'>
                    <div className='title'>
                        <span>Chart Settings</span>
                        <img src='./arrowUp.png' alt='' />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Privacy & help</span>
                        <img src='./arrowUp.png' alt='' />
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared photos</span>
                        <img src='./arrowDown.png' alt='' />
                    </div>
                    <div className='photos'>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img src='./big.jpg' alt='' />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src='./download.png' alt='' className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img src='./big.jpg' alt='' />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src='./download.png' alt='' className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img src='./big.jpg' alt='' />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src='./download.png' alt='' className='icon' />
                        </div>
                        <div className='photoItem'>
                            <div className='photoDetail'>
                                <img src='./big.jpg' alt='' />
                                <span>photo_2024_2.png</span>
                            </div>
                            <img src='./download.png' alt='' className='icon' />
                        </div>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared Files</span>
                        <img src='./arrowUp.png' alt='' />
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    )
}
export default Detail
