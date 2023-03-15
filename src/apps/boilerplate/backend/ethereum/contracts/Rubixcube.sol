// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ShereniToken is ERC20, Pausable, ReentrancyGuard {

    uint256 private constant CAP = 1000000 * (10 ** 18);
    uint256 private constant INITIAL_SUPPLY = 750000 * (10 ** 18);

    address public _owner;

    modifier onlyOwner () {
        require(msg.sender == _owner, "Not owner");
        _;
    }

    constructor() ERC20("RubiXube", "RXBE") {
        _owner = msg.sender;
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal whenNotPaused override {
        super._beforeTokenTransfer(from, to, amount);

        // Burn 0.5% of transferred tokens
        uint256 burnAmount = (amount * 5) / 1000;
        _burn(from, burnAmount);
    }

    function recoverLostTokens(address tokenAddress) external onlyOwner nonReentrant {
        uint256 balance = IERC20(tokenAddress).balanceOf(address(this));
        IERC20(tokenAddress).transfer(msg.sender, balance);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function _mint(address account, uint256 amount) internal virtual override {
        require(totalSupply() + amount <= CAP,"ERC20Capped: cap exceeded");
        super._mint(account, amount);
    }
}