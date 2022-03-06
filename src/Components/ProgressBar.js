import React from "react";
import "../Styles/ProgressBar.css";

const ProgressBar = props => {
  var s1Img = "/img/s1.png";
  var s2Img = "/img/s2.png";
  var s3Img = "/img/s3.png";
  var s4Img = "/img/s4.png";
  var l12 = "2px dashed #676868";
  var l23 = "2px dashed #676868";
  var l34 = "2px dashed #676868";


  if (props.currentStep === 1) {
  
  } else if (props.currentStep === 2) {
    s1Img = "/img/finished.png";
    s2Img = "/img/s2a.png";
    l12 = "2px solid #2AF598";
  } else if (props.currentStep === 3) {
    s1Img = "/img/finished.png";
    s2Img = "/img/finished.png";
    s3Img = "/img/s3a.png";
    l12 = "2px solid #2AF598";
    l23 = "2px solid #2AF598";
  } else {
    s1Img = "/img/finished.png";
    s2Img = "/img/finished.png";
    s3Img = "/img/finished.png";
    s4Img = "/img/s4a.png";
    l12 = "2px solid #2AF598";
    l23 = "2px solid #2AF598";
    l34 = "2px solid #2AF598";
  }

  return (
    <div id="progressBar">
        <div className="pdiv">
            <div className="sImg">
                <div className="pCircle" style={{backgroundImage:"url("+s1Img+")"}}></div>
                <div className="pLine" style={{borderLeft:l12}}></div>
            </div>
            <div className="sDetails">
                { (props.currentStep == 1)?
                    (<><span style={{color:"#2AF598",fontWeight:"700"}}>Have In Hand</span><br/><span>Fill In Activities</span></>):
                    (<><span style={{color:"#2AF598",fontWeight:"700"}}>Finished</span><br/><span>Fill In Activities</span></>)
                }
            </div>
        </div>
        <div className="pdiv">
            <div className="sImg">
                <div className="pCircle" style={{backgroundImage:"url("+s2Img+")"}}></div>
                <div className="pLine" style={{borderLeft:l23}}></div>
            </div>
            <div className="sDetails">
                {(() => {
                    switch (props.currentStep) {
                        case 1: return (<><span style={{color:"#676868",fontWeight:"700"}}>Not Performed</span><br/><span style={{color:"#676868"}}>Fill In Activities</span></>);
                        case 2: return (<><span style={{color:"#2AF598",fontWeight:"700"}}>Have In Hand</span><br/><span>Fill In Activities</span></>);
                        default: return (<><span style={{color:"#2AF598",fontWeight:"700"}}>Finished</span><br/><span>Fill In Activities</span></>);
                    }
                  })()
                }
            </div>
        </div>
        <div className="pdiv">
            <div className="sImg">
                <div className="pCircle" style={{backgroundImage:"url("+s3Img+")"}}></div>
                <div className="pLine" style={{borderLeft:l34}}></div>
            </div>
            <div className="sDetails">
                {(() => {
                    switch (props.currentStep) {
                        case 4: return (<><span style={{color:"#2AF598",fontWeight:"700"}}>Finished</span><br/><span>Fill In Activities</span></>);
                        case 3: return (<><span style={{color:"#2AF598",fontWeight:"700"}}>Have In Hand</span><br/><span>Fill In Activities</span></>);
                        default: return (<><span style={{color:"#676868",fontWeight:"700"}}>Not Performed</span><br/><span style={{color:"#676868"}}>Fill In Activities</span></>);
                    }
                  })()
                }
            </div>
        </div>
        <div className="pdiv">
            <div className="sImg">
                <div className="pCircle" style={{backgroundImage:"url("+s4Img+")"}}></div>
            </div>
            <div className="sDetails">
                { (props.currentStep == 4)?
                    (<><span style={{color:"#2AF598",fontWeight:"700"}}>Have In Hand</span><br/><span>Fill In Activities</span></>):
                    (<><span style={{color:"#676868",fontWeight:"700"}}>Not Performed</span><br/><span style={{color:"#676868"}}>Fill In Activities</span></>)
                }
            </div>
        </div>
    </div>
  );
};

export default ProgressBar;
