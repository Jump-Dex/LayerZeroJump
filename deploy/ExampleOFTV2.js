const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const { ethers } = require("hardhat")

module.exports = async function ({ deployments, getNamedAccounts }) {
    console.log("I AM HERE")
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name]
    console.log(`[${hre.network.name}] Endpoint Address: ${lzEndpointAddress}`)
    const globalSupply = ethers.utils.parseUnits("0", 18)
    const sharedDecimals = 6

    await deploy("OFTV2Mock", {
        from: deployer,
        args: [lzEndpointAddress, globalSupply, sharedDecimals],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["OFTV2Mock"]
