const reAssign =  function (data) {
    return (
       {
           type:"REASSIGN_DETAIL",
           payload:data
       }
   )
} 

const updateFruit = function (data) {
    return (
       {
           type:"UPDATE_DETAIL",
           payload:data
       }
   )
} 


export {reAssign, updateFruit};

