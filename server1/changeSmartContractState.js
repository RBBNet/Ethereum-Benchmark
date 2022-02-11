const {web3} = require("./pantheon_utils/web3")
const {SMART_CONTRACT_OPTION} = require("./keys")
// set to 1 for faster validation in this course.
web3.transactionConfirmationBlocks = 1
const sha3 = require("js-sha3").keccak_256

let set

const setSimpleStorage = () => {
  console.log("#######################Preparing value for simple storage smart contract stress test#######################")
  const functionName = "setValue"
  const typeOfData = "uint256"
  const valueToSet = 67
  let set = web3.eth.abi.encodeFunctionSignature(`${functionName}(${typeOfData})`)//function name to use
  let value = web3.eth.abi.encodeParameter('uint256', valueToSet)//setting the value

  const txData = set + value.substr(2)
  return txData
}

const setDavid19 = () => { //Set For David-19 smart contract
  console.log("#######################Preparing value for David-19 smart contract stress test #######################")
  const functionName = "register"
  const typeOfData = "bytes32,bytes32,uint256,uint256,uint8,uint8,bytes6,uint8,uint8"
  //const valueToSet = 67
  const hash = '0x' + sha3("some")  
  const id = '0x' + sha3("some")
  const startDate = 123456
  const exp = 567890
  const sex = 0
  const age = 56
  const geoHash = "0x123456789012" //https://www.movable-type.co.uk/scripts/geohash.html
  const credentialType = 0 //confinement
  const reason = 3
  let set = web3.eth.abi.encodeFunctionSignature(`${functionName}(${typeOfData})`)//function name to use
  //let value = web3.eth.abi.encodeParameter('uint256', valueToSet)//setting the value
  let value = web3.eth.abi.encodeParameters(
    ["bytes32","bytes32","uint256","uint256","uint8","uint8","bytes6","uint8","uint8"],
    [hash,id,startDate,exp,sex,age,geoHash,credentialType,reason])//setting the value
  const txData = set + value.substr(2)
  //console.log(txData)
  return txData
}

const chooseSmartContractSetter = () => {
  if (SMART_CONTRACT_OPTION==0){
    set = setSimpleStorage
  }else if (SMART_CONTRACT_OPTION==1) {
    set = setDavid19
  }
}

chooseSmartContractSetter()

//set()
module.exports = {set}
