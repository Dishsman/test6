// import { Flex } from "antd";


const Page1 = () => {
  return (
    <div id='bg' style={{
      height: "100vh", width: "100vw",
      display: "flex", flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      background: 'grey',
    }}>
      <div id='all' style={{
        display: "flex", flexDirection: 'column', height: "65%", width: "40%",
        justifyContent: "center",
        alignItems: "center",
        minWidth: 1168,
        maxWidth: 2890,
        minHeight: 619,
        maxHeight: 800,
      }} className='fill'>
        <div id='main_top' className='main fill'>
          <div id='left_mt' className='fill' style={{ height: '100%', width: "30%" }}>
            <img src="/man.jpg" alt="image did not load" className="max" />
          </div>
          <div id='right_mt' className='fill2' style={{ height: '100%', width: "70%" }}>
            <div id='1collumn' className='fill topBar bg1column' style={{ display: "flex", flexDirection: 'row', }}>
              <div className="collumn fontBig">
                SAMUEL ANDERSON
              </div>
              <div className="upperIcon">
                <img className="upperIconImage" src="/download.svg" alt="load" />
              </div>
            </div>
            <div id='2collumn' className='fill topBar bg2column' style={{ display: "flex", flexDirection: 'row', }}>
              <div className="collumn fontSmall">
                THE EXPERIENCE UI/UX DESIGN
              </div>
              <div className="upperIcon">
                <img className="upperIconImage" src="/behance.svg" alt="Be" />
              </div>
            </div>
            <div id='3collumn' className='fill topBar'>
              <div id='option' style={{
                display: "flex", flexDirection: 'row',
                alignItems: 'center',
                height: '100%', width: '100%'
              }}>
                <div className="icon">
                  <img className="iconImage" src="/flag.svg" alt="Flag" />
                  <p className="iconText">HOME</p>
                </div>
                <div className="icon2">
                  <img className="iconImage" src="/graduate.svg" alt="Graduate" />
                  <p className="iconText">RESUME</p>
                </div>
                <div className="icon3">
                  <img className="iconImage" src="/bag.svg" alt="Bag" />
                  <p className="iconText">PORTFOLIO</p>
                </div>
                <div className="icon4">
                  <img className="iconImage" src="/location.svg" alt="Location" />
                  <p className="iconText">CONTACTS</p>
                </div>
                <div className="icon5">
                  <img className="iconImage" src="/headset.svg" alt="Headset" />
                  <p className="iconText">FEEDBACK</p>
                </div>
                <div className="icon6">
                  <img className="iconImage" src="/pen.svg" alt="Pen" />
                  <p className="iconText">BLOG</p>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div id='main_buttom' className='main fill bgWhite'>
          <div id='left_mb' style={{ height: "100%", width: "65%", display: "flex", flexDirection: 'column' }} className='fill2'>
            <div id='left_mb_top' className='fill' style={{ height: "33.33%", width: "100%", display: 'flex', flexDirection: 'column' }}>
              <div className="fontSmall" style={{ color: "black", marginTop: "1%", fontWeight: "bold" }}>
                GRIDUS RESUME HTML TEMPLATE
              </div>
              <div className="fontSmall" style={{ color: "red", marginTop: "1%", fontSize: "1.25vb", }}>
                PERFECT FOR CV/RESUME OR PORTFOLIO WEBSITE
              </div>
            </div>
            <div id='left_mb_buttom' className='fill' style={{ height: "66.66%", width: "100%", display: "flex", flexDirection: 'row' }}>
              <div id='box1' className='fill buttomBox'>
                <img className="iconTime" src="/time.svg" />
                <div id='text' className="max textBox">
                  MODERN
                  <div className="textBoxSmall">
                    this is ramdom text cause the image was not clear,
                    and i don't know what were writing
                    i hope, this random blubbing can subtitude,
                    for a missing paragraph
                  </div>
                </div>
              </div>
              <div id='box2' className='fill buttomBox'>
                <img className="iconPie" src="/pie-chart.svg" />
                <div id='text' className="max textBox">
                  SIMPLE CV
                  <div className="textBoxSmall">
                    this is again a ramdom text cause the image was not clear,
                    i hope this random blubbing can subtitude for a missing paragraph
                  </div>
                </div>
              </div>
              <div id='box3' className='fill buttomBox'>
                <img className="iconSetting" src="/setting.svg" />
                <div id='text' className="max textBox">
                  RESPONSE
                  <div className="textBoxSmall">
                    yet, we met again. it is me a ramdom text.
                    i hope this random blubbing can subtitude for a missing paragraph
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='right_mb' className='fill bgPersonalInfo' style={{ height: "100%", width: "35%" }}>
            <div id='right_mb_top' className='fill fontSmall'
              style={{
                height: "16.665%", width: "100%", color: "black", fontWeight: "bold", marginLeft: 0,
                display: 'flex', alignItems: "center", paddingLeft: "10%"
              }}>
              PERSONAL INFO
            </div>
            <div id='right_mb_buttom' className='fill' style={{ height: "82.335%", width: "100%", display: "flex", flexDirection: 'column', paddingLeft: '10%' }}>
              <div className="infoTittle"><div className="infoTittleSize">NAME:</div><div className="info">Samuel Anderson</div></div>
              <div className="infoTittle"><div className="infoTittleSize">BIRTH_DATE:</div><div className="info">02/02/2003</div></div>
              <div className="infoTittle"><div className="infoTittleSize">ADDRESS:</div> <div className="info">Roswaal Mansion,
                Lugunica, Kingdom of Pristella
                Postal Code: 0666-REZERO</div>
              </div>
              <div className="infoTittle"><div className="infoTittleSize">PHONE:</div><div className="info">+1-800-REZ-0707</div></div>
              <div className="infoTittle"><div className="infoTittleSize">EMAIL:</div><div className="info">rem.maid@roswaalmansion.com</div></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page1;