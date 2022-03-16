import React from 'react';
import { useState, useEffect } from 'react';
import '../../Styles/Registration.css';
import UploadImage from '../UploadImage';
import {useForm} from "react-hook-form";
import { Link} from "react-router-dom";
import ProgressBar from '../ProgressBar';
import TimeZones from '../TimeZones';


const Registration = () => {
    const [currentStep, setCurrentStep] = useState(1);
    
    
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({mode: "all"});
    const onSubmit = async (data) => {
        const fileInput = document.getElementById('imgUploader') ;
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
        const imgResponse = await fetch(`http://139.155.71.103:8081/activity/imageUpload?address=${localStorage.getItem("walletAddress")}`, {
            method: 'POST',
            body: formData,
        });
        const imgJsonResponse = await imgResponse.json();
        console.log(imgJsonResponse.imgUrl);
        data.badgeImgUrl = imgJsonResponse.imgUrl;
        data.timeZone = document.getElementById('timeZonePicker').value;
        data.seqNo = "1";
        //data.badgeTotal = document.getElementById();
        data.issuerAddress = localStorage.getItem("walletAddress");
        
        const response = await fetch(
            "http://139.155.71.103:8081/activity/release",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }
          );
        const jsonResponse = await response.json();
        // console.log(data);
        // console.log(jsonResponse);
      }

    useEffect(()=>{
        trigger();
    },[currentStep]
    );

    function b1Trigger(){
        if(!errors.activityName &&!errors.startDate &&!errors.endDate &&!errors.activityAccess&&!errors.activityLink){setCurrentStep(2)}}
    function b2Trigger(){
        if(!errors.organizer &&!errors.role &&!errors.twitter &&!errors.mail){setCurrentStep(3)}}
    function b3Trigger(){
        if(!errors.badgeName &&!errors.badgeTotal){setCurrentStep(4)}}

    return (
        <div className="registration">
            <div id="registration_title"><h1>Register your event and build the badge with us</h1></div>
            <div id="regFormContainer">
                <ProgressBar currentStep={currentStep}/>
                <form id="regForm" onSubmit={handleSubmit(onSubmit)}>
                    
                    {currentStep==1&&(<p style={{fontWeight:'bold', fontSize:'large'}}><label>Essential Information </label></p>)}
                    {currentStep==4&&(<p style={{fontWeight:'bold', fontSize:'large'}}><label>Information Confirmation</label></p>)}
                    {(currentStep==1 || currentStep==4 )&& (
                        <div>
                            <div className="regFormCell">    
                                <label><span>● </span>Activity name</label>
                                <input type="text" placeholder="Please enter activity name" 
                                    {...register("activityName", { required: true, maxLength: 20 })} 
                                    
                                    />
                                <div className="error">
                                    {errors.activityName?.type === 'required' && "Activity Name is required"}
                                    {errors.activityName?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                </div>
                            </div>
                            
                            <div className="regFormCell">
                                <label><span>● </span>Start Time</label>
                                <input type="datetime-local" 
                                    {...register("startDateTime", { required: true })}/>
                                <div className="error">
                                    {errors.startDateTime?.type === 'required' && "StartTime is required"}
                                </div>
                            </div >
                            <div className="regFormCell">
                                <label><span>● </span>End Time</label>
                                <input type="datetime-local" 
                                    {...register("endDateTime", { required: true })}/>
                                <div className="error">
                                    {errors.endDateTime?.type === 'required' && "EndTime is required"}
                                </div>
                            </div>
                            <div className="regFormCell">
                                <label><span>● </span>TimeZone</label>
                                <TimeZones />
                            </div>
                            <div className="regFormCell">    
                                <label><span>● </span>Access to event</label> 
                                <input type="text" placeholder="Please enter event access"
                                    {...register("activityAccess", { required: true, maxLength: 30 })}
                                    
                                    />
                                <div className="error">
                                    {errors.activityAccess?.type === 'required' && "Activity Access is required"}
                                    {errors.activityAccess?.type === 'maxLength' && "Exceeded maxlength(30)"}
                                </div>
                            </div>   
                            <div className="regFormCell">    
                                <label><span>● </span>Activity Link</label> 
                                <input type="text" placeholder="Please enter activity link"
                                    {...register("activityLink", { required: true })}
                                    
                                    />
                                <div className="error">
                                    {errors.activityLink?.type === 'required' && "Activity Link is required"}
                                </div>
                            </div> 
                            <div className="regFormCell">
                                <label>Activities Description</label> 
                                <textarea type="text" row="5" placeholder="Please enter activity description"
                                    {...register("activityDescription", { maxLength: 50 })}
                                    />
                                <div className="error">
                                    {errors.activityDescription?.type === 'maxLength' && "Exceeded maxlength(50)"}
                                </div>
                            </div>
                            {currentStep <4 &&(
                            <div className="regFormCell">
                                <label><span>● </span>Mandatory</label>
                            </div>
                                )
                            }
                        </div>)
                    }
                    {currentStep==1&&(
                        <div className="buttons">
                            <Link to="/" style={{textDecoration:"none"}}>
                                <button className='backButton'>
                                    Back
                                </button>
                            </Link>
                            <button type="submit"  className='continueButton'
                            onClick={b1Trigger}>
                                Continue
                            </button>
                        </div>
                        
                        )}

                    {currentStep==2&&(<p style={{fontWeight:'bold', fontSize:'large'}}><label>Tell us more about yourself</label></p>)}
                    {(currentStep==2 || currentStep==4 )&& (
                        <div>
                            <div className="regFormCell" >
                                <label><span>● </span>Organizer/Project</label> 
                                <input type="text" placeholder="Please enter organizer/project"
                                    {...register("organizer", { required: true, maxLength: 20 })}
                                    
                                    />
                                <div className="error">
                                    {errors.organizer?.type === 'required' && "Organizer/Project is required"}
                                    {errors.organizer?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                </div>
                            </div>
                            <div className="regFormCell">    
                                <label><span>● </span>Your Role</label> 
                                <input type="text" placeholder="Please enter your role"
                                    {...register("initiatorRole", { required: true, maxLength: 20 })} 
                                    
                                    />
                                <div className="error">
                                    {errors.initiatorRole?.type === 'required' && "Your Role is required"}
                                    {errors.initiatorRole?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                </div>
                            </div>  
                            <div className="regFormCell"> 
                                <label><span>● </span>Official Twitter Handle</label>
                                <input type="text" placeholder="Please enter twitter"
                                    {...register("twitter", { required: true, maxLength: 20 })}
                                    
                                    />
                                <div className="error">
                                    {errors.twitter?.type === 'required' && "Twitter is required"}
                                    {errors.twitter?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                </div>
                            </div>
                            <div className="regFormCell"> 
                                <label><span>● </span>Your Contact Email</label> 
                                <input type="text" placeholder="Please enter email"
                                    {...register("mail", { required: true, pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/ })}
                                    
                                    />
                                <div className="error">
                                    {errors.mail?.type === 'required' && "Email is required"}
                                    {errors.mail?.type === 'pattern' && "Invalid email"}
                                </div>
                            </div>
                            <div className="regFormCell">
                                <label>Discord</label> 
                                <input type="text" placeholder="Please enter discord"
                                    {...register("discord", { maxLength: 20 })}
                                    
                                    />
                                <div className="error">
                                    {errors.discord?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                </div>
                            </div>
                            <div className="regFormCell">   
                                <label>Telegram</label> 
                                <input type="text" placeholder="Please enter telegram" 
                                    {...register("telegram", { maxLength: 20 })}
                                    
                                    />
                                <div className="error">
                                    {errors.telegram?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                </div>
                            </div> 
                            <div className="regFormCell">
                                <label>Reddit</label> 
                                <input type="text" placeholder="Please enter reddit"
                                    {...register("reddit", { maxLength: 20 })}
                                    
                                    />
                                <div className="error">
                                    {errors.reddit?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                </div>
                            </div>
                            {currentStep <4 &&(
                            <div className="regFormCell">
                                <label><span>● </span>Mandatory</label>
                            </div>
                                )
                            }
                        </div>)
                    }

                    {currentStep== 2&& (
                        <div className="buttons">
                            <button className='backButton'
                                onClick={()=>{setCurrentStep(1)}}>
                                    Back
                            </button>

                            <button className='continueButton'
                                onClick={b2Trigger}>
                                    Continue
                            </button>
                        </div>)
                    }


                    {currentStep==3&&(<p style={{fontWeight:'bold', fontSize:'large'}}><label>Let's take a look at your badge</label></p>)}
                    {(currentStep==3 || currentStep==4 ) && (
                    <div>
                        <div className="regFormCell">
                            <label><span>●</span>Upload Badge</label>
                            <div className='imageUpload'>
                                <UploadImage />
                            </div>
                        </div>
                        <div className="regFormCell">   
                            <label><span>●</span>Badge Name</label> 
                            <input type="text" placeholder="Please enter badge name"
                                {...register("badgeName", { required: true, maxLength: 20 })}

                                />
                            <div className="error">
                                {errors.badgeName?.type === 'required' && "Initiator Role is required"}
                                {errors.badgeName?.type === 'maxLength' && "Exceeded maxlength(20)"}
                            </div>
                        </div>
                        <div className="regFormCell">
                            <label><span>●</span>Total Supply</label> 
                            <input type="number" placeholder="Please enter total supply"
                                {...register("badgeTotal", { required: true, min:1 })}
                                
                                />
                            <div className="error">
                                {errors.badgeTotal?.type === 'required' && "Casting Quantity is required"}
                                {errors.badgeTotal?.type === 'min' && "Minimum quantity is 5"}
                            </div>
                        </div> 
                        {/* 
                        <div className="regFormCell">   
                            <label>How to collect</label> 
                            <textarea type="text" row="5" placeholder="Please indicate the criteria for collection"
                                    {...register("collectMethod", { maxLength: 30 })}
                                    />
                            <div className="error">
                                {errors.collectMethod?.type === 'maxLength' && "Exceeded maxlength(20)"}
                            </div>
                        </div>
                        */}
                        {currentStep <4 &&(
                        <div className="regFormCell">
                            <label><span>● </span>Mandatory</label>
                        </div>
                            )
                        }
                    </div>)
                    }
                        
                    {currentStep == 3 && (
                        <div className="buttons">
                            <button className='backButton'
                                onClick={()=>{setCurrentStep(2)}}>
                                    Back
                            </button>

                            <button className='continueButton'
                                onClick={b3Trigger}>
                                    Continue
                            </button>
                        </div>)
                    }

                    {currentStep==4 && (
                        <div>
                            <div className="buttons">
                                <button className='backButton'
                                    onClick={()=>{setCurrentStep(3)}}>
                                        Back
                                </button>
                                <button type="submit" className='continueButton'>
                                    Continue
                                </button>
                            </div>
                        </div>
                        )
                    }
                
                    
                </form>
            </div>
        </div>
    )
}
        
export default Registration;
