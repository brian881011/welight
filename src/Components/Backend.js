/*申请获得活动徽章 
{"result": "FAIL",
  "resultCode": "ACTIVITY_NOT_EXISTS",
  "resultMessage": "string"
}*/
const applyActivityBadge = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/badge/claim",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "activityId": 0,
            "address": "string",
            "claimDateTime": "2022-01-24T17:52:34.100Z",
            "seqNo": "string"
        }),
    }
);}

/*获取活动已领取徽章地址列表
{
  "currentPage": 0,
  "pageSize": 0,
  "result": "FAIL",
  "resultCode": "ACTIVITY_NOT_EXISTS",
  "resultMessage": "string",
  "rows": [
    {
      "address": "string",
      "claimDateTime": "2022-01-24T17:57:28.400Z"
    }
  ],
  "totalCount": 0
}*/
const getCompletedActivity = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/badge/list",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "activityId": 0,
            "currentPage": 0,
            "pageSize": 0,
            "seqNo": "string"
          }),
    }
);}

/*取消活动
{
  "result": "FAIL",
  "resultCode": "ACTIVITY_NOT_EXISTS",
  "resultMessage": "string"
}*/
const cancelActivity = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/cancel",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "activityId": 0,
            "address": "string",
            "customerNo": "string"
          }),
    }
);}

/*获取所有的活动列表
{
  "currentPage": 0,
  "pageSize": 0,
  "result": "FAIL",
  "resultCode": "ACTIVITY_NOT_EXISTS",
  "resultMessage": "string",
  "rows": [
    {
      "activityDescription": "string",
      "activityId": 0,
      "activityName": "string",
      "activityStatus": "string",
      "applyDate": "2022-01-26",
      "badgeAsaId": 0,
      "badgeHasClaimed": 0,
      "badgeImgUrl": "string",
      "badgeTotal": 0,
      "endDateTime": "2022-01-26T06:37:14.236Z",
      "startDateTime": "2022-01-26T06:37:14.236Z",
      "timeZone": "string"
    }
  ],
  "totalCount": 0
}*/
const getAllActivity = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/list",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "currentPage": 0,
          "pageSize": 0,
          "seqNo": "string"
        }),
    }
);}

const getUnderway = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/list/underway",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "currentPage": 0,
          "pageSize": 0,
          "seqNo": "string"
        }),
    }
);}

const getUpcoming = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/list/upcoming",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "currentPage": 0,
          "pageSize": 0,
          "seqNo": "string"
        }),
    }
);}

/*查询活动项的详细信息
{
  "activityAccess": "string",
  "activityDescription": "string",
  "activityId": 0,
  "activityIssuer": "string",
  "activityName": "string",
  "activityStatus": "CANCEL",
  "badgeAsaId": 0,
  "badgeImg": "string",
  "badgeName": "string",
  "badgeTotal": 0,
  "discord": "string",
  "endDateTime": "2022-01-26T06:41:47.567Z",
  "initiatorRole": "string",
  "mail": "string",
  "organizer": "string",
  "reddit": "string",
  "result": "FAIL",
  "resultCode": "ACTIVITY_NOT_EXISTS",
  "resultMessage": "string",
  "startDateTime": "2022-01-26T06:41:47.567Z",
  "telegram": "string",
  "timeZone": "string",
  "twitter": "string"
}*/

const getBadgeDetails = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/query",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "activityId": 0
        }),
    }
);}

/*创建/发布一个活动
{
  "activityId": 0,
  "result": "FAIL",
  "resultCode": "ACTIVITY_NOT_EXISTS",
  "resultMessage": "string"
}*/
const releaseActivity = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/release",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "activityAccess": "string",
          "activityDescription": "string",
          "activityLink": "string",
          "activityName": "string",
          "badgeImgUrl": "string",
          "badgeName": "string",
          "badgeTotal": 0,
          "discord": "string",
          "endDateTime": "2022-01-26T06:57:17.613Z",
          "initiatorRole": "string",
          "issuerAddress": "string",
          "mail": "string",
          "organizer": "string",
          "reddit": "string",
          "seqNo": "string",
          "startDateTime": "2022-01-26T06:57:17.613Z",
          "telegram": "string",
          "timeZone": "string",
          "twitter": "string"
        }),
    }
);}


/*返回某个活动的白名单列表
{
  "currentPage": 0,
  "pageSize": 0,
  "result": "FAIL",
  "resultCode": "ACTIVITY_NOT_EXISTS",
  "resultMessage": "string",
  "rows": [
    {
      "activityId": 0,
      "address": "string",
      "disabledEnum": "NO",
      "hasClaimed": "NO"
    }
  ],
  "totalCount": 0
}*/
const getWhiteList = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/whiteList",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "activityId": 0,
          "currentPage": 0,
          "pageSize": 0,
          "seqNo": "string"
        }),
    }
);}

/*复核某个地址是否在申请活动徽章的白名单
{
  "checked": true,
  "result": "FAIL",
  "resultCode": "ACTIVITY_NOT_EXISTS",
  "resultMessage": "string"
}*/
const checkWhiteList = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/whiteList/check",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "address": "string",
          "customerNo": "string",
          "randomClaimKey": "string",
          "seqNo": "string"
        }),
    }
);}

/*注册某个活动的白名单
{
  "result": "FAIL",
  "resultCode": "ACTIVITY_NOT_EXISTS",
  "resultMessage": "string"
}*/
const registerWhiteList = async () =>{
  const response = await fetch(
    "http://139.155.71.103:8081/activity/whiteList/check",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "activityId": 0,
          "address": "string",
          "registerDateTime": "2022-01-26T07:27:26.378Z",
          "seqNo": "string"
        }),
    }
);}