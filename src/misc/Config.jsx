const base_api=`https://api.tvmaze.com/`;

export async function apiGet(queryString){
  const response=await  fetch(`${base_api}${queryString}`).then(r=>r.json());
  return response;
  //response is a json format of the data 
}