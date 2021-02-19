import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomButton from '../../components/custom_button/CustomButton'
import './SplashScreenContainer.scss';

class SplashScreenContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            splashData: [
                {
                    imageLink: '/images/splash-screen/splash-screen1.png',
                    stepPage : '/images/splash-screen/step-page1.svg'
                    
                },
                {
                    imageLink: '/images/splash-screen/splash-screen2.png',
                    stepPage : '/images/splash-screen/step-page2.svg'
                },
                {
                    imageLink: '/images/splash-screen/splash-screen3.png',
                    stepPage : '/images/splash-screen/step-page3.svg'
                }
            ],
            activeSplash: 0
        }
    }

    handleClickNext = (active) => {
        const { splashData } = this.state;

        if (active < splashData.length - 1) {
            this.setState({ activeSplash: active + 1 });
        } else {
            this.setState({ activeSplash: 0 })
        }
    }

    render() {
        const { splashData, activeSplash } = this.state;

        return (
            <>
                <Row>
      <Col className="d-flex flex-column align-items-left justify-content-center pd-28 splash-screen">
        <div className= "image-link">
        <img src={`${ splashData[activeSplash].imageLink }`} alt={`${ splashData[activeSplash].imageLink }`}/>
        </div>
        
        <p className="fs-12 mgt-31 text-center">Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
        
        <div className= "step-page pb-5">
        <img src={`${ splashData[activeSplash].stepPage }`} alt={`${ splashData[activeSplash].stepPage }`}/>
        </div>
        <CustomButton
          text="Lanjut"
          className="custom-button" 
          onClick={() => this.handleClickNext(activeSplash)}
        /> 
      </Col>
    </Row>
     </>
        )
    }
}

export default SplashScreenContainer;