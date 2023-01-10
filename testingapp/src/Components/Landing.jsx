import React from 'react'
import "./Landing.css"
const Landing = () => {
  return (
    <div className='landing'>
        <div className="landing_bg">
        </div>
        <div className="land_contain">
        <div className="landing_body">
            <div className="landing_img"></div>
            <div className='landing_left'>
                <div className="welcome_text">
                    <p>HI!, <b className="user">I’M SOULKING</b>, WEB DEVELOPER, STUDENT & GAMER</p>
                </div>
                <div className="landing_text2">
                    <p>Familiar With:</p>
                </div>
                <div className="landing_familiar_tools">
                    <span class="dot" style={{backgroundImage: "url(https://img.icons8.com/ios-glyphs/512/github.png)", backgroundSize: "52px 52px"}}></span>
                    <span class="dot" style={{backgroundImage: "url(https://img.icons8.com/color/512/visual-studio-code-2019.png)", backgroundSize: "52px 52px"}}></span>
                    <span class="dot" style={{backgroundImage: "url(https://img.icons8.com/color/512/figma.png)", backgroundSize: "52px 52px"}}></span>
                    <span class="dot" style={{backgroundImage: "url(https://img.icons8.com/color/512/linkedin-2.png)", backgroundSize: "52px 52px"}}></span>
                    <span class="dot" style={{backgroundImage: "url(https://img.icons8.com/color/512/discord-logo.png)", backgroundSize: "52px 52px"}}></span>
                    <span class="dot" style={{backgroundImage: "url(https://i0.wp.com/blog.whitneydawnmusic.com/wp-content/uploads/2017/09/insta-logo.png?resize=744%2C744&ssl=1)", backgroundSize: "52px 52px"}}></span>
                    <span class="dot" style={{backgroundImage: "url(https://img.icons8.com/color/512/gmail-new.png)", backgroundSize: "52px 52px"}}></span>
                </div>
            </div>
            <div className='forward_arrow'> </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default Landing
