pragma solidity ^0.4.21;


contract RONtoUSDOracle {
    address public owner;

    uint private ronToUSDRate;

    event CallbackGetRONtoUSD();

    function RONtoUSDOracle() public {
        owner = msg.sender;
    }

    function updateRONtoUSD() public {
        emit CallbackGetRONtoUSD();
    }

    function setRONToUSDRate(uint rate) public {
    // If it isn't sent by a trusted oracle a.k.a ourselves, ignore it
        require(msg.sender == owner);
        ronToUSDRate = rate;
    }

    function getRonToUSDRate()  public constant returns (uint) {
        return ronToUSDRate;
    }
}
