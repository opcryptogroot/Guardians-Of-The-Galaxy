import type { AppProps } from "next/app";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import BountyProvider from "../contexts/BountyProvider";
import GuardProvider from "../contexts/GuardProvider";
import GuardStakingProvider from "../contexts/GuardStakingProvider";
import StakingProvider from "../contexts/StakingProvider";
import StakingStatusProvider from "../contexts/StakingStatusUpdate";
import PopupProvider from "../contexts/popup";
import Web3ModalProvider from "../contexts/Web3ModalProvider";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <BlockchainProviders>
        <PopupProvider>
          <StakingStatusProvider>
          <Component {...pageProps} />
          </StakingStatusProvider>
        </PopupProvider>
        <div
          dangerouslySetInnerHTML={{
            __html: `<script>;var elements=document.querySelectorAll('.discord-dialog__close-button, .discord-dialog');for(var i=0;i<elements.length;i++){elements[i].addEventListener('click',function(){toggle('.discord-dialog')})};</script><style>@import "https://fonts.cdnfonts.com/css/whitney-2";.discord-dialog *,.discord-dialog :after,.discord-dialog :before{box-sizing:inherit}.discord-dialog a{text-decoration:none}@keyframes discord-dialog__transition{0%{opacity:0;transform:translateY(16px);}100%{opacity:1;transform:translateY(0);}}.discord-dialog{-webkit-tap-highlight-color:transparent;box-sizing:border-box;display:none;z-index:2147483647;position:fixed;max-width:288px;right:0;bottom:0;margin:18px;border-radius:10px;font-family:monospace;background:#2e3136;color:#72767d;box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4);transition:opacity .3s cubic-bezier(.25,.8,.25,1),transform .3s cubic-bezier(.25,.8,.25,1);animation:discord-dialog__transition .2s}.discord-dialog--active{display:block}.discord-dialog__container{font-size:14px;line-height:1.2;color:#99aab5;padding:8px 28px 28px 28px}.discord-dialog__logo{display:none;width:auto;margin-top:5px;height:24px}.discord-dialog__logo path{fill:#fff}.discord-dialog__close-button{position:absolute;right:0;padding:16px;cursor:pointer}.discord-dialog__close-button svg{height:20px;width:20px}.discord-dialog__close-button svg path{fill:#ccc}.discord-dialog__close-button:hover{opacity:.8}.discord-dialog__close-button:active{opacity:.4}.discord-dialog__footer{padding:10px 20px}.discord-dialog__guild-icon{border-radius:50%;width:64px;display:block;height:auto;margin:16px 0}.discord-dialog__guild{font-size:24px;line-height:30px;margin-bottom:12px;font-weight:700;color:#fff}.discord-dialog__btn{background:#00b74a;color:#fff;text-align:center;display:block;border-radius:1px;margin:8px;font-size:16px;line-height:24px;border-radius:3px;text-align:center;padding:12px 16px;position:relative;top:-6px;box-shadow:0 2px 4px rgba(0,0,0,.3);transition:box-shadow .3s cubic-bezier(.25,.8,.25,1),background .3s cubic-bezier(.25,.8,.25,1)}.discord-dialog__btn:hover{background:#03c44d}.discord-dialog__btn:active{background:#00b74a}.discord-dialog__explainer{display:block;margin:2px 8px;color:#00b74a;font-size:12px;text-align:right;top:-6px}.discord-dialog__explainer:hover{opacity:.8}.discord-dialog__explainer:active{opacity:.6}.discord-button{-webkit-tap-highlight-color:transparent;box-sizing:border-box;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);position:fixed;bottom:0;right:0;z-index:50;margin:23.5px;padding:15.5px;border-radius:50%;background:#00b74a;cursor:pointer;transition:box-shadow .3s cubic-bezier(.25,.8,.25,1),background .3s cubic-bezier(.25,.8,.25,1);display:flex;text-align:center;align-items:center;justify-content:center}.discord-button svg{height:28px;width:28px;transition:background .3s cubic-bezier(.25,.8,.25,1)}.discord-button svg path{fill:#fff}.discord-button:hover{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.discord-button:hover svg{opacity:.6}.discord-button:active{box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}.discord-button:active svg{opacity:.4}</style><div class="discord-button" onclick="document.querySelector('.discord-dialog').className = 'discord-dialog discord-dialog--active'"><svg class="discord-button__icon" viewBox="0 0 24 24"><path d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"></path></svg></div><div class="discord-dialog"><div class="discord-dialog__header"><a href="https://discordapp.com"><svg class="discord-dialog__logo" viewBox="0 0 532 130"><path d="M53.2,20.3H20v37.6l22.1,20V41.4H54c7.5,0,11.2,3.7,11.2,9.5v27.9c0,5.8-3.5,9.7-11.2,9.7H20v21.2h33.2 c17.8,0.1,34.5-8.8,34.5-29.4V50.2C87.7,29.4,71,20.3,53.2,20.3z M227.3,80.4V49.6c0-11.1,19.8-13.7,25.8-2.5l18.3-7.5 C264.3,23.7,251.1,19,240.2,19c-17.8,0-35.4,10.4-35.4,30.6v30.8c0,20.3,17.6,30.6,35,30.6c11.2,0,24.6-5.6,32-20.1l-19.6-9.1 C247.4,94.2,227.3,91.2,227.3,80.4z M166.7,53.8c-6.9-1.5-11.5-4-11.8-8.3c0.4-10.4,16.3-10.7,25.6-0.8l14.7-11.4 C186,22,175.6,19,164.8,19c-16.3,0-32.1,9.2-32.1,26.8c0,17.1,13,26.2,27.3,28.4c7.3,1,15.4,3.9,15.2,9c-0.6,9.6-20.2,9.1-29.1-1.8 L132,94.8c8.3,10.7,19.6,16.2,30.2,16.2c16.3,0,34.4-9.5,35.1-26.8C198.3,62.2,182.5,56.7,166.7,53.8z M99.8,109.7h22.4V20.3H99.8 V109.7z M477.5,20.3h-33.2v37.6l22.1,20V41.4h11.8c7.5,0,11.2,3.7,11.2,9.5v27.9c0,5.8-3.5,9.7-11.2,9.7h-34v21.2h33.2 c17.8,0.1,34.5-8.8,34.5-29.4V50.2C512,29.4,495.3,20.3,477.5,20.3z M314.6,19c-18.4,0-36.7,10.1-36.7,30.7v30.6 c0,20.5,18.4,30.7,36.9,30.7c18.4,0,36.7-10.2,36.7-30.7V49.7C351.5,29.2,333,19,314.6,19z M329,80.3c0,6.4-7.2,9.7-14.3,9.7 c-7.2,0-14.4-3.2-14.4-9.7V49.7c0-6.6,7-10.1,14-10.1c7.3,0,14.7,3.2,14.7,10.1V80.3z M431.8,49.7c-0.5-21-14.7-29.4-33-29.4h-35.5 v89.5h22.7V81.3h4l20.6,28.4h28L414.4,79C425.2,75.6,431.8,66.3,431.8,49.7z M399.2,61.8h-13.2V41.4h13.2 C413.4,41.4,413.4,61.8,399.2,61.8z"/></svg></a></div><div class="discord-dialog__close-button" onclick="document.querySelector('.discord-dialog').className = 'discord-dialog'"><svg viewBox="0 0 24 24"><path fill="#000000" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg></div><div class="discord-dialog__container"><div class="discord-dialog__guild">Join the Guardians</div> If you haven't used Discord before: it's free, secure, and works on both your desktop and phone. </div><div class="discord-dialog__footer"><a href="https://discord.gg/TMcqAhz656" target="_blank" class="discord-dialog__btn">Join the server now</a></div></div>`,
          }}
        />
        <NotificationContainer />
      </BlockchainProviders>
  );

}

const BlockchainProviders = (props: any) => {
  return (
    <Web3ModalProvider>
      <BountyProvider>
        <GuardProvider>
          <GuardStakingProvider>
            <StakingProvider>
              {props.children}
            </StakingProvider>
          </GuardStakingProvider>      
        </GuardProvider>
      </BountyProvider>
    </Web3ModalProvider>
  )
}

export default MyApp;
