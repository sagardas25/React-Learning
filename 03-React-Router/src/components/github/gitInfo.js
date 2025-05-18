export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/sagardas25");
  const resp = await  response.json();
  console.log(resp);
  
  return resp;
};
