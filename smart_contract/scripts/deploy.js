const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("transactions deployed to:", transactions.address);
}

const runMain = async ()=>{
  try{
    await main()
    // our process is successfully
    process.exit(0)
  }
  catch(error){
    console.log('holi mundo')
    process.exit(1)
  }
}

runMain()