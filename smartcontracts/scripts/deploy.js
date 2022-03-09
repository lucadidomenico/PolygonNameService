const main = async () => {
    // The first return is the deployer, the second is a random account
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy(".it");
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address);
    console.log("Contract deployed by:", owner.address);
  
    // let txn = await domainContract.register("mortal",  {value: hre.ethers.utils.parseEther('0.01')});
    // await txn.wait();
  
    // const domainAddress = await domainContract.getAddress("mortal");
    // console.log("Owner of domain mortal:", domainAddress);

    // txn = await domainContract.setEmail("mortal", "test@test.it");
    // await txn.wait();
    // const email = await domainContract.getEmail("mortal");
    // console.log("owner's email of domain mortal:", email);

    // txn = await domainContract.setWebsite("mortal", "www.amazing.com");
    // await txn.wait();
    // const website = await domainContract.getWebsite("mortal");
    // console.log("owner's website of domain mortal:", website);

    // const balance = await hre.ethers.provider.getBalance(domainContract.address);
    // console.log("Contract balance:", hre.ethers.utils.formatEther(balance));  
  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  