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

    // Defining Events and Structures
    event Sale(
        uint256 id,
        address indexed owner,
        uint256 cost,
        string metadataURI,
        uint256 timestamp
    );

    struct TransactionStruct {
        uint256 id;
        address owner;
        uint256 cost;
        string title;
        string description;
        string metadataURI;
        uint256 timestamp;
    }

    TransactionStruct[] transactions;
    TransactionStruct[] minted;

    // Defining Constructor Parameter

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _royalityFee,
        address _artist
    ) ERC721(_name, _symbol) {
        royalityFee = _royalityFee;
        artist = _artist;
    }
}
