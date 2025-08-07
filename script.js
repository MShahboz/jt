document.addEventListener('DOMContentLoaded', () => {
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://github.com/tonconnect-manifest.json',
        buttonRootId: 'connect-wallet'
    });

    const connectWalletButton = document.getElementById('connect-wallet');
    const presaleInfo = document.getElementById('presale-info');
    const walletAddressSpan = document.getElementById('wallet-address');
    const buySmokyButton = document.getElementById('buy-smoky');
    const tonAmountInput = document.getElementById('ton-amount');

    tonConnectUI.onStatusChange(wallet => {
        if (wallet) {
            const walletAddress = wallet.account.address;
            walletAddressSpan.textContent = walletAddress;
            presaleInfo.style.display = 'block';
            connectWalletButton.style.display = 'none';

            const referralLinkContainer = document.getElementById('referral-link-container');
            const referralLinkSpan = document.getElementById('referral-link');
            const referralLink = `${window.location.href}?ref=${walletAddress}`;
            referralLinkSpan.textContent = referralLink;
            referralLinkContainer.style.display = 'block';
        } else {
            presaleInfo.style.display = 'none';
            connectWalletButton.style.display = 'block';
            document.getElementById('referral-link-container').style.display = 'none';
        }
    });

    buySmokyButton.addEventListener('click', () => {
        const amount = tonAmountInput.value;
        if (amount > 0) {
            // TODO: Implement the logic to buy Smoky tokens
            console.log(`Buying Smoky with ${amount} TON`);
        } else {
            alert('Please enter a valid amount.');
        }
    });
});
