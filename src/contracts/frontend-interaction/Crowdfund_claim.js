const { ethers} = require("ethers");
async function  Crowdfund_claim(id){
    
    const Crowdfund_launch_abi = require("../abi/Crowdfunding.json")
   
    const Crowdfundaddr = "0x266Afb2B9175DB9674dDF3d1fE4D3e7644CEc998";

    const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract_signer = new ethers.Contract(
    Crowdfundaddr,
    Crowdfund_launch_abi,
    signer
  );

 



  
  const claim =await contract_signer.claim(id,{gasLimit: 210000})
//   const confirmtxn  = await contract_signer.confirmTransaction()
//   const executetxn  = await contract_signer.executeTransaction()



}



export default Crowdfund_claim;