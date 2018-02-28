pragma solidity ^0.4.6;

contract HealthContract {
    struct Claim {
        string coName;
        uint claimId;
        uint previousClaimId;
        uint timeStamp;
        string secret;
    }

    mapping(uint => Claim) Trail;
    uint8 TrailCount = 0;

    function addNewClaim(uint claimId, string coName, string secret) public {
        Claim memory newClaim;
        newClaim.coName = coName;
        newClaim.claimId = claimId;
        newClaim.secret = secret;
        newClaim.timeStamp = now;

        if ( TrailCount != 0 ) {
            newClaim.previousClaimId = Trail[TrailCount].claimId;
        }

        Trail[TrailCount] = newClaim;
        TrailCount++;
    }

    function getTrailCount() public returns(uint8) {
        return TrailCount; 
    }

    function getLocation(uint8 trailNo) public returns(string,uint,uint,uint,string) {
        return (Trail[trailNo].coName, Trail[trailNo].claimId, Trail[trailNo].previousClaimId, Trail[trailNo].timeStamp, Trail[trailNo].secret);
    }
}