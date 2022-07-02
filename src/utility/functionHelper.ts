
export const ConvertAnswerToArray=(oldObj:any)=>{
  const res = Object.entries(oldObj).map(([name, obj]) => ({ name, ...obj }))
  console.log("convertAnswerToArray",res)
  return res;

};


