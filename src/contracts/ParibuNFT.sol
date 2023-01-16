// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0; // range of compiler

import "./ERC721.sol";
import "./ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ParibuNFT is ERC721Enumerable, Ownable {
    // ESSENTIAL VARIABLES
    using Strings for uint256;

    mapping(string => uint8) existingURIs;
    mapping(uint256 => address) public holderOf;

    address public artist;
    uint256 public royalityFee;
    uint256 public supply = 0;
    uint256 public totalTx = 0;
    uint256 public cost = 0.01 ether;
}
