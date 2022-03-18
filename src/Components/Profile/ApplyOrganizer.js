import React from 'react';
import '../../Styles/Settings.css';
import { Link} from "react-router-dom";
import UploadImage from '../UploadImage';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Header from '../Header';


const ApplyOrganizer = () => {
    
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = async (data) => {

        data.customerNo = localStorage.getItem("customerNo");
        data.address = localStorage.getItem("walletAddress");
        
        const response = await fetch(
            "http://139.155.71.103:8081/customer/official",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }
          );
        const jsonResponse = await response.json();
        console.log(data);
        console.log(jsonResponse);
        if(jsonResponse.result==="01"){alert("建立成功")}
      }

        return (
            <div id="backGround">
                <Header />
                <div className="body">
                    <div className='profile'>
                        <div className='profileButtons'>
                            <Link to="/Profile" style={{textDecoration:"none"}}>
                                <button className='profileButton'style={{borderLeft:"2px solid #2AF598",color: "white"}} >
                                    Account Settings
                                </button>
                            </Link>
                            <Link to="/Profile/MyBadge" style={{textDecoration:"none"}}>
                                <button className='profileButton'>
                                    My Badge
                                </button>
                            </Link>
                            <Link to="/Profile/ActivityCenter" style={{textDecoration:"none"}}>
                                <button className='profileButton'>
                                    Activity Center
                                </button>
                            </Link>

                        </div>
                        <div className='profileContent'>
                            <div className='settingsTitle'>Apply To Be The Event Organizer</div>
                            
                            <form className="settingsForm" onSubmit={handleSubmit(onSubmit)}>                        
                                    
                                <div className="settingsFormCell">    
                                    <label>Organizer/Project</label> 
                                    <input type="text" placeholder="Please enter nickname"
                                        {...register("customerName", { maxLength: 20 })}
                                    />
                                    <div className="error">
                                        {errors.customerName?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                    </div>
                                </div>   
                                <div className="settingsFormCell"> 
                                        <label>Official Twitter Handle</label>
                                        <input type="text" placeholder="Please enter twitter"
                                            {...register("twitter", { required: true, maxLength: 20 })}
                                            
                                            />
                                        <div className="error">
                                            {errors.twitter?.type === 'required' && "Twitter is required"}
                                            {errors.twitter?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                        </div>
                                    </div>
                                <div className="settingsFormCell">    
                                    <label>Contact Email</label> 
                                    <input type="text" placeholder="Please enter your email"
                                        {...register("mail", { required: true, pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/ })} 
                                        />
                                    <div className="error">
                                        {errors.mail?.type === 'required' && "Email is required"}
                                        {errors.mail?.type === 'pattern' && "Invalid email"}
                                    </div>
                                </div>

                                <div className='settingsTitle' style={{marginTop:"50px"}}>Other Social Media</div>
                                
                                <div className="settingsFormCell">
                                    <label>Discord</label> 
                                    <input type="text" placeholder="Please enter discord"
                                        {...register("discord", { maxLength: 20 })}
                                            
                                        />
                                    <div className="error">
                                        {errors.discord?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                    </div>
                                </div>
                                <div className="settingsFormCell">   
                                    <label>Telegram</label> 
                                    <input type="text" placeholder="Please enter telegram" 
                                        {...register("telegram", { maxLength: 20 })}
                                            
                                        />
                                    <div className="error">
                                        {errors.telegram?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                    </div>
                                </div> 
                                <div className="settingsFormCell">
                                    <label>Reddit</label> 
                                    <input type="text" placeholder="Please enter reddit"
                                        {...register("reddit", { maxLength: 20 })}
                                            
                                        />
                                    <div className="error">
                                        {errors.reddit?.type === 'maxLength' && "Exceeded maxlength(20)"}
                                    </div>
                                </div>   
                            

                                <button type="submit" className='settingsSaveButton'>Save</button>
                                <Link to="/Profile/ApplyOrganizer" style={{textDecoration:"none"}}>
                                    <button className='applyButton'>Apply to be the event organizer</button>
                                </Link>
                                
                            </form> 
                                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default ApplyOrganizer;
