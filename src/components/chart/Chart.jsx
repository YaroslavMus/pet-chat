/** @format */
import EmojiPicker from 'emoji-picker-react'
import React from 'react'
import './chart.css'
const Chart = () => {
    const [open, setOpen] = React.useState(false)
    const [text, setText] = React.useState('')
    const handleEmoji = emoji => {
        setText(prev => prev + emoji.emoji)
        setOpen(false)
    }
    return (
        <div className='chart'>
            <div className='top'>
                <div className='user'>
                    <img src='./avatar.png' alt='' />
                    <div className='texts'>
                        <span>Jane Doe</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
                <div className='icons'>
                    <img src='./phone.png' alt='' />
                    <img src='./video.png' alt='' />
                    <img src='./info.png' alt='' />
                </div>
            </div>
            <div className='center'>
                <div className='message'>
                    <img src='./avatar.png' alt='' />
                    <div className='texts'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid sit fugit vero, blanditiis officiis
                            voluptates voluptatibus. Accusamus iste nulla fuga
                            temporibus unde perferendis animi nisi? Mollitia
                            laborum voluptas rem fuga.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div className='texts'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid sit fugit vero, blanditiis officiis
                            voluptates voluptatibus. Accusamus iste nulla fuga
                            temporibus unde perferendis animi nisi? Mollitia
                            laborum voluptas rem fuga.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img src='./avatar.png' alt='' />
                    <div className='texts'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid sit fugit vero, blanditiis officiis
                            voluptates voluptatibus. Accusamus iste nulla fuga
                            temporibus unde perferendis animi nisi? Mollitia
                            laborum voluptas rem fuga.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message'>
                    <img src='./avatar.png' alt='' />
                    <div className='texts'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid sit fugit vero, blanditiis officiis
                            voluptates voluptatibus. Accusamus iste nulla fuga
                            temporibus unde perferendis animi nisi? Mollitia
                            laborum voluptas rem fuga.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='message own'>
                    <div className='texts'>
                        <img src='./big.jpg' alt='' />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid sit fugit vero, blanditiis officiis
                            voluptates voluptatibus. Accusamus iste nulla fuga
                            temporibus unde perferendis animi nisi? Mollitia
                            laborum voluptas rem fuga.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='icons'>
                    <img src='./img.png' alt='' />
                    <img src='./camera.png' alt='' />
                    <img src='./mic.png' alt='' />
                </div>
                <input
                    type='text'
                    placeholder='Type a message...'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <div className='emoji'>
                    <img
                        src='./emoji.png'
                        alt=''
                        onClick={() => setOpen(prev => !prev)}
                    />
                    <div className='picker'>
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}
export default Chart
