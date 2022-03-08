import React from 'react';
import '../../Styles/Settings.css';
import { Link} from "react-router-dom";
import UploadImage from '../UploadImage';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";


const Settings = () => {
    
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = async (data) => {
        const fileInput = document.getElementById('imgUploader') ;
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
        console.log(fileInput.files[0]);
        const imgResponse = await fetch(`http://139.155.71.103:8081/customer/avatar?address=${localStorage.getItem("walletAddress")}&customerNo=${localStorage.getItem("customerNo")}`, {
            method: 'POST',
            body: formData,
        });
        const imgJsonResponse = await imgResponse.json();
        console.log(imgJsonResponse.avatarUrl);
        data.avatar = imgJsonResponse.avatarUrl;
        data.customerNo = localStorage.getItem("customerNo");
        data.address = localStorage.getItem("walletAddress");
        data.customerName = localStorage.getItem("customerName");
        data.mail = localStorage.getItem("mail");
        
        const response = await fetch(
            "http://139.155.71.103:8081/customer/info/update",
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
      }

        return (
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
                    <div className='settingsTitle'>Edit Profile</div>
                    
                    <form id="settingsForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="settingsFormCell">
                            <label>Avatar</label>
                            <div className='imageUpload'>
                                <UploadImage img={localStorage.getItem("avatar")}/>
                            </div>
                        </div>
                        
                            
                        <div className="settingsFormCell">    
                            <label>Nickname</label> 
                            <input type="text" placeholder={localStorage.getItem("customerName")||"Please enter nickname"}
                                {...register("customerName", { maxLength: 20 })}
                                    
                               />
                            <div className="error">
                                {errors.customerName?.type === 'maxLength' && "Exceeded maxlength(20)"}
                            </div>
                        </div>   
                        <div className="settingsFormCell">    
                            <label>Contact Email</label> 
                            <input type="text" placeholder={localStorage.getItem("mail")||"Please enter your email"}
                                {...register("mail", {pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/})} 
                                />
                            <div className="error">
                                {errors.mail?.type === 'pattern' && "Invalid email"}
                            </div>
                        </div>
                        
                        <div className="settingsFormCell">    
                            <label>Twitter</label>
                            <input type="text" placeholder="Please enter your twitter"
                                {...register("settingsTwitter", { maxLength: 20 })} 
                                    
                                />
                            <div className="error">
                                {errors.settingsTwitter?.type === 'maxLength' && "Exceeded maxlength(20)"}
                            </div>
                        </div>  
                            
                       

                        <button type="submit" className='settingsSaveButton'>Save</button>

                        <Link to="/Profile/ApplyOrganizer" style={{textDecoration:"none"}}>
                            <button className='applyButton'>Apply to be the event organizer</button>
                        </Link>
                    </form>              
                </div>
            </div>
        )
    }

    export default Settings;
