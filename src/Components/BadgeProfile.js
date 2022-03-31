import React, {useEffect} from 'react';
import '../Styles/BadgeProfile.css';
import algosdk from "algosdk";
import MyAlgoConnect from '@randlabs/myalgo-connect';
 


export const BadgeProfile = (props) => {

    // useEffect(() => {
    //     getState();
    // }, []);

    var claimBadgeUrl;
    var whiteListUrl;

    const optIn = async ()=>{
        const algodClient = new algosdk.Algodv2("",'https://api.testnet.algoexplorer.io', '');
        const params = await algodClient.getTransactionParams().do();

        const txn = algosdk.makeApplicationOptInTxnFromObject({
            suggestedParams: {
                ...params,
            },
            from: localStorage.getItem("walletAddress"),
            //ContractId
            //appIndex: appIndex,
            //note: note
        });

        const myAlgoConnect = new MyAlgoConnect();
        const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
    }

    const whiteList = async ()=>{
        const algodClient = new algosdk.Algodv2("",'https://api.testnet.algoexplorer.io', '');
        const params = await algodClient.getTransactionParams().do();
        const txn = algosdk.makeApplicationNoOpTxnFromObject({
            from: localStorage.getItem("walletAddress"),
            //ContractId
            //appIndex: appIndex,
            //note: new Uint8Array(Buffer.from("example note value")),
            appArgs: [Uint8Array(Buffer.from("claim"))],
            suggestedParams: {
                ...params,
            },
            foreignAssets: [2],
        });
        }

    // const getState = async () => {
    //     const response = await fetch(
    //         "http://139.155.71.103:8081/customer/activity/link",
    //         {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 "activityId": badge.activityId,
    //                 "address": localStorage.getItem("walletAddress")||"",
    //                 "customerNo": localStorage.getItem("customerNo")||"",
    //             }),
    //         }
    //     );
    //     const jsonResponse = await response.json();
    //     console.log(badge.activityId);
    //     console.log(localStorage.getItem("walletAddress")||"");
    //     console.log(localStorage.getItem("customerNo")||"");
    //     console.log(jsonResponse);
    //     localStorage.setItem("whiteListUrl",jsonResponse.whiteListUrl);
    //     localStorage.setItem("claimBadgeUrl",jsonResponse.claimBadgeUrl);
    //     console.log(claimBadgeUrl);
    // }


    const badge = props.badge;
    
    return(
            <div className="badgeProfile">
                <div className="badgeProfileInner">
                    <div className="badgeProfileL">
                        <div className="badgeProfileImg" 
                            style={{backgroundImage:"url("+badge.badgeImgUrl+")", backgroundSize: "contain"}}>
                        </div>
                    </div>
                    <div className="badgeProfileR">
                        <button className='closeButton' onClick={props.handleClose}></button>
                        <h2><span>{badge.activityName}#{badge.badgeAsaId}</span><br/>{badge.activityDescription}</h2>
                        <h3><span>How To Participate</span> <br/>{badge.activityLink}</h3>
                        <h3><span>Event Time:</span><br/>{badge.startDateTime} to {badge.endDateTime}</h3>
                        <h3><span>ASA ID:</span><br/>{badge.badgeAsaId}</h3>
                        
                        <h3><span>Collected/Total</span><br/>{badge.badgeHasClaimed}/{badge.badgeTotal}</h3>
                        <h3><span>Event Organizer</span><br/>{badge.organizer}</h3>

                        <div style={{display:"flex", flexWrap:"wrap"}}>
                            <button className='badgeButton' onClick={optIn}>Opt In</button>
                            <button className='badgeButton' onClick={whiteList}>White List</button>
                            {/* <a href={`${localStorage.getItem("whiteListUrl")}`}><button className='badgeButton'>White List</button></a>
                            <a href={`${localStorage.getItem("claimBadgeUrl")}`}><button className='badgeButton'>Claim Badge</button></a> */}
                            <div style={{width:"180px",height:"30px", lineHeight:"12.5px",fontSize:"2px", fontWeight:"200", marginBottom:"20px"}}>Please pay close attention to the social media channel from the organizer</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BadgeProfile;